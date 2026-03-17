'use client'
import AboutHero from "@/components/About/AboutHero"
import AboutEmpower from "@/components/About/AboutEmpower"
import BestTaxConsul from "@/components/About/BestTaxConsul"
import AboutCta from "@/components/About/AboutCta"
import TopReason from "@/components/About/TopReason"
import BenifitServices from "@/components/About/BenifitServices"
import ChannelPartner from "@/components/About/ChannelPartner"
import WorkClosely from "@/components/About/WorkClosely"
import ServiceForm from '@/components/Services/ServiceForm'

export default function AboutPage() {
 

  return (
    <>
   <AboutHero/>
   <AboutEmpower/>
   <BestTaxConsul/>
   <AboutCta/>
   <TopReason/>
   <BenifitServices/>
   <ChannelPartner/>
   <WorkClosely/>
    <ServiceForm/>
    </>
  )
}