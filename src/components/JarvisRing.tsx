const JarvisRing = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(188 100% 50% / 0.3) 0%, transparent 70%)' }} />

      {/* Ring 1 - outermost */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-rotate-ring"
        style={{ borderStyle: 'dashed' }} />

      {/* Ring 2 */}
      <div className="absolute inset-4 rounded-full border border-primary/40 animate-rotate-ring-reverse" />

      {/* Ring 3 - main glowing ring */}
      <div className="absolute inset-8 rounded-full border-2 border-primary animate-pulse-glow"
        style={{ boxShadow: '0 0 15px hsl(188 100% 50% / 0.6), inset 0 0 15px hsl(188 100% 50% / 0.1)' }} />

      {/* Ring 4 - inner */}
      <div className="absolute inset-14 rounded-full border border-accent/50 animate-rotate-ring"
        style={{ animationDuration: '5s' }} />

      {/* Arc segments on ring 3 */}
      <div className="absolute inset-8 rounded-full animate-rotate-ring" style={{ animationDuration: '6s' }}>
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          style={{ boxShadow: '0 0 10px hsl(188 100% 50%)' }} />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/70" />
      </div>

      {/* Center core */}
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(188 100% 50% / 0.2) 0%, hsl(220 40% 4%) 70%)', boxShadow: '0 0 20px hsl(188 100% 50% / 0.4)' }}>
        <div className="w-12 h-12 rounded-full border border-primary/60 animate-breath flex items-center justify-center"
          style={{ background: 'radial-gradient(circle, hsl(188 100% 50% / 0.15) 0%, transparent 70%)' }}>
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse"
            style={{ boxShadow: '0 0 15px hsl(188 100% 50%)' }} />
        </div>
      </div>

      {/* HUD tick marks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <div key={i}
          className="absolute w-full h-full"
          style={{ transform: `rotate(${angle}deg)` }}>
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-2 ${i % 2 === 0 ? 'w-1 bg-primary' : 'w-0.5 bg-primary/40'}`}
            style={{ boxShadow: i % 2 === 0 ? '0 0 4px hsl(188 100% 50%)' : 'none' }} />
        </div>
      ))}
    </div>
  );
};

export default JarvisRing;
