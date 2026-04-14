'use client'

import NewHero from '@/components/News/NewHero'
import NewCardsSec from '@/components/News/NewCardsSec'
import NewForm from '@/components/News/NewForm'
import NewServCard from '@/components/News/NewServCard'
import ServiceForm from "@/components/Services/ServiceForm";

export default function NewsMedia() {
 

  return (
  <>
   <NewHero/>
   <NewCardsSec/>
   <NewForm/>
   <NewServCard/>
  <ServiceForm />
  </>
  )
}