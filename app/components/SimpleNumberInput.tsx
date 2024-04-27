import React from 'react'
import Styles from "../styles/Inputs.module.css"
import { InputNumber, type FormItemProps } from 'antd';

interface ChildComponentProps {
  title: string;
  type: string;
  size: string;
  width: string;
}

const SimpleNumberInput: React.FC<ChildComponentProps> = ({type,title, size, width}) => {
  return (
    <div>
       <p className={Styles.inputTitleText}>{title}</p>
          <InputNumber 
               style={{
                          width: `${width}`,
                        }} 
                className={Styles.inputFieldClass} size={size === "large" ? "large" : "small"} type={type} controls={false} />
    </div>
  )
}

export default SimpleNumberInput