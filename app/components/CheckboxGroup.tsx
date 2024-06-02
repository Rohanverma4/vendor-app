import { Checkbox, Radio, Tooltip } from 'antd'
import Styles from '../styles/ProductsSection.module.css'
import React from 'react'
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';


interface ChildComponentProps {
    title: String,
    rowLength: number,
    dataArray: string[],
    description: string,
    gap: string
}
const CheckboxGroup: React.FC<ChildComponentProps> = ({title,rowLength,dataArray,description,gap}) => {

  const createData = () => {
    let data: string[][] = []
    let tempData:string[] = []
    dataArray.map((item)=> {
        tempData.push(item)
        // if (tempData.length % rowLength === 0) {
        //     data.push(tempData)
        //     tempData = []
        // }
    })
    // if (tempData.length) {
    //     data.push(tempData)
    // }
    data.push(tempData)
    return tempData
  }

  return (
    <div>
        <div style={{margin:"25px 0px"}}>{title} <Tooltip placement="topLeft" title={description}><ExclamationCircleOutlined style={{ color: "#fff", borderRadius: "50%",backgroundColor:"#5479F7", fontSize:"18px", marginLeft:"0.2rem", cursor:"pointer"}}/></Tooltip></div>
        <div className={Styles.radioButtonContainer}>
            <div className={Styles.radioButtonDiv}><CheckboxSection gap={gap} item={createData()}/></div>
        </div>
    </div>
  )
}

interface CheckboxComponentProps {
    item: any,
    gap: string
}

const CheckboxSection: React.FC<CheckboxComponentProps> = ({gap,item}) => {
    return (
        <Checkbox.Group>
            {
                item.map((radioTitle:string) => {
                    return <Checkbox style={{marginRight: `${gap}`,marginBottom:'15px', color:'#4E4E4E',fontSize:'18px',lineHeight:'24px',fontWeight:"400"}} value={radioTitle}>{radioTitle}</Checkbox>
                })
            }
        </Checkbox.Group>
    )
}

export default CheckboxGroup