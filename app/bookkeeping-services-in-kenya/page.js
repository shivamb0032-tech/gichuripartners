"use client";

import BookHero from "@/components/BookKeeping/BookHero";
import BestbookServ from "@/components/BookKeeping/BestbookServ";
import BookImportant from "@/components/BookKeeping/BookImportant";
import BenifitOutsource from "@/components/BookKeeping/BenifitOutsource";
import RoleBook from "@/components/BookKeeping/RoleBook";
import ChooseBestBook from "@/components/BookKeeping/ChooseBestBook";
import EmpoweringSec from "@/components/Services/EmpoweringSec";
import ValueAddedServices from '@/components/Services/ValueAddedServices'
import ServiceForm from '@/components/Services/ServiceForm'
import ChooseUs from '@/components/Services/ChooseUs'

export default function Accounting() {
  return (
    <>
      <BookHero />
      <EmpoweringSec />
      <BestbookServ/>
      <BookImportant/>
      <BenifitOutsource/>
      <RoleBook/>
      <ChooseBestBook/>
      <ValueAddedServices />
      <ChooseUs />
      <ServiceForm />
    </>
  );
}
