import { FiClipboard, FiSearch, FiZap, FiShield, FiCheckCircle } from "react-icons/fi";

const cards = [
  {
    icon: FiClipboard,
    title: "Initial Consultation",
    description:
      "We assess your KRA tax issue, including audits, disputes, and KRA tax assessments, and review all relevant documents.",
  },
  {
    icon: FiSearch,
    title: "Case Analysis",
    description:
      "We analyze your case in detail, identifying risks and opportunities in KRA audits, objections, and dispute matters.",
  },
  {
    icon: FiZap,
    title: "Strategy Development",
    description:
      "We develop a tailored approach, including Alternative Dispute Resolution (ADR), Independent Review of Objections, or Tax Appeal Tribunal action.",
  },
  {
    icon: FiShield,
    title: "Representation",
    description:
      "We represent you before KRA in tax audits, objections, ADR processes, and Tax Appeal Tribunal Kenya proceedings.",
  },
  {
    icon: FiCheckCircle,
    title: "Resolution",
    description:
      "We work to resolve disputes by reducing KRA tax assessments, penalties, and ensuring full KRA compliance.",
  },
];

export default function ProcessSection() {
  return (
    <section className="px-4 py-12 bg-gray-200 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight uppercase text-brand-navy-dark md:text-4xl lg:text-5xl">
          Our Process
        </h2>
      </div>

      {/* Subheading */}
      <div className="mb-12 text-center">
        <p className="max-w-2xl mx-auto text-base text-gray-500 md:text-lg">
          A clear, step-by-step flow designed to resolve your KRA tax matters
          efficiently and effectively — from first consultation to final
          resolution.
        </p>
      </div>

      {/* Row 1 — 3 cards */}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
        {cards.slice(0, 3).map((card, index) => (
          <Card key={index} card={card} index={index + 1} />
        ))}
      </div>

      {/* Row 2 — 2 cards centered */}
      <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:max-w-2xl lg:max-w-3xl">
        {cards.slice(3).map((card, index) => (
          <Card key={index + 3} card={card} index={index + 4} />
        ))}
      </div>
    </section>
  );
}

function Card({ card, index }) {
  const Icon = card.icon;
  return (
    <div className="flex flex-col h-full p-6 transition-shadow duration-300 border border-gray-200 shadow-sm bg-brand-navy-dark rounded-2xl hover:shadow-md">
      {/* Step Number + Icon */}
      <div className="flex items-center gap-3 mb-4">
<span className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full bg-brand-pink-dark shrink-0">
          {index}
        </span>
        <Icon size={32} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-brand-pink-dark">{card.title}</h3>

      {/* Description */}
      <p className="flex-grow text-sm leading-relaxed text-gray-200">
        {card.description}
      </p>
    </div>
  );
}