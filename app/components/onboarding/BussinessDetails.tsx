import React from 'react'
import Styles from '../../styles/OnboardingSections.module.css'
import SimpleInput from '../SimpleInput'
import { Button, ConfigProvider } from 'antd'

const BussinessDetails = () => {
  return (
    <div>
        <div className={Styles.bussinessDetailsContainer}>
                <h2 className={Styles.bussinessDetailsHeading}>Business Details</h2>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Business Model"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                    <SimpleInput title={"OMS Type"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
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

export default BussinessDetails