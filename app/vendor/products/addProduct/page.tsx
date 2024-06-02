'use client'
import VendorDashboardHeader from '@/app/components/dashboard/VendorDashboardHeader'
import VendorNavbar from '@/app/components/dashboard/VendorNavbar'
import AddProductsNavbar from '@/app/components/product/AddProductsNavbar'
import DashboardInsideNavbar from '@/app/components/product/DashboardInsideNavbar'
import Styles from '../../../styles/ProductsSection.module.css'
import React, { useState } from 'react'
import SelectCategory from '@/app/components/product/SelectCategory'
import AddImages from '@/app/components/product/AddImages'
import AddProductInfo from '@/app/components/product/AddProductInfo'

const VendorAddProducts = () => {
  const [activeNav, setActiveNav] = useState('category')
  const [doneNav, setDoneNav] = useState('')
  const array = ["Products & Services","Add New Product"]
  return (
    <div>
        <VendorDashboardHeader title="Vendor Dashboard Header"/>
        <VendorNavbar />
        <DashboardInsideNavbar navArray={array}/>
        <div className={Styles.productSectionContainer}>
            <AddProductsNavbar activeNav={activeNav} doneNav={doneNav} setActiveNav={setActiveNav} setDoneNav={setDoneNav} />
            {activeNav === 'category' && <SelectCategory />}
            {activeNav === 'images' && <AddImages type={"create"}/> }
            {activeNav === 'info' && <AddProductInfo type={"create"} />}
        </div>
    </div>
  )
}

export default VendorAddProducts