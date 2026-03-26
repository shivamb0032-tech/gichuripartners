import {
  FiAlertCircle,
  FiFileText,
  FiPercent,
  FiClock,
  FiAward,
} from "react-icons/fi";

const issues = [
  {
    icon: FiAlertCircle,
    title: "Incorrect KRA Tax Assessments",
    description:
      "We assist clients in challenging inaccurate or excessive KRA tax assessments arising from audits or system-generated errors. Our team reviews the basis of the assessment, identifies discrepancies, and prepares strong objections to ensure you are only taxed correctly and fairly.",
    number: "01",
  },
  {
    icon: FiFileText,
    title: "VAT Disputes & Audit Queries",
    description:
      "We handle complex VAT disputes and KRA audit queries, including input tax disallowances, invoice mismatches, and compliance issues. Our experts provide strategic responses to KRA, ensuring your VAT position is properly defended during audits and reviews.",
    number: "02",
  },
  {
    icon: FiPercent,
    title: "Penalties & Interest Disputes",
    description:
      "We help businesses dispute and reduce unjustified KRA penalties and interest charges. Through proper legal arguments, ADR processes, and negotiation, we work towards minimizing financial exposure and securing fair outcomes.",
    number: "03",
  },
  {
    icon: FiClock,
    title: "Delayed Objection Decisions",
    description:
      "Where KRA delays issuing decisions on lodged objections, we intervene to enforce timelines and protect your rights. We also guide clients on escalation options, including Independent Review of Objections and further legal remedies.",
    number: "04",
  },
  {
    icon: FiAward,
    title: "Tax Appeal Tribunal Cases",
    description:
      "We represent clients in Tax Appeal Tribunal Kenya cases involving unresolved disputes with KRA. From preparing appeal documents to presenting strong arguments, we ensure your case is professionally handled to maximize the chances of a favorable decision.",
    number: "05",
  },
];

export default function KRAIssue() {
  return (
    <section className="px-4 py-20 overflow-hidden bg-brand-navy-dark md:px-10 lg:px-20">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mx-auto mb-16 text-center max-w-7xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-10 h-[2px] bg-brand-pink-dark" />
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-pink-dark">
            Expert Solutions
          </span>
        </div>

        <h2 className="mb-6 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          Common KRA Issues
          <span className="text-brand-pink-dark"> We Solve</span>
        </h2>

        <p className="text-base leading-relaxed  text-slate-200 md:text-lg">
          We help businesses and individuals resolve KRA tax disputes, audits,
          objections, and enforcement actions with expert, results-driven
          solutions that ensure compliance and protect your rights.
        </p>
      </div>

      {/* Issues List */}
      <div className="mx-auto space-y-4 max-w-7xl">
        {issues.map((issue, index) => (
          <IssueRow key={index} issue={issue} index={index} />
        ))}
      </div>
    </section>
  );
}

function IssueRow({ issue, index }) {
  const Icon = issue.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 
        rounded-2xl border border-white p-6 md:p-8 
        hover:border-brand-pink-dark hover:bg-brand-pink-dark 
        transition-all duration-300 cursor-default
        ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Number + Icon Block */}
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-4xl font-black leading-none transition-colors duration-300 select-none md:text-5xl text-brand-pink-dark group-hover:text-brand-navy-dark">
          {issue.number}
        </span>
        <div className="flex items-center justify-center transition-colors duration-300 w-14 h-14 rounded-xl bg-slate-800 group-hover:bg-white shrink-0">
          <Icon
            size={26}
            className="transition-colors duration-300 text-brand-pink-dark group-hover:text-brand-pink-dark"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-[1px] h-16 bg-brand-pink-dark group-hover:bg-brand-navy-dark transition-colors duration-300 shrink-0" />

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="mb-2 text-lg font-bold transition-colors duration-300 text-brand-pink-dark md:text-xl group-hover:text-brand-navy-dark">
          {issue.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-100 md:text-base">
          {issue.description}
        </p>
      </div>

      {/* Arrow indicator */}
      {/* <div className="items-center justify-center hidden w-10 h-10 transition-all duration-300 border border-white rounded-full md:flex group-hover:border-brand-navy-dark group-hover:bg-brand-navy-dark shrink-0">
        <svg
          className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div> */}
    </div>
  );
}
