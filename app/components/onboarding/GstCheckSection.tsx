import React from 'react'
import SimpleInput from '../SimpleInput'
import { Button, ConfigProvider } from 'antd'
import Styles from '../../styles/OnboardingSections.module.css'

const GstCheckSection = () => {

    const gstDetails = [
        {
            key: 'Registered Company Name',
            value: 'M/S HINDUSTAN COPPER LTD'
        },
        {
            key: 'Pincode',
            value: '201304'
        },
        {
            key: 'State',
            value: 'Gautambuddha Nagar'
        },
        {
            key: 'PAN Number',
            value: 'AAACH7409R'
        },
        {
            key: 'GSTIN',
            value: '09AAACH7409R1ZZ'
        },
        {
            key: 'Country',
            value: 'India'
        },
        {
            key: 'City',
            value: 'Gautambuddha Nagar'
        },
        {
            key: 'Registered Address',
            value: 'HINDUSTAN COPPER LIMITED, 2ND FLOOR, PLOT NO 5, SECTOR 106 NOIDA'
        },
    ]
    return (
        <div>
            <div className={Styles.gstNumberContainer}>
                <h2 className={Styles.gstNumberHeading}>GSTIN Check</h2>
                <div className={Styles.gstInputDetails}>
                    <div>Please enter your GST Identification Number.</div>
                    <div>Note - Based on this entry, some of the details in the form will be automatically filled.</div>
                </div>
                <div>
                    <SimpleInput title={"GSTIN Details"} tooltipText={"Please fill your GST number in this field for verification."} width={500} type='text'/>
                </div>
                <div className={Styles.gstApplyNowSection}>
                    GSTIN number Don’t have GSTIN? Apply Now
                </div>
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
                                    width: `220px`,
                                    height: '45px',
                                    borderRadius: "4px",
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    marginLeft: "2rem",
                                    marginTop: "1.5rem"
                                    }} type="primary" size='large' disabled={true} block>
                        Verify GST
                        </Button>
                </ConfigProvider>
            </div>
            <div className={Styles.gstDetailsContainer}>
                <div className={Styles.gstDetailsDescription}>Please confirm your business details shown below</div>
                <div className={Styles.gstDetailsGridContainer}>
                    {
                        gstDetails.map((details) => {
                            return (
                                <div className={Styles.gstDetailsGridItem}>
                                    <div className={Styles.gstDetailsTitle}>{details.key}</div>
                                    <div className={Styles.gstDetailsValue}>{details.value}</div>
                                </div>
                            )
                        })
                    }
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
                                    marginTop: "0.6rem",
                                    float: "right"
                                    }} type="primary" size='large' block>
                        Confirm & Next
                        </Button>
            </ConfigProvider>
        </div>
    )
}

export default GstCheckSection