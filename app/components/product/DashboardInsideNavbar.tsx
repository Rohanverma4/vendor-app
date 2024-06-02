import React from 'react'
import Styles from '../../styles/ProductsSection.module.css'

interface ChildComponentProps {
    navArray: Array<String>
}
const DashboardInsideNavbar: React.FC<ChildComponentProps> = ({navArray}) => {
  return (
    <div>
        <div style={{display:'flex', margin: '20px 96px'}}>
            {navArray.map((item, index) => {
                return (
                    <div className={Styles.insideNabarFont}>&nbsp;{index ? "> ": ''}{item}</div>
                )
            })}
        </div>
    </div>
  )
}

export default DashboardInsideNavbar