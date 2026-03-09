'use client'
import { useState } from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { FaArrowRight, FaPhone, FaStar, FaCheckCircle, FaQuoteLeft, FaChevronDown, FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding, faChartLine, faTrademark, faGavel, faFileContract, faMagnifyingGlass,
  faUserGraduate, faBolt, faLock, faMoneyBillWave, faMobileScreenButton, faHandshake,
  faComments, faFolderOpen, faGears, faMedal, faShieldHalved, faRocket,
  faHeadset, faCalendarCheck, faCalculator, faCheckDouble, faStar
} from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/Services/HeroSection'
import EmpoweringSec from '@/components/Services/EmpoweringSec'
import AccSection from '@/components/Services/AccSection'
import AuditServices from '@/components/Services/AuditServices'
import BussinessServ from '@/components/Services/BussinessServ'
import TypeAudit from '@/components/Services/TypeAudit'
import WhyChoose from '@/components/Services/WhyChoose'
import SecureService from '@/components/Services/SecureService'
import ValueAddedServices from '@/components/Services/ValueAddedServices'
import ChooseUs from '@/components/Services/ChooseUs'
import ServiceForm from '@/components/Services/ServiceForm'
export default function HomePage() {
 

  return (
    <>
    <HeroSection/>
    <EmpoweringSec/>
    <AccSection/>
    <AuditServices/>
    <TypeAudit/>
    <BussinessServ/>
    <WhyChoose/>
    <SecureService/>
    <ValueAddedServices/>
    <ChooseUs/>
    <ServiceForm/>
    </>
  )
}