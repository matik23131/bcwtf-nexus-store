const LoginAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-neon-pink/30 to-cyber-purple/30 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-electric-blue/30 to-neon-pink/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-pink/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-gradient" />
    </div>
  );
};

export default LoginAnimation;