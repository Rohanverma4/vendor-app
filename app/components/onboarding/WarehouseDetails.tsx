import React from 'react'
import Styles from '../../styles/OnboardingSections.module.css'
import SimpleInput from '../SimpleInput'
import { Button, ConfigProvider } from 'antd'
const WarehouseDetails = () => {
  return (
    <div>
        <div className={Styles.warehouseDetailsContainer}>
                <h2 className={Styles.warehouseDetailsHeading}>Warehouse Details</h2>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Warehouse Pincode"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                    <SimpleInput title={"GSTIN Details"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                </div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"City"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                    <SimpleInput title={"State"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                </div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Country"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                    <SimpleInput title={"Floor Details"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                </div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Full Address"} tooltipText={"Please fill your GST number in this field for verification."} width={1035} type='text' />
                </div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Partner Warehouse Code"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                    <SimpleInput title={"W/H Operating Start Time"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                </div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"W/H Operating End Time"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='select' />
                    <SimpleInput title={"Warehouse Email Address"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
                </div>
                <div style={{display:'flex', height: '95px', justifyContent: 'space-between'}}>
                    <SimpleInput title={"Warehouse Contact Number"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='phone' />
                    <SimpleInput title={"Per Day Order Processing Capacity"} tooltipText={"Please fill your GST number in this field for verification."} width={450} type='text' />
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

export default WarehouseDetails