import Link from "next/link";
export default function WhyChoose() {
  const cards = [
    {
      title: "Expertise and Experience ",
      desc: "We have proven expertise in tax laws and dispute resolution. For the last decade, we have helped individual taxpayers and businesses resolve tax disputes with the KRA.",
    },
    {
      title: "Remarkable Negotiation Skills",
      desc: "When you come to us, we put your financial interests first, seeking the most favorable outcome in every negotiation.",
    },
    {
      title: "Ongoing Support at Every Stage of the Process",
      desc: "The ADR process in Kenya involves various stages, including filing a request, appointing a facilitator, and attending the mediation sessions. We provide support at every stage until the tax dispute is resolved.",
    },
  ];

  return (
    <section className="py-12 bg-white md:py-12">
      <div className="max-w-6xl px-5 mx-auto sm:px-6 lg:px-8">

       
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-[#123453] sm:text-3xl md:text-4xl">
           Why Choose Us
          </h2>

         

          <p className="max-w-5xl mx-auto mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
           Professional support simplifies the navigation of a tax dispute, whether via the <Link href="/kra-tax-appeal-tribunal-services-in-kenya/" className="font-semibold text-brand-pink-dark">Tax Appeal Tribunal (TAT)</Link> or the alternative dispute resolution strategy. At Gichuri & Partners, we are a tried and tested partner in solving tax disputes with KRA. Here’s why we are the go-to expert assistance in ADR cases:
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:gap-6 lg:gap-7">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col h-full p-5 transition-shadow duration-200 border border-[#123453]  rounded-br-xl rounded-tl-xl border-l-4 bg-gray-50 sm:p-6 hover:shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#F91750] mb-2.5">
                {card.title}
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-justify text-gray-600 sm:text-base">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}