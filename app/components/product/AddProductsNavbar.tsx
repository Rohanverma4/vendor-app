import React from 'react'
import Styles from '../../styles/ProductsSection.module.css'
interface ChildComponentProps {
    activeNav: String,
    doneNav: String,
    setDoneNav: (value: any) => void,
    setActiveNav: (value: any) => void
}
const AddProductsNavbar: React.FC<ChildComponentProps> = ({activeNav,doneNav,setActiveNav,setDoneNav}) => {
  return (
    <div className={Styles.productsNavbarContainer}>
        <div className={doneNav === 'category' ? Styles.doneDiv : activeNav=== 'category' ? Styles.activeDiv : Styles.regularDiv}><div><p>1</p></div>SELECT CATEGORY</div>
        <div className={doneNav === 'images' ? Styles.doneDiv : activeNav=== 'images' ? Styles.activeDiv : Styles.regularDiv}><div><p>2</p></div>ADD IMAGES</div>
        <div className={doneNav === 'info' ? Styles.doneDiv : activeNav=== 'info' ? Styles.activeDiv : Styles.regularDiv}><div><p>3</p></div>ADD PRODUCT INFO</div>
    </div>
  )
}

export default AddProductsNavbar