import Header from "@/components/Header";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;