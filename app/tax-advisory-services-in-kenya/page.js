"use client";
import TaxHero from "@/components/TaxAdvisary/TaxHero";
import TaxImportant from "@/components/TaxAdvisary/TaxImportant";
import TaxManage from "@/components/TaxAdvisary/TaxManage";
import TaxOffers from "@/components/TaxAdvisary/TaxOffers";
import TaxAdvisary from "@/components/TaxAdvisary/TaxAdvisary";
import EmpoweringSec from "@/components/Services/EmpoweringSec";
import ValueAddedServices from "@/components/Services/ValueAddedServices";
import ServiceForm from "@/components/Services/ServiceForm";
import ChooseUs from "@/components/Services/ChooseUs";

export default function Accounting() {
  return (
    <>
      <TaxHero />
      <EmpoweringSec />
      <TaxAdvisary />
      <TaxImportant />
      <TaxOffers />
      <TaxManage />
      <ValueAddedServices />
      <ChooseUs />
      <ServiceForm />
    </>
  );
}
