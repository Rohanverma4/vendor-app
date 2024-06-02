import React from 'react'
import Image from 'next/image';
import Styles from "../../styles/HomepageHeader.module.css"
import threadTradesLogo from "../../../public/assets/threadTradesLogo.png"

interface ChildComponentProps {
  title: string;
}

const VendorHeader: React.FC<ChildComponentProps> = () => {
  return (
    <div className={Styles.vendorHeaderContainer}>
        <div className={Styles.vendorLogoImageDiv}>
          <Image
            src={threadTradesLogo}
            alt="My SVG"
            width={230}
            height={56}
          />
        </div>
    </div>
  )
}

export default VendorHeader