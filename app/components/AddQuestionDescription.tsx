import Styles from "./../styles/SimpleCard.module.css"
import React from 'react';
import { MinusOutlined } from '@ant-design/icons';

interface ChildComponentProps {
    question: String
    description: String
  }
  
const AddQuestionDescription: React.FC<ChildComponentProps> = ({question,description}) => {
    return (
      <div className={Styles.AddQuestionDescriptionBox}>
        <div className={Styles.AddQuestionBoxDiv}>
            <p className={Styles.AddQuestionText}>{question}</p>
            <div className={Styles.minusQuestionIconDiv}>
                <MinusOutlined />
            </div>
        </div>
        <p className={Styles.AddQuestionDescriptionText}>{description}</p>
      </div>
    );
}
export default AddQuestionDescription;