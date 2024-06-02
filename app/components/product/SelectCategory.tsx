import React from 'react'
import Styles from '../../styles/ProductsSection.module.css'
import ProductCategoryCard from '../ProductCategoryCard'
import Category from '../../../../vendor-app/public/assets/category.png'
import { Button, ConfigProvider } from 'antd'

const SelectCategory = () => {

  let categoryCardData = [
    {
        index: 1,
        title: 'POLO T-SHIRTS',
        image: Category
    },
    {
        index: 2,
        title: 'HALF SLEEVES T-SHIRTS',
        image: Category
    },
    {
        index: 3,
        title: ' V-NECK T-SHIRTS',
        image: Category
    },
    {
        index: 4,
        title: 'HENLEY T-SHIRTS',
        image: Category
    },
    {
        index: 5,
        title: 'HOODED T-SHIRTS',
        image: Category
    },
    {
        index: 6,
        title: 'STRIPED T-SHIRTS',
        image: Category
    },
    {
        index: 7,
        title: 'SOLID T-SHIRTS',
        image: Category
    },
    {
        index: 8,
        title: 'COLORFUL TIE-DYE T-SHIRTS',
        image: Category
    },
    {
        index: 9,
        title: 'U-NECK T-SHIRTS',
        image: Category
    },
    {
        index: 10,
        title: 'THIN LONG-SLEEVES T-SHIRTS',
        image: Category
    },
    {
        index: 11,
        title: 'GRAPHIC T-SHIRTS',
        image: Category
    },
    {
        index: 12,
        title: 'SLEEVELESS T-SHIRTS',
        image: Category
    },
    {
        index: 13,
        title: 'POCKET T-SHIRTS',
        image: Category
    },
    {
        index: 14,
        title: 'POLO T-SHIRTS',
        image: Category
    },
    {
        index: 15,
        title: 'POLO T-SHIRTS',
        image: Category
    },
    {
        index: 16,
        title: 'POLO T-SHIRTS',
        image: Category
    },
    {
        index: 17,
        title: 'POLO T-SHIRTS',
        image: Category
    },
    {
        index: 18,
        title: 'POLO T-SHIRTS',
        image: Category
    },
  ]
  return (
    <div>
        <div className={Styles.productCategoryHeading}>Select Your Printing Category</div>
        <div className={Styles.productCategoryGrid}>
            {
                categoryCardData.map((item) => {
                    return <ProductCategoryCard item={item}/>
                })
            }
        </div>
        <div>
        <div className={Styles.categoryActionDiv}>
            <ConfigProvider
                            theme={{
                            components: {
                                Button: {
                                    colorPrimary: `#fff`,
                                    lineWidth: 0,
                                },
                            },
                            }}
                        >
                            <Button style={{
                                        color:'#000000',
                                        border: '1px solid #DDDDDD',
                                        width: `133px`,
                                        height: '44px',
                                        padding: '1px 0px',
                                        borderRadius: "4px",
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        textAlign:'center',
                                        margin: "16px 14px",
                                        
                                        // marginTop: "1.5rem"
                                        }} type="primary"  block>
                            Cancel
                            </Button>
                    </ConfigProvider>
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
                                        color:'#fff',
                                        border: '1px solid #5479F7',
                                        width: `133px`,
                                        height: '44px',
                                        padding: '1px 0px',
                                        borderRadius: "4px",
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        textAlign:'center',
                                        margin: "16px 14px",
                                        
                                        // marginTop: "1.5rem"
                                        }} type="primary"  block>
                            Save & Next
                            </Button>
                    </ConfigProvider>
        </div>
        </div>
    </div>
  )
}

export default SelectCategory