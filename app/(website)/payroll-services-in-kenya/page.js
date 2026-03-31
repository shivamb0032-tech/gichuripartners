"use client";

import PayrollHero from "@/components/Payroll/PayrollHero";
import BestPayrollService from "@/components/Payroll/BestPayrollService";
import PayrollLandscape from "@/components/Payroll/PayrollLandscape";
import PayrollServices from "@/components/Payroll/PayrollServices";
import BussinessWeServe from "@/components/Payroll/BussinessWeServe";
import WhyChooseUs from "@/components/Payroll/WhyChooseUs";
import WeAreReady from "@/components/Payroll/WeAreReady";

import KraEmpower from "@/components/KraTaxAppeal/KraEmpower";
import ValueAddedServices from "@/components/Services/ValueAddedServices"
import ChooseUs from "@/components/Services/ChooseUs"
import ServiceForm from "@/components/Services/ServiceForm"


export default function PayrollPage() {
  return (
    <>
      <PayrollHero />
      <KraEmpower/>
      <BestPayrollService/>
      <PayrollLandscape/>
      <PayrollServices/>
      <BussinessWeServe/>
      <WhyChooseUs/>
      <WeAreReady/>
      
      <ValueAddedServices />
      <ChooseUs />
      <ServiceForm />
    </>
  );
}
