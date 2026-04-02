"use client";

import DisputeHero from "@/components/AlternativeDispute/DisputeHero";
import ADRServices from "@/components/AlternativeDispute/ADRServices";
import WhatIsKra from "@/components/AlternativeDispute/WhatIsKra";
import TaxCase from "@/components/AlternativeDispute/TaxCase";
import WhatWeDo from "@/components/AlternativeDispute/WhatWeDo";
import WhyChoose from "@/components/AlternativeDispute/WhyChoose";
import BenifitsOfADR from "@/components/AlternativeDispute/BenifitsOfADR";
import GetExpert from "@/components/AlternativeDispute/GetExpert";

import KraEmpower from "@/components/KraTaxAppeal/KraEmpower";
import ValueAddedServices from "@/components/Services/ValueAddedServices"
import ChooseUs from "@/components/Services/ChooseUs"
import ServiceForm from "@/components/Services/ServiceForm"


export default function KrataxPage() {
  return (
    <>
      <DisputeHero />
      <KraEmpower/>
      <ADRServices/>
      <WhatIsKra/>
      <TaxCase/>
      <BenifitsOfADR/>
      <WhatWeDo/>
      <WhyChoose/>
      <GetExpert/>
      <ValueAddedServices />
      <ChooseUs />
      <ServiceForm />
    </>
  );
}
