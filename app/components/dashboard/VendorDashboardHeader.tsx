import React from 'react'
import Image from 'next/image';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;

import Styles from "../../styles/HomepageHeader.module.css"
import threadTradesLogo from "../../../public/assets/threadTradesLogo.png"
import userProfile from "../../../public/assets/userProfile.png"

interface ChildComponentProps {
  title: string;
}

const VendorDashboardHeader: React.FC<ChildComponentProps> = () => {
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
        <div className={Styles.headerSearchContainer}>
                <Input
                    prefix={
                        <SearchOutlined style={{
                            fontSize: 20,
                            color: '#9599AD',
                            marginRight: 10,
                            marginLeft: 5,
                            cursor: 'pointer'
                        }}/>
                    }
                    placeholder="Search"
                    allowClear
                    style={{
                        marginLeft: 700,
                        width: 480,
                        height: 40
                    }}
                />
        </div>
        <div className={Styles.headerProfileContainer}>
            <Image
                src={userProfile}
                alt="My SVG"
                width={40}
                height={40}
            />
            <div className={Styles.profileTextContainer}>
                <div className={Styles.profileTextHeader}>Anna Adame</div>
                <div className={Styles.profileText}>Founder</div>
            </div>
        </div>
    </div>
  )
}

export default VendorDashboardHeader