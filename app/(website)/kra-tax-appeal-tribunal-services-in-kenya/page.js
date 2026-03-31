"use client";

import KraHero from "@/components/KraTaxAppeal/KraHero";
import KraEmpower from "@/components/KraTaxAppeal/KraEmpower";
import TribunalServices from "@/components/KraTaxAppeal/TribunalServices";
import WhatTaxApp from "@/components/KraTaxAppeal/WhatTaxApp"
import NeedTaxTribunal from "@/components/KraTaxAppeal/NeedTaxTribunal"
import WhoWeServe from "@/components/KraTaxAppeal/WhoWeServe"
import WhatWeDo from "@/components/KraTaxAppeal/WhatWeDo"
import WhyChooseUs from "@/components/KraTaxAppeal/WhyChooseUs"
import FairOutcome from "@/components/KraTaxAppeal/FairOutcome"
import ValueAddedServices from "@/components/Services/ValueAddedServices"
import ChooseUs from "@/components/Services/ChooseUs"
import ServiceForm from "@/components/Services/ServiceForm"


export default function KrataxPage() {
  return (
    <>
      <KraHero />
      <KraEmpower/>
      <TribunalServices/>
      <WhatTaxApp/>
      <NeedTaxTribunal/>
      <WhatWeDo/>
      <WhoWeServe/>
      <WhyChooseUs/>
      <FairOutcome/>
      <ValueAddedServices />
      <ChooseUs />
      <ServiceForm />
    </>
  );
}
