import { CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

const eligibleCases = [
  "An individual taxpayer with pending disputes on tax assessment",
  "Businesses disagreeing with KRA on VAT, income tax, or excise duty",
  "Transfer pricing disputes and other tax disagreements between KRA and corporations and multinationals",
  "Nonprofits and NGO are facing tax compliance issues with KRA",
  "Other unique tax disputes that meet the eligibility criteria for ADR in Kenya",
];

const ineligibleCases = [
  "Criminal tax offenses",
  "Tax disputes already determined in court or TAT",
  "Tax and compliance issues beyond KRA’s jurisdiction",
];

export default function TaxCase() {
  return (
    <section className="w-full px-4 py-12 font-sans bg-brand-navy-dark sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-brand-navy-dark text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy-dark inline-block" />
            KRA Kenya · ADR Process
          </span>
          <h2
            className="mb-3 text-3xl font-bold leading-snug text-white sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
          Is Every Tax Case Eligible for 
            <br className="hidden sm:block" /> KRA ADR in Kenya?
          </h2>
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">

          {/* Eligible Card */}
          <div className="p-6 border border-green-100 rounded-2xl bg-[#ffffffe0]">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-brand-navy-dark">
              <div className="flex items-center justify-center flex-shrink-0 bg-brand-pink-dark w-9 h-9 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">  Can every tax dispute be solved through the ADR method?  No, unfortunately, only some cases are eligible for ADR. They include:</p>
              </div>
            </div>
            <ul className="space-y-3">
              {eligibleCases.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-pink-dark flex-shrink-0" />
                  <span className="leading-relaxed text-gray-800 text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ineligible Card */}
          <div className="p-6 border border-red-100 rounded-2xl bg-[#ffffffe0]">
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-brand-navy-dark">
              <div className="flex items-center justify-center flex-shrink-0 bg-brand-pink-dark w-9 h-9 rounded-xl">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">The following tax disputes are not eligible for the KRA ADR process in Kenya:</p>
              </div>
            </div>
            <ul className="space-y-3">
              {ineligibleCases.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-pink-dark flex-shrink-0" />
                  <span className="leading-relaxed text-gray-800 text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Note */}
        <div className="flex items-start gap-4 px-5 py-4 border border-blue-100 bg-blue-50 rounded-2xl">
          <div className="flex items-center justify-center flex-shrink-0 bg-blue-100 w-9 h-9 rounded-xl ">
            <ShieldCheck className="w-5 h-5 text-brand-navy-dark" />
          </div>
          <div>
            <p className="justify-center pt-1 text-sm font-semibold text-center text-gray-800 ">If you’re uncertain whether your tax dispute meets the ADR eligibility criteria, our tax experts can examine the case and advise on the best way forward.</p>
           
          </div>
        </div>

      </div>
    </section>
  );
}