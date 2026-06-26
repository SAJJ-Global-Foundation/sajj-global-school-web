export default function Card({ children, className = '', hover = true, padding = true }) {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-card
        ${hover ? 'hover:shadow-card-hover transition-shadow duration-300' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
