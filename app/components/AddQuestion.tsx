import Styles from "./../styles/SimpleCard.module.css"
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

interface ChildComponentProps {
    question: String
  }
  
const AddQuestion: React.FC<ChildComponentProps> = ({question}) => {
    return (
        <div className={Styles.AddQuestionBox}>
            <p className={Styles.AddQuestionText}>{question}</p>
            <div className={Styles.AddQuestionIconDiv}>
                <PlusOutlined />
            </div>
        </div>
    );
}
export default AddQuestion;