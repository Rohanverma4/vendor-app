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
  onClick: ()=>void;
  htmlType: string
}

const SimpleButton: React.FC<ChildComponentProps> = ({type,title, size, width,color, bgColor, onClick, htmlType}) => {
  return (
    <div>
       <Button style={{
                          width: `${width}`,
                          backgroundColor: `${bgColor}`,
                          color: `${color}`
                        }}  size={size === "large" ? "large" : "small"} 
                        onClick={onClick} htmlType="submit">{title}</Button>
    </div>
  )
}

export default SimpleButton