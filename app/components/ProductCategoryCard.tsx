import React from 'react'
import Styles from '../styles/ProductsSection.module.css'
import Image from 'next/image'
import { Button, ConfigProvider } from 'antd'

interface ChildComponentProps {
    item: {
        index: number,
        title: String,
        image: any
    }
}
const ProductCategoryCard : React.FC<ChildComponentProps> = ({item}) => {
  return (
    <div className={Styles.categoryCardContainer}>
        <Image
                src={item.image}
                alt={''}
                className={Styles.categoryCardImage}
              /> 
        <div className={Styles.categoryCardTitle}>{item.title}</div>
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
                                    width: `167px`,
                                    height: '26px',
                                    padding: '1px 0px',
                                    borderRadius: "4px",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    textAlign:'center',
                                    margin: "2px 14px",
                                    
                                    // marginTop: "1.5rem"
                                    }} type="primary"  block>
                        Add
                        </Button>
                </ConfigProvider>
    </div>
  )
}

export default ProductCategoryCard