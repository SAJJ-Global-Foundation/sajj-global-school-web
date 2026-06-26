export default function StatCard({ icon: Icon, value, label, suffix = '' }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-brand-cyan">
          <Icon size={24} />
        </div>
      )}
      <div className="font-display font-bold text-4xl sm:text-5xl gradient-text leading-none">
        {value}{suffix}
      </div>
      <p className="text-slate-300 text-sm sm:text-base mt-2 font-medium">{label}</p>
    </div>
  );
}
