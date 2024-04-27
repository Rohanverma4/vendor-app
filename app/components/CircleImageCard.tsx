import Styles from "./../styles/SimpleCard.module.css"
import React from 'react';
import Image from 'next/image';

interface ChildComponentProps {
    heading: string;
    description: string;
    image: any
  }
  
const CircleImageCard: React.FC<ChildComponentProps> = ({heading,description,image}) => {
    return (
        <div className={Styles.circleCardContainer}>
            <div className={Styles.circleCardImageDiv}>
                <Image
                    src={image}
                    alt="My SVG"
                    width={73}
                    height={73}
                />
            </div>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
}
export default CircleImageCard;