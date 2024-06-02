import React from 'react'
import Styles from '../../styles/OnboardingSections.module.css'
import SimpleInput from '../SimpleInput'
import { Button, ConfigProvider } from 'antd'


const BankDetails = () => {
  return (
    <div>
        <div className={Styles.bankDetailsContainer}>
                <h2 className={Styles.bankDetailsHeading}>Bank Details</h2>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Account Holder's Name"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                    <SimpleInput title={"Account No"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                </div> 
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"IFSC"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                    <SimpleInput title={"Bank Name"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                </div> 
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Account Type"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                    <SimpleInput title={"CANCELLED CHEQUE"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='upload' />
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

export default BankDetails