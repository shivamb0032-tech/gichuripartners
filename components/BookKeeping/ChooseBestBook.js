import Image from "next/image";
import Link from "next/link";

export default function BookkeepingSection() {
  return (
    <section className="py-20 text-white bg-gradient-to-br from-brand-navy to-brand-navy-dark">
      <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            Choose the Best Bookkeeping Service in Kenya
          </h2>

          <p className="mb-6 leading-relaxed text-gray-200">
           Are you looking for the <Link className="text-[#ED1B51] font-semibold" href="/ngo-bookkeeping-services-in-kenya/">best bookkeeping services</Link> in Kenya? At Gichuri & Partners, we are your financial partner in success! Our bookkeeping experts provide reliable bookkeeping and accounting services to keep your business ahead in the ever-changing entrepreneurial landscape in Kenya. Experience the precision and expertise that make us the best bookkeeping firm in Kenya. We will help you:
          </p>

         

          {/* List */}
          <ul className="mb-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#ED1B51]"></span>
              Stay compliant
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#ED1B51]"></span>
             Save time and money
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#ED1B51]"></span>
              Make smarter financial decisions
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#ED1B51]"></span>
              Maintain your business’s financial health
            </li>

            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#ED1B51]"></span>
              Run your business stress-free
            </li>
          </ul>

          <p className="text-gray-300">
           Whether you are a startup or a growing business, don’t settle for less. Leverage the expertise of our professional bookkeepers to handle your books as you focus on driving growth and innovation. Partner with the <Link className="text-[#ED1B51] font-semibold" href="/smes-bookkeeping-services-in-kenya/">best professional bookkeeping service</Link> in Kenya today!
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden shadow-2xl rounded-2xl">
            <Image
              src="/assets/bookkeeping-services.jpg"
              width={600}
              height={500}
              alt="Bookkeeping Services"
              className="object-cover w-full h-[500px]"
            />
          </div>

          {/* Decorative glow */}
          <div className="absolute w-40 h-40 rounded-full -bottom-6 -right-6 bg-[#ED1B51] opacity-20 blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}