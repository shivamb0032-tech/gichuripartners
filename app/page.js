'use client'
import HomeHero from '@/components/Home/HomeHero'
import HomeEmpower from '@/components/Home/HomeEmpower'
import WhatWeDo from '@/components/Home/WhatWeDo'
import WhoWeAre from '@/components/Home/WhoWeAre'
import TaxCompliance from '@/components/Home/TaxCompliance'
import ChooseUs from '@/components/Services/ChooseUs'
import ServiceForm from '@/components/Services/ServiceForm'
import WeBest from '@/components/Home/WeBest'
import HomeTestimonial from '@/components/Home/HomeTestimonial'
import TrustedSec from '@/components/Home/TrustedSec'
import Blogs from '@/components/Home/Blogs'
import CompanyTalk from '@/components/Home/CompanyTalk'


export default function HomePage() {
  

  return (
    <>
     <HomeHero/> 
     <CompanyTalk/>
     <HomeEmpower/> 
     <WhatWeDo/>
     <WhoWeAre/>     
     <TaxCompliance/> 
      <ChooseUs/>    
      <WeBest/>   
      <HomeTestimonial/> 
      <TrustedSec/> 
      <Blogs/> 
      <ServiceForm/>
    </>
  )
}
