'use client'
import HomeHero from '@/components/Home/HomeHero'
import HomeEmpower from '@/components/Home/HomeEmpower'
import WhatWeDo from '@/components/Home/WhatWeDo'
import WhoWeAre from '@/components/Home/WhoWeAre'
import TaxCompliance from '@/components/Home/TaxCompliance'


export default function HomePage() {
  

  return (
    <>
     <HomeHero/> 
     <HomeEmpower/> 
     {/* <WhatWeDo/> */}
     <WhoWeAre/>     
     <TaxCompliance/>     
    </>
  )
}
