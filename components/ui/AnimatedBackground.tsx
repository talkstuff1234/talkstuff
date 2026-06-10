export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0d0d0d]">
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--primary-color)]/30 blur-[180px] animate-float" />
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-[var(--primary-color)]/20 blur-[180px] animate-float" />
      <div className="absolute bottom-0 left-1/3 h-[200px] w-[200px] rounded-full bg-[var(--primary-color)]/10 blur-[180px] animate-float" />
    </div>
  );
}
