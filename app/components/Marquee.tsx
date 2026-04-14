 const items = [
  "📚 School Books",
  "✏️ Stationery",
  "👗 Children's Fashion",
  "👔 Men's Wear",
  "👘 Ladies' Outfits",
  "🎨 Art Supplies",
  "🏫 School Uniforms",
  "📖 Textbooks & Novels",
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="bg-gold py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 font-bold text-sm text-base uppercase tracking-widest"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-base/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
