"use client";
import Image from "next/image";
import Link from "next/link";

export default function BestbookServ() {
  return (
    <section className="py-10 md:py-10 bg-gray-50">
      <div className="container px-6 mx-auto lg:px-8 max-w-7xl">
        {/* Main Heading */}
        <Link href="/">
          {" "}
          <h2 className="mb-12 text-3xl font-bold text-center text-[#273277] md:text-4xl lg:text-5xl md:mb-16">
            Best Bookkeeping Services in Kenya
          </h2>
        </Link>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="/assets/hero-bg/serv-img-11.jpg"
                alt="Gichuri & Partners Auditing Services"
                width={1200}
                height={800}
                className="object-cover w-full h-[600px]"
                priority
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full space-y-5 lg:w-1/2 md:space-y-5">
            <h3 className="text-2xl font-semibold text-[#E01244] md:text-3xl">
              Bookkeeping Services in Kenya
            </h3>

            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Bookkeeping is the act of recording all your business’s financial
              transactions, including the money coming in and leaving your
              business. This process is the backbone of your business because it
              ensures good financial health and conscious decision-making. You
              should make bookkeeping your best friend, whether you operate a
              boutique in Nairobi CBD, a tech startup in Kisumu, a farm in
              Nyeri, or a private company in Mombasa.
            </p>

            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Financial management and tax compliance can be daunting in the
              bustling entrepreneurial landscape in Kenya. As a business owner,
              you find yourself juggling between managing day-to-day operations
              and driving growth, leaving minimal time for bookkeeping and tax
              preparation.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              You end up neglecting the latter, which leads to trouble for your
              business, including fines, losses, penalties, and legal issues
              with tax authorities like KRA. You don’t have to shoulder the
              burden of business management alone.{" "}
              <Link className="text-[#F71950] font-semibold" href="/bookkeeping-outsourcing-services/">
                Outsourcing bookkeeping services
              </Link>{" "}
              is the relief you need, giving you enough time to manage your
              operations and focus on growth. Reputable{" "}
              <Link className="text-[#F71950] font-semibold" href="/smes-bookkeeping-services-in-kenya/">
                bookkeeping services in Kenya
              </Link>{" "}
              will handle your books, ensuring financial accuracy and
              compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
