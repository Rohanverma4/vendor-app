'use client'
import React, { useState } from 'react'
import Styles from '../../styles/OnboardingSections.module.css'
import SimpleInput from '../SimpleInput'
import { Button, ConfigProvider } from 'antd'
import 'react-phone-input-2/lib/style.css'

const BasicInformation = () => {
    const [tanDetails, setTanDetails] = useState(false)
  return (
    <div>
        <div className={Styles.basicInformationContainer}>
            <h3 className={Styles.basicInformationHeading}>Basic Information</h3>
            <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"Organization Name"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                <SimpleInput title={"Owner’s Email ID"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
            </div>
            <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"Organization Phone Number"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='phone' />
                <SimpleInput title={"Organization Email ID"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
            </div>
            <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"Business Owner’s Name"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                <SimpleInput title={"Owner’s Contact Number"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='phone' />
            </div>
        </div>
        <div style={{marginTop: '1rem', height: `${tanDetails ? '500px' : "400px"}`}} className={Styles.basicInformationContainer}>
            <h3 className={Styles.basicInformationHeading}>Company Information</h3>
            <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"Are you an existing threadtrades Partner?"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                <SimpleInput title={"Entity Type"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
            </div>
            <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"threadtrades Generated Invoice"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                <SimpleInput title={"SIGNATURE"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='upload' />
            </div>
            <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"TAN Details (Optional)"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
            </div>
            {tanDetails && <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                <SimpleInput title={"TAN Number"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                <SimpleInput title={"TAN Upload"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='upload' />
            </div>}
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

export default BasicInformation