import Styles from "./../styles/SimpleCard.module.css"
import React from 'react';
import Image from 'next/image';

interface ChildComponentProps {
    firstHeading: string;
    secondHeading: string;
    description: string;
    image: any
  }
  
const SimpleCard: React.FC<ChildComponentProps> = ({firstHeading,secondHeading,description,image}) => {
    return (
        <div className={Styles.cardContainer}>
            <div className={Styles.cardImageDiv}>
                <Image
                    src={image}
                    alt="My SVG"
                    width={296}
                    height={224}
                />
            </div>
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <h2 className={Styles.cardFirstHeading}>{firstHeading}</h2>
            <h2 className={Styles.cardSecondHeading}>{secondHeading}</h2>
            <div className={Styles.cardDescription}>{description}</div>
        </div>
    );
}
export default SimpleCard;