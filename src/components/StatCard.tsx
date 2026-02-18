interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  description: string;
}

const StatCard = ({ icon, label, value, description }: StatCardProps) => {
  return (
    <div className="glass-card rounded-lg p-5 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 scan-line">
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60" />

      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <div className="font-mono-tech text-xs text-muted-foreground uppercase tracking-widest mb-1">{label}</div>
          <div className="font-orbitron text-primary text-lg font-bold glow-text">{value}</div>
          <div className="font-exo text-sm text-foreground/70 mt-1">{description}</div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(188 100% 50% / 0.05) 0%, transparent 70%)' }} />
    </div>
  );
};

export default StatCard;
