import React from 'react'
import Styles from "../styles/Inputs.module.css"
import { InputNumber, type FormItemProps } from 'antd';

interface ChildComponentProps {
  title: string;
  type: string;
  size: string;
  width: string;
  onChange: (value : number|null) => void;
  value:string;
}

const SimpleNumberInput: React.FC<ChildComponentProps> = ({type,title, size, width, onChange, value}) => {
  return (
    <div>
       <p className={Styles.inputTitleText}>{title}</p>
          <InputNumber 
               onChange={onChange}
               style={{
                          width: `${width}`,
                        }} 
                className={Styles.inputFieldClass} 
                size={size === "large" ? "large" : "small"} 
                type={type} 
                controls={false}
                 />
    </div>
  )
}

export default SimpleNumberInput