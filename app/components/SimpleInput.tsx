'use client'
import { Button, Input, InputNumber, message, Select, Tooltip, Upload } from 'antd'
import React, { useState } from 'react'
import { ExclamationCircleOutlined, UploadOutlined } from '@ant-design/icons';
import Styles from "../styles/Inputs.module.css"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const { TextArea } = Input;

interface ChildComponentProps {
    tooltipText: any;
    title: string;
    width: number;
    type: string
}

const props = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info:any) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const options: any = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const SimpleInput: React.FC<ChildComponentProps> = ({tooltipText,title,width, type}) => {
  const [value, setValue] = useState('')
  return (
    <div className={Styles.inputFieldContainer}>
        <div>{title} <Tooltip placement="topLeft" title={tooltipText}><ExclamationCircleOutlined style={{ color: "#fff", borderRadius: "50%",backgroundColor:"#5479F7", fontSize:"18px", marginLeft:"0.2rem", cursor:"pointer"}}/></Tooltip></div>
        {type === "text" && <Input style={{width: width}} className={Styles.simpleInputFieldClass}  />}
        {type === "phone" && <PhoneInput
            country={'in'}
            value={value}
            onChange={phone => setValue(phone)}
            inputStyle={{width:width, height:40}} 
          />
        }
        {
          type === "select" && 
          <Select
              mode="tags"
              style={{
                width: width,
                height: 40,
                marginTop: '8px'
              }}
              placeholder="Tags Mode"
              // onChange={handleChange}
              options={options}
            />
      
        }
        {
          type === "upload" && 
            <Upload {...props}>
              <Button style={{width: width, height: 40, marginTop:'8px' }} icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        }
        {
          type === "number" && <InputNumber size="large" style={{width: width}} className={Styles.simpleInputFieldClass}  />
        }
        {
          type === "description" && <TextArea size="large" style={{width: width}} className={Styles.simpleInputFieldClass} autoSize={{
            minRows: 5,
            maxRows: 7,
          }} />
        }
    </div>
  )
}

export default SimpleInput