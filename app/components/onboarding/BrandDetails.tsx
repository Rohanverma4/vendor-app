import React from 'react'
import Styles from '../../styles/OnboardingSections.module.css'
import SimpleInput from '../SimpleInput'
import { Button, ConfigProvider } from 'antd'

const BrandDetails = () => {
  return (
    <div>
        <div className={Styles.brandDetailsContainer}>
                <h2 className={Styles.brandDetailsHeading}>Brand Details</h2>
                <div className={Styles.brandDetailsDescription}>How many brands do you wish to list with Myntra?</div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Number of Brands to be listed"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                </div> 
        </div>
        <ConfigProvider
                        theme={{
                        components: {
                            Button: {
                                colorPrimary: `#5A7DE5`,
                                lineWidth: 0,
                            },
                        },
                        }}
                    >
                        <Button style={{
                                    width: `230px`,
                                    height: '45px',
                                    borderRadius: "4px",
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    marginLeft: "2rem",
                                    marginTop: "1rem",
                                    float: "right"
                                    }} type="primary" size='large' block>
                        Save details & Next
                        </Button>
            </ConfigProvider>
    </div>
  )
}

export default BrandDetails