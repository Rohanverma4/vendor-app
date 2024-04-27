import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Styles from "../styles/HomepageHeader.module.css"
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, type FormItemProps } from 'antd';
import threadTradesLogo from "../../public/assets/threadTradesLogo.png"

interface ChildComponentProps {
  title: string;
}

const HomepageHeader: React.FC<ChildComponentProps> = () => {
  return (
    <div className={Styles.headerContainer}>
        <div className={Styles.logoImageDiv}>
          <Image
            src={threadTradesLogo}
            alt="My SVG"
            width={230}
            height={56}
          />
        </div>
        <div className={Styles.otherPagesLink}>
          <Link href="http://localhost:3001">Home</Link>
          <Link href="http://localhost:3001">About us</Link>
          <Link href="http://localhost:3001">Service</Link>
          <Link href="http://localhost:3001">Contact</Link>
        </div>
        <div className={Styles.sellingActionButtonDiv}>
        <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `#DE0505`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button style={{
                          width: `200px`,
                          height: '60px',
                          borderRadius: "30px",
                          fontWeight: "600"
                          // backgroundColor: `${bgColor}`,
                          // color: `${color}`
                        }} type="primary" size='large' block>
              Start Selling <ArrowRightOutlined style={{ fontSize: '20px', fontWeight: "bold"}} />
            </Button>
          </ConfigProvider>
        </div>
    </div>
  )
}

export default HomepageHeader