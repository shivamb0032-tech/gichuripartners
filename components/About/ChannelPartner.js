// components/ChannelPartners.tsx
export default function ChannelPartners() {
  return (
    <section className="relative w-full py-12 overflow-hidden bg-gray-200 md:py-16">
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-48 h-48 rounded-full -left-20 top-10 bg-blue-200/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 rounded-full right-5 bottom-5 bg-teal-200/10 blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="relative px-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main card */}
        <div className="overflow-hidden border shadow-xl bg-white/70 backdrop-blur-xl border-[#273285] rounded-2xl shadow-blue-100/20">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-0 lg:gap-5 items-stretch">
            {/* Left - Centered full-width image */}
            <div className="relative flex flex-col justify-center p-5 bg-[#273285] md:p-6 lg:p-8">
              <div className="flex items-center justify-center h-full">
                <div className="relative w-full max-w-[90%] mx-auto"> {/* max-w-[90%] to give some breathing room */}
                  <div className="overflow-hidden border-4 shadow-2xl rounded-2xl border-white/30 shadow-black/40">
                    <div className="aspect-[3/1] w-full">
                      <img
                        src="/assets/RetailPOS-Logo-1536x482.png"
                        alt="RetailPOS Logo"
                        className="object-contain w-full h-full p-4 bg-white/10"
                      />
                    </div>
                  </div>

                  {/* Subtle glow/ring */}
                  <div className="absolute inset-0 border-2 pointer-events-none rounded-2xl border-white/20 animate-pulse-slow"></div>
                </div>
              </div>
            </div>

            {/* Right - Content area */}
            <div className="flex flex-col justify-center p-5 md:p-6 lg:p-8">
              <div className="mb-5">
                <h2 className="text-2xl font-bold leading-tight text-[#273285] md:text-3xl lg:text-4xl">
                  Channel Partners
                </h2>
                <div className="w-20 h-1 mt-3 rounded-full bg-[#273285]"></div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-800 md:text-2xl">
                RetailPOS
              </h3>

              <div className="space-y-3.5 text-gray-700 text-sm md:text-base leading-relaxed">
                <p className="text-justify">
                  <a className="text-[#E21345] font-semibold" href="https://retailpos.onl/">
                    RetailPOS
                  </a>{' '}
                  is an online point-of-sale system that helps businesses manage sales, track stock, and stay KRA-compliant. Whether you run a small shop or a large retail chain, RetailPOS simplifies transactions, updates inventory in real time, and ensures smooth financial reporting. With a user-friendly interface and cloud access, you can monitor operations anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}