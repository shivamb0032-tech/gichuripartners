"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function WhatIsKra() {
  return (
    <section className="py-10 md:py-10 bg-gray-50">
      <div className="container px-6 mx-auto lg:px-8 max-w-7xl">

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <Image
                src="/assets/ADR-services.jpeg"
                alt="Gichuri & Partners Auditing Services"
                width={1200}
                height={500}
                className="object-fill w-full md:h-[500px] h-[400px]"
                priority
              />
            </div>
          </div>

          <div className="w-full space-y-5 lg:w-1/2 md:space-y-5">
            <h3 className="text-2xl font-semibold text-[#273277] md:text-3xl">
               What is KRA Alternative Dispute Resolution (ADR)
            </h3>

            <p className="text-base leading-relaxed text-justify text-gray-600 md:text-md">
             ADR is an alternative tax dispute resolution process established under the Tax Procedures Act. Through ADR, taxpayers can enter into a voluntary mediation process with the KRA Commissioner, facilitated by a third party. In simple terms, ADR provides an alternative method to settle tax disputes out of court. Normally, taxpayers resolve tax disputes in judicial courts or the Tax Appeals Tribunal. The process is time-consuming and formal, overwhelming both parties. ADR is preferred because it emphasizes dialogue, dialogue, and healthy compromise instead of adversarial litigation seen in the courts. The ADR process in Kenya involves three parties. These are:
            </p>

            
            <ul className="space-y-3 md:space-y-3">
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]"
                />
                <span>
                  The taxpayer
                </span>
              </li>
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]"
                />
                <span>
                  KRA Commissioner
                </span>
              </li>
              <li className="flex items-start gap-4 text-base text-justify text-gray-800 md:text-lg">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="flex-shrink-0 mt-1 text-2xl text-[#E01244]"
                />
                <span>
                  Facilitator
                </span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
