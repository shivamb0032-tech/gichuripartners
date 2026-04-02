import { BadgeDollarSign, Lock, Clock, Handshake, SlidersHorizontal, FileText } from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Cost Effectiveness",
    color: "green",
    desc: "Negotiations are way cheaper than court hearings and other legal expenses.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    color: "blue",
    desc: "Court and tribunal hearings are public and may reveal sensitive taxpayer information. On the other hand, ADR preserves confidential information because only the three participating parties are privy to the sensitive tax details.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    color: "amber",
    desc: "ADR negotiations and settlements are less time-consuming than lengthy court hearings, which can take months or years.",
  },
  {
    icon: Handshake,
    title: "Preserves Relationships",
    color: "teal",
    desc: "It can be unsettling to be in the bad books of KRA, which is a likely outcome in litigation. Mediation preserves this relationship because the outcome is usually a win-win situation for both parties.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexibility",
    color: "purple",
    desc: "Out-of-court negotiations offer flexible solutions. The process allows for settlement adjustment until both parties are content.",
  },
];

const disputes = [
  "Income tax disputes",
  "Excise duty and other customs tax disputes",
  "Value Added Tax (VAT) disputes",
  "Penalty and interest disputes",
  "Complex KRA objections",
  "Transfer pricing and cross-border tax disputes",
  "Disputes arising from KRA audits and assessments",
];

const colorMap = {
  green:  { bg: "bg-brand-navy-dark",  icon: "bg-brand-pink-dark",  text: "text-white",  border: "border-brand-navy-dark" },
  blue:   { bg: "bg-brand-navy-dark",   icon: "bg-brand-pink-dark",   text: "text-white",   border: "border-brand-navy-dark" },
  amber:  { bg: "bg-brand-navy-dark",  icon: "bg-brand-pink-dark",  text: "text-white",  border: "border-brand-navy-dark" },
  teal:   { bg: "bg-brand-navy-dark",   icon: "bg-brand-pink-dark",   text: "text-white",   border: "border-brand-navy-dark" },
  purple: { bg: "bg-brand-navy-dark", icon: "bg-brand-pink-dark", text: "text-white", border: "border-bg-brand-navy-dark" },
};

function BenefitCard({ icon: Icon, title, color, desc }) {
  const c = colorMap[color];
  return (
    <div className={`rounded-2xl border ${c.border} ${c.bg} p-5 flex flex-col gap-3`}>
      <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${c.text}`} />
      </div>
      <div>
        <p className="mb-1 text-sm font-semibold text-gray-100">{title}</p>
        <p className="text-sm leading-relaxed text-gray-200">{desc}</p>
      </div>
    </div>
  );
}

export default function BenifitsOfADR() {
  return (
    <section className="w-full px-4 py-16 bg-white sm:px-6 lg:px-8" >
      <div className="max-w-6xl mx-auto">

       
        <div className="mb-10 text-center">
          
          <h2
            className="mb-3 text-3xl font-bold leading-snug text-brand-navy-dark sm:text-4xl"
          >
            Benefits of ADR: Why You Should Choose ADR Instead of Litigation
          </h2>
          <p className="max-w-5xl mx-auto text-sm leading-relaxed text-gray-500 sm:text-base">
           Taxpayers are opting for KRA’s alternative dispute resolution due to its numerous benefits. These include:
          </p>
        </div>

     
        <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-3">
          {benefits.slice(0, 3).map((b) => <BenefitCard key={b.title} {...b} />)}
        </div>

     
        <div className="flex flex-col justify-center gap-4 mb-6 sm:flex-row">
          {benefits.slice(3).map((b) => (
            <div key={b.title} className="w-full sm:w-1/3">
              <BenefitCard {...b} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />
       
        <div className="mb-10 text-center">
          
          <p className="max-w-5xl mx-auto text-sm font-semibold leading-relaxed text-gray-700 sm:text-base">
            Types of Tax Disputes Resolvable Through ADR. There are key differences between the tax disputes that can be resolved via the TAT and courts, and those that can be handled through ADR. The KRA ADR process can be applied to the following tax disputes:
          </p>
        </div>

        <div className="p-6 border border-purple-100 rounded-2xl bg-brand-navy-dark sm:p-8">
         

        
          <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-3">
            {disputes.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3 bg-white border border-purple-100 rounded-xl">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-navy-dark flex-shrink-0" />
                <span className="text-sm leading-relaxed text-gray-700">{item}</span>
              </div>
            ))}
          </div>

         
          <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-3">
            {disputes.slice(3, 6).map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3 bg-white border border-purple-100 rounded-xl">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-navy-dark flex-shrink-0" />
                <span className="text-sm leading-relaxed text-gray-700">{item}</span>
              </div>
            ))}
          </div>

         
          <div className="flex justify-center">
            <div className="flex items-start w-full gap-3 px-4 py-3 bg-white border border-purple-100 rounded-xl sm:w-1/3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-navy-dark flex-shrink-0" />
              <span className="text-sm leading-relaxed text-gray-700">{disputes[6]}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}