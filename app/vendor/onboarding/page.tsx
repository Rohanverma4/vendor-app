'use client'
import BankDetails from "@/app/components/onboarding/BankDetails"
import BasicInformation from "@/app/components/onboarding/BasicInformation"
import BrandDetails from "@/app/components/onboarding/BrandDetails"
import BussinessDetails from "@/app/components/onboarding/BussinessDetails"
import Declararion from "@/app/components/onboarding/Declararion"
import GstCheckSection from "@/app/components/onboarding/GstCheckSection"
import OnboardingSidebar from "@/app/components/onboarding/OnboardingSidebar"
import VendorHeader from "@/app/components/onboarding/VendorHeader"
import WarehouseDetails from "@/app/components/onboarding/WarehouseDetails"
import { useState } from "react"
 
const VendorOnboarding = () => {
    const [done, setDone] = useState(0)
    const [active, setActive] = useState(1)

    const onClickHeader = (item:number) => {
        console.log('ITEM',item)
        setActive(item)
    }
    return (
        <div>
            <VendorHeader title="Vendor Header" />
            <div style={{display: 'flex'}}>
                <OnboardingSidebar done={done} active={active} onClickHeader={onClickHeader} />
                {active=== 1 && <GstCheckSection />}
                {active=== 2 &&  <BasicInformation /> }
                {active=== 3 &&  <BussinessDetails /> }
                {active=== 4 &&  <WarehouseDetails /> }
                {active=== 5 &&  <BankDetails /> }
                {active=== 6 &&  <BrandDetails />}
                {active=== 7 &&  <Declararion />}
            </div>
        </div>
    )
} 

export default VendorOnboarding