import React from 'react'
import Styles from "../styles/Inputs.module.css"
import { InputNumber, type FormItemProps } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

interface ChildComponentProps {
  title: string;
  type: string;
  size: string;
  width: string;
  onChange: (value : number|null) => void;
  value:string;
}

const PhoneNumberInput: React.FC<ChildComponentProps> = ({type,title, size, width, onChange, value}) => {
  return (
    <div>
       <p className={Styles.inputTitleText}>{title}</p>
                 <PhoneInput 
                        country={'in'} 
                        value={value} 
                        onChange={phone => onChange(+phone)} 
                        inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                          }}
                        onlyCountries={['in']}
                        containerClass={Styles.inputFieldClass}
                        inputStyle={{width:360, height:40}} 
                    /> 
    </div>
  )
}

export default PhoneNumberInput