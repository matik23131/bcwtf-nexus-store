import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import DailySpinWheel from "@/components/DailySpinWheel";

const Spin = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <DailySpinWheel />
      </main>
    </div>
  );
};

export default Spin;
