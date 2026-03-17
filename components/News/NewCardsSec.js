// components/TabCardsSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

const tab1Cards = [
  {
    id: 1,
    title: "Onboarding E-TIMS for Small Businesses in Kenya",
    date: "March 16, 2025",
    description:
      "In the dynamic landscape of Kenya’s business environment, staying ahead",
    image: "/assets/blogs/Business-Services.jpeg",
    buttonText: "Read More",
  },
];

const tab2Cards = [
  {
    id: 1,
    title: "Onboarding E-TIMS for Small Businesses in Kenya",
    date: "March 16, 2025",
    description:
      "In the dynamic landscape of Kenya’s business environment, staying ahead",
    image: "/assets/blogs/Business-Services.jpeg",
    buttonText: "Read More",
  },
];

export default function TabCardsSection() {
  const [activeTab, setActiveTab] = useState(1);

  const cards = activeTab === 1 ? tab1Cards : tab2Cards;

  return (
    <section className="min-h-screen px-4 py-12 bg-gray-100 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-[#f91750] p-1.5">

            {/* TAB 1 */}
            <button
              onClick={() => setActiveTab(1)}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 1
                  ? "bg-[#f91750] text-white "
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Company New
            </button>

            {/* TAB 2 */}
            <button
              onClick={() => setActiveTab(2)}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 2
                  ? "bg-[#f91750] text-white "
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Press Release
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col h-full p-3 overflow-hidden transition-all duration-300 bg-white border border-b-4 shadow-md rounded-xl hover:shadow-xl border-[#123453]"
            >
              {/* Image (HEIGHT REDUCED) */}
              <div className="relative overflow-hidden h-[180px] md:h-[200px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 rounded-md hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-2">
                <h3 className="mb-2 text-lg font-bold text-[#123453] line-clamp-2">
                  {card.title}
                </h3>

                <p className="mb-3 text-sm text-[#f91750]">
                  {card.date}
                </p>

                <p className="flex-grow mb-6 text-sm text-gray-600 line-clamp-3">
                  {card.description}
                </p>

                <button className="mt-auto px-5 py-2.5 bg-[#f91750] hover:bg-[#123453] text-white text-sm font-medium rounded-lg transition-colors self-start">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}