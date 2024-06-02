"use client"
import React, { useEffect, useState } from 'react'
import Styles from '../../styles/VendorDashboard.module.css'
import { useRouter,usePathname } from 'next/navigation'

const VendorNavbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState('home')

  const handleActive = (route: string) => {
    setActive(route)
    router.push(route)
  }

  useEffect(() => {
    let currentPath = pathname.split('/')[pathname.split('/').length-1]
    setActive(currentPath)
  },[])

  return (
    <div className={Styles.navbarContainer}>
        <div onClick={()=>handleActive('dashboard')} style={{marginLeft: '100px'}} className={active === 'home' ? Styles.navbarActiveText: ''}>Home</div>
        <div className={active === 'orders' ? Styles.navbarActiveText: ''} onClick={()=>handleActive('orders')}>Orders & Returns</div>
        <div className={active === 'products' ? Styles.navbarActiveText: ''} onClick={()=>handleActive('products')}>Product/Service</div>
        <div className={active === 'payment' ? Styles.navbarActiveText: ''} onClick={()=>handleActive('payment')}>Payment</div>
        <div className={active === 'support' ? Styles.navbarActiveText: ''} onClick={()=>handleActive('support')}>Support</div>
    </div>
  )
}

export default VendorNavbar