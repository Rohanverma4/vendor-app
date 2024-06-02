"use client"
import React, { useState } from 'react'
import Styles from '../../../../styles/ProductsSection.module.css'
import { Button, ConfigProvider } from 'antd'
import AddImages from '@/app/components/product/AddImages'
import AddProductInfo from '@/app/components/product/AddProductInfo'
const EditProduct = ({ params }) => {

    const [activeImage, setActiveImage] = useState(true)

    const onClickSwitchButton = () => {
        setActiveImage(!activeImage)
    }
   return (
       <div>
          <div className={Styles.editImageHeadingSection}>
            <div className={Styles.editImageDetailsSection}>
                <h3>Winkwear Printed Men Round Neck Black T-Shirt</h3>
                <div>Product Id : <span>{params.slug}</span></div>
            </div>
            <div>
                <ConfigProvider
                    theme={{
                    components: {
                        Button: {
                        colorPrimary: `#5479F7`,
                        lineWidth: 0,
                        },
                    },
                    }}
                >
                    <Button style={{
                                width: `175px`,
                                height: '45px',
                                borderRadius: "4px",
                                fontWeight: "500",
                                fontSize: "18px",
                                // marginTop: "15px",
                                // backgroundColor: `${bgColor}`,
                                color: `#FFFFFF`
                                }} type="primary" size='large' block>
                     Submit
                    </Button>
                </ConfigProvider>
            </div>
          </div>
          <div className={Styles.editSwitchButton}>
            <ConfigProvider
                    theme={{
                    components: {
                        Button: {
                        colorPrimary: activeImage ? `#5479F7`:`#FFFFFF`,
                        lineWidth: 0,
                        },
                    },
                    }}
                >
                    <Button style={{
                                width: `175px`,
                                height: '45px',
                                borderRadius: "4px",
                                fontWeight: "500",
                                fontSize: "18px",
                                // marginTop: "15px",
                                // backgroundColor: `${bgColor}`,
                                color: activeImage ? `#FFFFFF`:`#4E4E4E`
                                }}  onClick={onClickSwitchButton} type="primary" size='large' block>
                     Product Image
                    </Button>
                </ConfigProvider>
                <ConfigProvider
                    theme={{
                    components: {
                        Button: {
                        colorPrimary:!activeImage ? `#5479F7`:`#FFFFFF`,
                        lineWidth: 0,
                        },
                    },
                    }}
                >
                    <Button style={{
                                width: `175px`,
                                height: '45px',
                                borderRadius: "4px",
                                fontWeight: "500",
                                fontSize: "18px",
                                // marginTop: "15px",
                                // backgroundColor: `${bgColor}`,
                                color: !activeImage ? `#FFFFFF`:`#4E4E4E`
                                }} onClick={onClickSwitchButton} type="primary" size='large' block>
                     Product Info
                    </Button>
                </ConfigProvider>
          </div>
          {activeImage ?
              <AddImages type={"edit"} />:
              <AddProductInfo type={"edit"} />}
       </div>
   )
}

export default EditProduct