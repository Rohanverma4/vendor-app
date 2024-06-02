
"use client"
import { useState } from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import Styles from "../../styles/OnboardingSidebar.module.css"

interface ChildComponentProps {
    active: number;
    done: number;
    onClickHeader: (value: any) => void;
}

const OnboardingSidebar : React.FC<ChildComponentProps> = ({active, done, onClickHeader}) => {


    const sidebarHeadings = [
        {
            index: 1,
            title: "GSTIN Check"
        },
        {
            index: 2,
            title: "Basic Information"
        },
        {
            index: 3,
            title: "Business Details"
        },
        {
            index: 4,
            title: "Warehouse Details"
        },
        {
            index: 5,
            title: "Bank Details"
        },
        {
            index: 6,
            title: "Brand Details"
        },
        {
            index: 7,
            title: "Declaration"
        },
    ]
    return (
        <div className={Styles.sidebarContainer}>
            <div style={{marginTop: '10px'}}>
                {
                    sidebarHeadings.map((item:any) => {
                        return <SidebarTitle onClickHeader={onClickHeader} item={item} done={done} active={active} />
                    })
                }
            </div>
        </div>
    )
}

export default OnboardingSidebar

interface ChildComponentsProps {
    item: {
        index: number,
        title: string
    }
    done: number,
    active: number,
    onClickHeader: (value: any) => void;
  }
  
const SidebarTitle: React.FC<ChildComponentsProps> = ({onClickHeader,item,done,active}) => {
    return <div onClick={() => onClickHeader(item.index)} className={done >= item.index ? Styles.SidebarDoneTitle : active === item.index ? Styles.SidebarActiveTitle : Styles.SidebarTitle}>{item.title} {done >= item.index && <CheckCircleOutlined style={{ fontSize: '22px', fontWeight: "bold", marginLeft: "12px", background: "#2FD35E", color:"#fff", borderRadius: "50%", border: "none"}} />}</div>
}