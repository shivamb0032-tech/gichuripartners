
export default function WhyChoose() {
  const cards = [
    {
      title: "Proven Competency ",
      desc: "We have been helping businesses maintain financial transparency and meet set standards for over a decade. Our mission is to offer the best audit and accounting services that meet client needs. Our team members are certified auditors who uphold professionalism, integrity, and adherence to set standards.",
    },
    {
      title: "Client-First Approach",
      desc: "Our auditing and accounting firm is client-centric, customizing our services to match your business needs. We recognize that different businesses require different solutions, and that’s why we tailor our audit services according to your unique needs.",
    },
    {
      title: "Trust and Transparency",
      desc: "The backbone of a good auditing firm is trust and transparency. At Gichuri & Partners, we provide clear audit reports and adhere to the highest ethical standards. This cultivates investor confidence, strengthens stakeholder relationships, and ensures compliance.",
    },
  ];

  return (
    <section className="py-12 bg-white md:py-12">
      <div className="max-w-6xl px-5 mx-auto sm:px-6 lg:px-8">

       
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-[#123453] sm:text-3xl md:text-4xl">
            Why Choose Us? 
          </h2>

         

          <p className="max-w-2xl mx-auto mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
            When we say we are the best auditing services provider in Kenya, we are not over-promising. Here’s why we are your best choice for auditing services:
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