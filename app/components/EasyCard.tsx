import Styles from "./../styles/SimpleCard.module.css"
import React from 'react';
import Image from 'next/image';

interface ChildComponentProps {
    heading: string;
    description: string;
    image: any
  }
  
const EasyCard: React.FC<ChildComponentProps> = ({heading,description,image}) => {
    return (
        <div className={Styles.easyCardContainer}>
            <div className={Styles.easyCardImageDiv}>
                <Image
                    src={image}
                    alt="My SVG"
                    width={280}
                    height={300}
                />
            </div>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
}
export default EasyCard;