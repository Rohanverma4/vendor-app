import React from 'react'
import Styles from '../../styles/OnboardingSections.module.css'
import { Button, Checkbox, ConfigProvider, Tooltip } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Declararion = () => {
  return (
    <div>
        <div className={Styles.declarationContainer}>
            <h3 className={Styles.declarationHeading}>Declaration <Tooltip placement="topLeft" title={'tooltipText'}><ExclamationCircleOutlined style={{ color: "#fff", borderRadius: "50%",backgroundColor:"#5479F7", fontSize:"18px", marginLeft:"0.2rem", cursor:"pointer"}}/></Tooltip></h3>
            <div className={Styles.declarationCheckboxDescription}>
                <Checkbox> </Checkbox>
                <div>hereby declare that the details furnished are true and correct. I undertake to inform you of any changes therein: immedately</div>
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
                                    width: `220px`,
                                    height: '45px',
                                    borderRadius: "4px",
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    marginLeft: "2rem",
                                    marginTop: "1rem",
                                    float: "right"
                                    }} type="primary" size='large' block>
                        Submit
                        </Button>
        </ConfigProvider>
    </div>
  )
}

export default Declararion