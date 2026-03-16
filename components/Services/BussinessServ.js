const cardsData = [
  {
    
    points: [
      "Retail companies",
      "Professional firms like law practices, consultancies, valuers, architects, engineering, etc",
      "Public institutions like schools, churches, hospitals, and societies",
     
    ],
  },
  {
    
    points: [
      "Hospitals and private practices",
      "Non-profits and NGOs",
      "Real estate companies",
       "Partnerships",
      
    ],
  },
  {
   
    points: [
     
      "Limited liability companies",
      "Private companies",
      "Trusts and Foundations",
    ],
  },
];

function CheckIcon() {
  return (
    <span className="flex h-7 w-7 min-w-[28px] items-center justify-center rounded-full bg-[#E71448] text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 0 1 0 1.414l-7.2 7.2a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 1 1 1.414-1.414l2.493 2.493 6.493-6.493a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default function BussinessServ() {
  return (
    <section className="w-full py-10 bg-gray-100 md:py-10 lg:py-14">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#273277] sm:text-4xl lg:text-5xl">
            Businesses We Serve
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
            Our target clients include but are not limited to the following:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white border border-l-4 border-r-4 border-gray-200 shadow-sm rounded-2xl hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
             

              <div className="mt-6 space-y-3">
                {card.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start gap-3 ">
                    <CheckIcon />
                    <p className="text-sm leading-6 text-gray-700 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}