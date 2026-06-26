export default function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow group">
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-brand-border group-hover:ring-navy-700/30 transition-all duration-300">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-gradient" />
      </div>
      <h3 className="font-display font-bold text-brand-text text-sm leading-snug">{member.name}</h3>
      <p className="text-xs text-navy-700 font-semibold mt-1">{member.role}</p>
    </div>
  );
}
