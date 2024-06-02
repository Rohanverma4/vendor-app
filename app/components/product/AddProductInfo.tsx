import React from 'react'
import Styles from '../../styles/ProductsSection.module.css'
import SimpleInput from '../SimpleInput'
import RadioGroup from '../RadioGroup'
import { ExclamationCircleOutlined} from '@ant-design/icons';
import CheckboxGroup from '../CheckboxGroup'
import { Button, ConfigProvider, Input, Tooltip } from 'antd'

const { Search } = Input;

const AddProductInfo = ({type}) => {
  return (
    <div className={Styles.productInfoContainer}>
        <SimpleInput title={"Product/Service Name"} tooltipText={"Please fill your GST number in this field for verification."} width={850} type='text' />
        <div className={Styles.priceColumn}>
          <SimpleInput title={"Price"} tooltipText={"Please fill your GST number in this field for verification."} width={744} type='number' />
          <div className={Styles.perPieceText}> Per piece</div>
        </div>
        <SimpleInput title={"Product/Service Description"} tooltipText={"Please fill your GST number in this field for verification."} width={850} type='description' />
        <RadioGroup gap={'55px'} title="Material" description='des' rowLength={6} dataArray={['Cotton','Polyester','Hosiery','Wool','Linen','Lycra','Demin','Poplin']} />
        <RadioGroup gap={'52px'} title="Fabric" description='des' rowLength={6} dataArray={['Cotton','Polyester','Poly viscose','Poly Cotton','Lycra Cotton','Lycra','Nylon','Knit febric']} />
        <RadioGroup gap={'90px'} title="Printing Technique" description='des' rowLength={6} dataArray={['Screen Printing','Direct to grament printing','Heat Press printing','Discharge Printng','Flock Printing','Water Based Printing']} />
        <RadioGroup gap={'40px'} title="Pattern" description='des' rowLength={6} dataArray={['Geometric Patterns','Floral Patterns','Abstract Patterns','Graphic Patterns','Ethnic and Tribal Patterns','Camouflage Patterns','Plaid and Checkered Patterns','Tie-Dye Patterns','Text and Typography Patterns','Mosaic and Tile Patterns','Brand Logo','Other']} />
        <RadioGroup gap={'33px'} title="Collar Type" description='des' rowLength={6} dataArray={['Round Neck','V- Neck','Polo Neck','Hooded','Henley','Turtle Neck','Cowl Neck','Scoop Neck','Boat Neck','Other']} />
        <CheckboxGroup gap={'59px'} title="Size Type ( for adults)" description='des' rowLength={6} dataArray={['Small','Medium','Large','XL','XXL','Other']} />
        <RadioGroup gap={'62px'} title="Are you printing kids cloths" description='des' rowLength={6} dataArray={['Yes','No']} />
        <div className={Styles.priceColumn}>
          <SimpleInput title={"Add Price for kids cloth printing"} tooltipText={"Please fill your GST number in this field for verification."} width={744} type='number' />
          <div className={Styles.perPieceText}> Per piece</div>
        </div>
        <CheckboxGroup gap={'31.5px'} title="Select Size Type ( for Kids)" description='des' rowLength={6} dataArray={['1 year','2 year','3 year','4 year','5 year','6 year','7 year','8 year','9 year','10 year','11 year','12 year','13 year','14 year']} />
        <CheckboxGroup gap={'50px'} title="Select Colors" description='des' rowLength={6} dataArray={['White','Black','Gray','Navy Blue','Beige','Brown','Olive Green','Denim Blue','Maroon','Green','Red','Other']} />
        <div className={Styles.priceColumn}>
          <SimpleInput title={"Minimum Order Quantity"} tooltipText={"Please fill your GST number in this field for verification."} width={744} type='number' />
          <div className={Styles.perPieceText}> Per piece</div>
        </div>
        <SimpleInput title={"Production Capacity"} tooltipText={"Please fill your GST number in this field for verification."} width={850} type='text' />
        <SimpleInput title={"Product/Service Code"} tooltipText={"Please fill your GST number in this field for verification."} width={850} type='text' />
        <div style={{display:'flex',flexDirection:'column'}}>
          <div>Search Keywords <Tooltip placement="topLeft" title={'tooltipText'}><ExclamationCircleOutlined style={{ color: "#fff", borderRadius: "50%",backgroundColor:"#5479F7", fontSize:"18px", marginLeft:"0.2rem", cursor:"pointer"}}/></Tooltip></div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Add New"
            size="large"
            style={{
              width:'850px',
              marginTop: '8px'
            }}
            // onSearch={onSearch}
          />
          <div className={Styles.keywordsContainer}>

          </div>
        </div>
        {type !== "edit" && <div className={Styles.bottomNavigation} style={{width:'80%'}}>
          <div>Back</div>
          <div>
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
                            Finish
                            </Button>
                    </ConfigProvider>
          </div>
        </div>}
    </div>
  )
}

export default AddProductInfo