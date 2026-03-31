import Link from "next/link";
export default function SimplifyBussiness() {
  return (
    <section className="w-full py-12 bg-[#123453] md:py-13 lg:py-13">
      <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold leading-tight text-[#F91750] md:text-3xl lg:text-4xl">
          Simplify Business Registration in Kenya 
        </h2>

        {/* Description */}
        <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-justify text-gray-200 md:text-lg">
          While it’s possible to register your business in Kenya yourself, it can be a daunting affair, especially for larger business entities like private limited companies, limited liability partnerships and companies, public limited companies, and foreign companies. The paperwork alone can be time-consuming, taking up precious time better used to lay a solid foundation for your business operations.
        </p>
        <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-justify text-gray-200 md:text-lg">
          If you’re looking to simplify the business registration process in Kenya, <Link href="/" className="font-semibold text-brand-pink-dark">Gichuri & Partners</Link> is your trusted partner in business registration services. We are a leading business consultancy firm in Kenya, offering expert guidance and support to navigate corporate and commercial legislation. We provide a wide range of business services to get your business off the ground. Our goal is to empower you so that you can embark on your entrepreneurial journey with confidence and peace of mind.
        </p>
        <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-justify text-gray-200 md:text-lg">
          With us, you have a team of professionals with in-depth knowledge of Kenya’s business regulatory landscape. We are your best bet for expert guidance and support, from comprehensive name searches and drafting compliance documents meticulously, to navigating e-Citizen.
        </p>
        <p className="max-w-6xl mx-auto mt-4 text-base leading-relaxed text-justify text-gray-200 md:text-lg">
          Our streamlined business registration services will save you time, effort, and money. Wise business people leverage our expertise and extensive network with regulatory bodies to expedite company registration and compliance. With the business registration headache out of the way, you can focus on what matters, such as building and growing your business. The best part? We don’t stop there. <Link href="/" className="font-semibold text-brand-pink-dark">Gichuri & Partners</Link> provides ongoing compliance support to ensure your business stays on the right side of the law. These include tax compliance and regulatory updates.
        </p>

      </div>
    </section>
  );
}