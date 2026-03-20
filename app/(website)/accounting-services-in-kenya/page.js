'use client'

import AccountHero from '@/components/Accounting/AccountHero'
import EmpoweringSec from '@/components/Services/EmpoweringSec'
import AccountService from '@/components/Accounting/AccountService'
import BestAccounting from '@/components/Accounting/BestAccounting'
import BussnessServe from '@/components/Accounting/BussnessServe'
import ServiceForm from '@/components/Services/ServiceForm'
import ChooseUs from '@/components/Services/ChooseUs'
import ClientSuccess from '@/components/Accounting/ClientSuccess'
import HireAccount from '@/components/Accounting/HireAccount'
import ValueAddedServices from '@/components/Services/ValueAddedServices'
export default function Accounting() {
 

  return (
    <>
    <AccountHero/>
    <EmpoweringSec/>
    <AccountService/>
    <BestAccounting/>
    <BussnessServe/>
    <ClientSuccess/>
    <HireAccount/>
    <ValueAddedServices/>
    <ChooseUs/>
    <ServiceForm/>
    </>
  )
}