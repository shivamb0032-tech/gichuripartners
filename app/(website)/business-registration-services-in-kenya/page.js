"use client";

import BussinessHero from "@/components/BussinessRegister/BussinessHero";
import BussinessRegisterService from "@/components/BussinessRegister/BussinessRegisterService";
import BenifitRegisteration from "@/components/BussinessRegister/BenifitRegisteration";
import BussinessEntity from "@/components/BussinessRegister/BussinessEntity";
import SimplifyBussiness from "@/components/BussinessRegister/SimplifyBussiness";
import HowToRegister from "@/components/BussinessRegister/HowToRegister";
import EmpoweringSec from "@/components/Services/EmpoweringSec"
import ValueAddedServices from "@/components/Services/ValueAddedServices"
import ChooseUs from "@/components/Services/ChooseUs"
import ServiceForm from "@/components/Services/ServiceForm"


export default function BussinessRegister() {
  return (
    <>
      <BussinessHero />
      <EmpoweringSec/>
      <BussinessRegisterService/>
      <BenifitRegisteration/>
      <BussinessEntity/>
      <HowToRegister/>
      <SimplifyBussiness/>
      <ValueAddedServices />
      <ChooseUs />
      <ServiceForm />
    </>
  );
}
