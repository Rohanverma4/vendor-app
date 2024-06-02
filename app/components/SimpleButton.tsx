'use client'
import React from 'react'
import { Button, type FormItemProps } from 'antd';

interface ChildComponentProps {
  title: string;
  type: string;
  size: string;
  width: string;
  color: string;
  bgColor: string;
  htmlType: string;
  onClick: ()=>void;
  disabled: boolean;
  fontWeight: number;
}

const SimpleButton: React.FC<ChildComponentProps> = ({type,title, size, width,color, bgColor, htmlType, onClick, disabled, fontWeight}) => {
  return (
    <div>
       <Button style={{
                          width: `${width}`,
                          backgroundColor: `${bgColor}`,
                          color: `${color}`,
                          fontWeight: `${fontWeight}`
                        }}  size={size === "large" ? "large" : "small"} 
                       htmlType="submit"
                       onClick={onClick} disabled={disabled}>{title}</Button>
    </div>
  )
}

export default SimpleButton