import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to BC.WTF
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Index;