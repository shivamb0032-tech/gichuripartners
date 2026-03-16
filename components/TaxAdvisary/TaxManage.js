import React from "react";

const clients = [
  {
    name: "Minimizing your tax burden",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-6 h-6">
        <rect x="2" y="5" width="12" height="9" rx="1.5" fill="#1a5fa8" />
        <path d="M5 5V4a3 3 0 0 1 6 0v1" stroke="#1a5fa8" strokeWidth="1.5" />
        <circle cx="8" cy="10" r="1.2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Resolving tax disputes with KRA",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-6 h-6">
        <rect x="2" y="2" width="12" height="12" rx="1.5" fill="#1a5fa8" />
        <path d="M5 8h6M5 5.5h6M5 10.5h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Planning your taxes and filing tax returns",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-6 h-6">
        <path d="M8 2 L14 13 L2 13 Z" fill="#1a5fa8" />
        <path d="M8 6 L10 10 L6 10 Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Tax strategies and optimisation",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-6 h-6">
        <circle cx="8" cy="8" r="5.5" fill="#1a5fa8" />
        <path d="M5.5 8.5 L7.2 10.2 L11 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  
  
];

function ClientCard({ name, icon }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 bg-white border border-gray-200 cursor-default rounded-xl hover:border-[#F5164E]">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 shrink-0">
        {icon}
      </div>
      <p className="text-lg font-medium leading-snug text-gray-900">{name}</p>
    </div>
  );
}

export default function ClientSuccess() {
  const cols = 4;
  const remainder = clients.length % cols;
  const lastRowStart = remainder === 0 ? clients.length : clients.length - remainder;
 
  const spacersBefore = remainder === 0 ? 0 : Math.floor((cols - remainder) / 2);
  const spacersAfter = remainder === 0 ? 0 : cols - remainder - spacersBefore;

  return (
    <section className="p-4 mx-auto bg-gray-300 sm:p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-6 text-center md:mb-8">
        
        <h2
          className="max-w-6xl text-2xl font-bold tracking-wide text-[#273277] md:text-3xl lg:text-4xl "
        >
          Manage Your Tax Obligations and Get Your Financial Health Back on Track
        </h2>
        <p className="max-w-6xl px-2 py-2 leading-relaxed text-justify text-gray-600 text-md sm:px-0">
          Tax advisory services in Kenya play a pivotal role in helping individuals and businesses stay compliant to their tax obligations, minimize laibailities, save on taxes and promote financial growth. Are you ready to manage your tax obligations and get your financial health back on track? Leverage our tax advisory expertise to navigate the complex Kenyan tax landscape with ease and confidence. At Gichuri and Patners, we can help you on several fronts, including:
        </p>
      </div>

      {/* Mobile & Tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:hidden">
        {clients.map((client) => (
          <ClientCard key={client.name} {...client} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block space-y-2.5 max-w-6xl mx-auto">
        {/* Full rows of 4 */}
        {lastRowStart > 0 && (
          <div className="grid grid-cols-4 gap-2.5">
            {clients.slice(0, lastRowStart).map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </div>
        )}

   
        {remainder > 0 && (
          <div className="flex justify-center gap-2.5">
            {clients.slice(lastRowStart).map((client) => (
              <div key={client.name} style={{ width: "calc(25% - 7.5px)" }}>
                <ClientCard {...client} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center mt-3 mb-6 text-center md:mb-3">
        
        <p className="max-w-6xl px-2 py-2 leading-relaxed text-gray-600 text-md sm:px-0">
          We are the best tax consultants in Nairobi and beyond! Consult us today to get your tax affairs back on track.
        </p>
      </div>
    </section>
  );
}