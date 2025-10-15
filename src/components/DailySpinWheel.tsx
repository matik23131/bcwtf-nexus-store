import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Gift, Sparkles } from "lucide-react";

interface SpinResult {
  type: string;
  value: number;
  label: string;
}

const DailySpinWheel = () => {
  const { user } = useAuth();
  const [canSpin, setCanSpin] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [lastSpin, setLastSpin] = useState<Date | null>(null);

  // Rigged rewards - weighted probabilities
  const rewards: SpinResult[] = [
    { type: "discount", value: 5, label: "5% OFF" },
    { type: "discount", value: 10, label: "10% OFF" },
    { type: "discount", value: 5, label: "5% OFF" },
    { type: "discount", value: 15, label: "15% OFF" },
    { type: "discount", value: 5, label: "5% OFF" },
    { type: "discount", value: 20, label: "20% OFF" },
    { type: "discount", value: 5, label: "5% OFF" },
    { type: "discount", value: 25, label: "25% OFF" },
  ];

  useEffect(() => {
    if (user) {
      checkSpinAvailability();
    }
  }, [user]);

  const checkSpinAvailability = async () => {
    try {
      const { data, error } = await supabase
        .from("daily_spins")
        .select("last_spin_date")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error && error.code !== "PGRST116") throw error;

      if (data) {
        const lastSpinDate = new Date(data.last_spin_date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        lastSpinDate.setHours(0, 0, 0, 0);

        setCanSpin(lastSpinDate < today);
        setLastSpin(new Date(data.last_spin_date));
      } else {
        setCanSpin(true);
      }
    } catch (error) {
      console.error("Error checking spin availability:", error);
    }
  };

  const getRiggedReward = (): SpinResult => {
    // Rigged logic: 70% chance for 5%, 20% for 10%, 8% for 15%, 2% for higher
    const random = Math.random();
    if (random < 0.7) return rewards[0]; // 5%
    if (random < 0.9) return rewards[1]; // 10%
    if (random < 0.98) return rewards[3]; // 15%
    return rewards[5]; // 20%
  };

  const handleSpin = async () => {
    if (!canSpin || spinning || !user) return;

    setSpinning(true);
    const reward = getRiggedReward();
    const rewardIndex = rewards.findIndex(r => r.value === reward.value && r.type === reward.type);
    const segmentAngle = 360 / rewards.length;
    const targetRotation = 360 * 5 + (rewardIndex * segmentAngle) + (segmentAngle / 2);
    
    setRotation(targetRotation);

    setTimeout(async () => {
      try {
        // Save spin to database
        const { error: spinError } = await supabase
          .from("daily_spins")
          .insert({
            user_id: user.id,
            reward_type: reward.type,
            reward_value: reward.value,
          });

        if (spinError) throw spinError;

        // Create coupon
        const couponCode = `SPIN${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7); // Valid for 7 days

        const { error: couponError } = await supabase
          .from("coupons")
          .insert({
            user_id: user.id,
            code: couponCode,
            discount_percentage: reward.value,
            expires_at: expiresAt.toISOString(),
          });

        if (couponError) throw couponError;

        toast.success(
          `You won ${reward.label}! Code: ${couponCode}`,
          { duration: 5000 }
        );

        setCanSpin(false);
        setLastSpin(new Date());
      } catch (error) {
        console.error("Error processing spin:", error);
        toast.error("Failed to process spin");
      } finally {
        setSpinning(false);
      }
    }, 3000);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-neon-pink" />
          Daily Spin Wheel
          <Sparkles className="w-5 h-5 text-neon-pink" />
        </CardTitle>
        <CardDescription>
          Spin once daily for exclusive discounts!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative w-64 h-64 mx-auto">
          {/* Wheel */}
          <div
            className="w-full h-full rounded-full border-4 border-neon-pink shadow-lg shadow-neon-pink/50 relative overflow-hidden transition-transform duration-3000 ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {rewards.map((reward, index) => {
              const angle = (360 / rewards.length) * index;
              return (
                <div
                  key={index}
                  className="absolute w-full h-full flex items-center justify-center"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: "50% 50%",
                  }}
                >
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[80px] border-r-[80px] border-t-[130px] ${
                      index % 2 === 0
                        ? "border-t-neon-pink/80"
                        : "border-t-purple-500/80"
                    } border-l-transparent border-r-transparent`}
                  />
                  <span
                    className="absolute top-8 left-1/2 -translate-x-1/2 text-white font-bold text-sm"
                    style={{ transform: "rotate(0deg)" }}
                  >
                    {reward.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-background rounded-full border-4 border-neon-pink flex items-center justify-center shadow-lg">
            <Gift className="w-8 h-8 text-neon-pink" />
          </div>

          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-b-neon-pink border-l-transparent border-r-transparent z-10" />
        </div>

        <Button
          onClick={handleSpin}
          disabled={!canSpin || spinning}
          className="w-full"
          size="lg"
        >
          {spinning ? "Spinning..." : canSpin ? "Spin Now!" : "Come back tomorrow!"}
        </Button>

        {lastSpin && !canSpin && (
          <p className="text-center text-sm text-muted-foreground">
            Last spin: {lastSpin.toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default DailySpinWheel;
