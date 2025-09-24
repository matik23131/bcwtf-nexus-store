import Header from "@/components/Header";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      user: "Anonymous User",
      rating: 5,
      comment: "Excellent service, works perfectly",
      date: "2024-01-15"
    },
    {
      id: 2,
      user: "Verified Customer",
      rating: 5,
      comment: "Fast delivery and great support",
      date: "2024-01-10"
    },
    {
      id: 3,
      user: "Premium Member",
      rating: 4,
      comment: "Good quality, recommended",
      date: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Customer Reviews
          </h1>
          <p className="text-muted-foreground text-lg">
            What our customers are saying
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{review.user}</h3>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < review.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-muted-foreground text-sm">{review.date}</span>
              </div>
              <p className="text-foreground">{review.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reviews;