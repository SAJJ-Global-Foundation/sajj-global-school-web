import { Quote } from 'lucide-react';

export default function MessageCard({ person, short = false }) {
  return (
    <article className="bg-white rounded-2xl shadow-card overflow-hidden flex flex-col sm:flex-row">
      {/* Portrait */}
      <div className="sm:w-52 flex-shrink-0 bg-navy-800">
        <img
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          className="w-full h-48 sm:h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-4">
        <div>
          {/* Gradient accent bar */}
          <div className="h-1 w-12 rounded-full bg-brand-gradient mb-5" />
          <div className="text-brand-cyan/30 mb-3">
            <Quote size={32} />
          </div>
          <blockquote className="text-brand-muted leading-relaxed text-sm sm:text-base">
            {short
              ? person.message.slice(0, 220) + (person.message.length > 220 ? '…' : '')
              : person.message}
          </blockquote>
        </div>
        <div>
          <p className="font-display font-bold text-navy-900 text-lg">{person.name}</p>
          <p className="text-sm text-navy-700 font-medium">{person.role}</p>
          {person.qualification && (
            <p className="text-xs text-brand-muted mt-0.5">{person.qualification}</p>
          )}
        </div>
      </div>
    </article>
  );
}
