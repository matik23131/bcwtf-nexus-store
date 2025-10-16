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
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-background via-background to-primary/5 border-primary/20">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="flex items-center justify-center gap-2 text-3xl font-bold">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          Daily Spin Wheel
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
        </CardTitle>
        <CardDescription className="text-base">
          Spin once daily for exclusive discounts!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 pb-8">
        {/* Wheel Container */}
        <div className="relative w-80 h-80 mx-auto">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-50 animate-pulse" />
          
          {/* Wheel */}
          <div className="relative w-full h-full">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full transition-transform duration-[4000ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Wheel segments */}
              {rewards.map((reward, index) => {
                const angle = (360 / rewards.length) * index;
                const nextAngle = (360 / rewards.length) * (index + 1);
                const isEven = index % 2 === 0;
                
                // Calculate path for segment
                const startAngle = (angle - 90) * (Math.PI / 180);
                const endAngle = (nextAngle - 90) * (Math.PI / 180);
                const x1 = 200 + 190 * Math.cos(startAngle);
                const y1 = 200 + 190 * Math.sin(startAngle);
                const x2 = 200 + 190 * Math.cos(endAngle);
                const y2 = 200 + 190 * Math.sin(endAngle);
                
                const path = `M 200 200 L ${x1} ${y1} A 190 190 0 0 1 ${x2} ${y2} Z`;
                
                // Calculate text position
                const textAngle = (angle + nextAngle) / 2;
                const textAngleRad = (textAngle - 90) * (Math.PI / 180);
                const textX = 200 + 120 * Math.cos(textAngleRad);
                const textY = 200 + 120 * Math.sin(textAngleRad);
                
                return (
                  <g key={index}>
                    <path
                      d={path}
                      fill={isEven ? "hsl(var(--primary) / 0.9)" : "hsl(var(--accent) / 0.9)"}
                      stroke="hsl(var(--background))"
                      strokeWidth="2"
                    />
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-primary-foreground font-bold text-xl"
                      transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                    >
                      {reward.label}
                    </text>
                  </g>
                );
              })}
              
              {/* Center circle */}
              <circle cx="200" cy="200" r="50" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="4" />
            </svg>
            
            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Gift className="w-12 h-12 text-primary animate-bounce" />
            </div>
          </div>

          {/* Pointer arrow */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-t-primary border-l-transparent border-r-transparent drop-shadow-lg" />
          </div>
        </div>

        {/* Spin Button */}
        <div className="space-y-4">
          <Button
            onClick={handleSpin}
            disabled={!canSpin || spinning}
            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/50 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            size="lg"
          >
            {spinning ? (
              <>
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                Spinning...
              </>
            ) : canSpin ? (
              <>
                <Gift className="w-5 h-5 mr-2" />
                Spin Now!
              </>
            ) : (
              "Come back tomorrow!"
            )}
          </Button>

          {lastSpin && !canSpin && (
            <p className="text-center text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
              Last spin: {lastSpin.toLocaleDateString()} at {lastSpin.toLocaleTimeString()}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySpinWheel;
