import { FiClipboard, FiSearch, FiZap, FiShield, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "We assess your KRA tax issue, including audits, disputes, and KRA tax assessments, and review all relevant documents.",
    icon: FiClipboard,
  },
  {
    number: 2,
    title: "Case Analysis",
    description: "We analyze your case in detail, identifying risks and opportunities in KRA audits, objections, and dispute matters.",
    icon: FiSearch,
  },
  {
    number: 3,
    title: "Strategy Development",
    description: "We develop a tailored approach, including Alternative Dispute Resolution (ADR), Independent Review of Objections, or Tax Appeal Tribunal action.",
    icon: FiZap,
  },
  {
    number: 4,
    title: "Representation",
    description: "We represent you before KRA in tax audits, objections, ADR processes, and Tax Appeal Tribunal Kenya proceedings.",
    icon: FiShield,
  },
  {
    number: 5,
    title: "Resolution",
    description: "We work to resolve disputes by reducing KRA tax assessments, penalties, and ensuring full KRA compliance.",
    icon: FiCheckCircle,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f0f8ff] py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">
          Our Process
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          A clear, step-by-step flow designed to resolve your KRA tax matters efficiently and effectively — from first consultation to final resolution.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-orange-400 hidden md:block -translate-x-1/2 rounded-full z-0"></div>

        <div className="space-y-16 relative z-10">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0; // 1,3,5 left | 2,4 right

            return (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left Side */}
                {isLeft ? (
                  <>
                    {/* Content - Left */}
                    <div className="md:w-5/12 w-full text-center md:text-right order-2 md:order-1">
                      <div className="bg-white rounded-3xl shadow-sm p-8">
                        <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon + Number - Right (attached to center line) */}
                    <div className="md:w-2/12 w-20 flex justify-center order-1 md:order-2">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#fbbf24] flex items-center justify-center text-white text-4xl font-bold shadow-md">
                          {step.number}
                        </div>
                        <step.icon className="mt-4 w-12 h-12 text-[#1e3a8a]" />
                      </div>
                    </div>
                  </>
                ) : (
                  /* Right Side Layout */
                  <>
                    {/* Icon + Number - Left (attached to center line) */}
                    <div className="md:w-2/12 w-20 flex justify-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#fbbf24] flex items-center justify-center text-white text-4xl font-bold shadow-md">
                          {step.number}
                        </div>
                        <step.icon className="mt-4 w-12 h-12 text-[#1e3a8a]" />
                      </div>
                    </div>

                    {/* Content - Right */}
                    <div className="md:w-5/12 w-full text-center md:text-left">
                      <div className="bg-white rounded-3xl shadow-sm p-8">
                        <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}