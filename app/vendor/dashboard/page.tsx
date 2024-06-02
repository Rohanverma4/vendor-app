'use client'
import VendorDashboardHeader from "@/app/components/dashboard/VendorDashboardHeader"
import VendorNavbar from "@/app/components/dashboard/VendorNavbar"
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
import Styles from "../../styles/VendorDashboard.module.css"
import VendorCardData from "@/app/components/VendorCardData"
 
const VendorOnboarding = () => {
    const [done, setDone] = useState(0)
    const [active, setActive] = useState(1)

    const onClickHeader = (item:number) => {
        console.log('ITEM',item)
        setActive(item)
    }
    return (
        <div>
            <VendorDashboardHeader title="Vendor Dashboard Header"/>
            <VendorNavbar />
            <div className={Styles.vendorDataContainer}>
                <div className={Styles.vendorDataHeader}>Your Dashboard</div>
                <div className={Styles.vendorDataGridContainer}>
                    <VendorCardData title="Total Completed Orders" value="234k"/>
                    <VendorCardData title="Total Completed Orders" value="234k" />
                    <VendorCardData title="Total Completed Orders" value="234k" />
                    <VendorCardData title="Total Completed Orders" value="234k" />
                    <VendorCardData title="Total Completed Orders" value="234k"/>
                    <VendorCardData title="Total Completed Orders" value="234k"/>
                    <VendorCardData title="Total Completed Orders" value="234k"/>
                    <VendorCardData title="Total Completed Orders" value="234k"/>
                </div>
            </div>
        </div>
    )
} 

export default VendorOnboarding