import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Gift, Sparkles, Zap } from "lucide-react";

interface SpinResult {
  type: string;
  value: number;
  label: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

const DailySpinWheel = () => {
  const { user } = useAuth();
  const [canSpin, setCanSpin] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [offset, setOffset] = useState(0);
  const [lastSpin, setLastSpin] = useState<Date | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  // Rewards with rarity tiers (for visual styling)
  const baseRewards: SpinResult[] = [
    { type: "discount", value: 5, label: "5% OFF", rarity: "common" },
    { type: "discount", value: 10, label: "10% OFF", rarity: "rare" },
    { type: "discount", value: 15, label: "15% OFF", rarity: "epic" },
    { type: "discount", value: 20, label: "20% OFF", rarity: "legendary" },
    { type: "discount", value: 25, label: "25% OFF", rarity: "legendary" },
  ];

  // Create a long strip by repeating rewards
  const rewards = Array(30).fill(baseRewards).flat();

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
    if (random < 0.7) return baseRewards[0]; // 5%
    if (random < 0.9) return baseRewards[1]; // 10%
    if (random < 0.98) return baseRewards[2]; // 15%
    return baseRewards[3]; // 20%
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "from-gray-500 to-gray-600";
      case "rare": return "from-blue-500 to-blue-600";
      case "epic": return "from-purple-500 to-purple-600";
      case "legendary": return "from-yellow-500 to-orange-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case "common": return "shadow-gray-500/50";
      case "rare": return "shadow-blue-500/50";
      case "epic": return "shadow-purple-500/50";
      case "legendary": return "shadow-yellow-500/50";
      default: return "shadow-gray-500/50";
    }
  };

  const handleSpin = async () => {
    if (!canSpin || spinning || !user) return;

    setSpinning(true);
    const reward = getRiggedReward();
    
    // Find a matching reward in the strip (prefer middle-end of strip)
    const matchingIndices = rewards
      .map((r, i) => (r.value === reward.value && r.type === reward.type ? i : -1))
      .filter(i => i > rewards.length * 0.6 && i < rewards.length * 0.8);
    
    const targetIndex = matchingIndices[Math.floor(Math.random() * matchingIndices.length)];
    const itemWidth = 180; // Width of each item card
    const centerOffset = window.innerWidth / 2 - itemWidth / 2;
    const targetOffset = -(targetIndex * itemWidth - centerOffset);
    
    // Add extra spins for effect
    const finalOffset = targetOffset - (rewards.length * 0.3 * itemWidth);
    
    setOffset(finalOffset);

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
    }, 5000); // Longer animation time
  };

  return (
    <Card className="max-w-5xl mx-auto bg-gradient-to-br from-background via-background to-primary/5 border-primary/20 overflow-hidden">
      <CardHeader className="text-center space-y-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <CardTitle className="flex items-center justify-center gap-3 text-4xl font-bold">
          <Zap className="w-8 h-8 text-primary animate-pulse" />
          Daily Case Opening
          <Zap className="w-8 h-8 text-primary animate-pulse" />
        </CardTitle>
        <CardDescription className="text-base">
          Open your daily case for exclusive discount codes!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8 pb-8 pt-8">
        {/* Case Opening Strip */}
        <div className="relative h-64 bg-gradient-to-b from-background/50 to-primary/5 rounded-lg overflow-hidden border-2 border-primary/30">
          {/* Center indicator line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent z-20 shadow-lg shadow-primary/50" />
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary blur-sm z-20" />
          
          {/* Reward strip */}
          <div 
            ref={stripRef}
            className="absolute top-1/2 -translate-y-1/2 flex gap-4 py-8 px-8 transition-transform duration-[5000ms] ease-out"
            style={{ 
              transform: `translateX(${offset}px)`,
              willChange: 'transform'
            }}
          >
            {rewards.map((reward, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-40 h-48 rounded-lg bg-gradient-to-br ${getRarityColor(reward.rarity)} 
                  border-2 border-white/20 shadow-xl ${getRarityGlow(reward.rarity)} 
                  flex flex-col items-center justify-center gap-3 relative overflow-hidden
                  ${spinning ? 'blur-[1px]' : ''}`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                
                <Gift className="w-12 h-12 text-white drop-shadow-lg" />
                <div className="text-center z-10">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">
                    {reward.label}
                  </div>
                  <div className="text-xs text-white/80 uppercase tracking-wider font-semibold">
                    {reward.rarity}
                  </div>
                </div>
                
                {/* Rarity indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30" />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Spin Button */}
        <div className="space-y-4">
          <Button
            onClick={handleSpin}
            disabled={!canSpin || spinning}
            className="w-full h-16 text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 shadow-lg shadow-primary/50 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 relative overflow-hidden group"
            size="lg"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {spinning ? (
              <>
                <Sparkles className="w-6 h-6 mr-2 animate-spin" />
                Opening Case...
              </>
            ) : canSpin ? (
              <>
                <Gift className="w-6 h-6 mr-2" />
                Open Case!
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6 mr-2" />
                Come back tomorrow!
              </>
            )}
          </Button>

          {lastSpin && !canSpin && (
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                Last case opened: {lastSpin.toLocaleDateString()} at {lastSpin.toLocaleTimeString()}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Next case available in: {Math.ceil((24 - (Date.now() - lastSpin.getTime()) / (1000 * 60 * 60)))} hours
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySpinWheel;
