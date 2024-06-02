import React from 'react'
import Styles from '../styles/VendorDashboard.module.css'

interface ChildComponentProps {
    title: string;
    value: string;
}
const VendorCardData: React.FC<ChildComponentProps> = ({title, value}) =>  {
  return (
    <div className={Styles.vendorCardContainer}>
        <div className={Styles.vendorCardValue}>{value}</div>
        <div className={Styles.vendorCardTitle}>{title}</div>
    </div>
  )
}

export default VendorCardData