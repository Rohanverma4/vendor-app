import React from 'react';
// import './ImageContainer.css';
import Styles from '../styles/ProductsSection.module.css'
const DragAndDrop = () => {
    const [url, setUrl] = React.useState('');

    const onChange = (e:any) => {
        const files = e.target.files;
        files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    };

    return (
        <div className={Styles.imageContainer}>
            {
                url ?
                    <img
                        className={Styles.imageView}
                        style={{ width: '100%', height: '100%' }}
                        src={url} alt="" />
                    :
                    <div className={Styles.uploadContainer}>
                        <input
                            type="file"
                            className={Styles.inputFile}
                            accept=".png, .jpg, .jpeg"
                            onChange={onChange}
                        />
                        <p>Drag & Drop here</p>
                        <p>or <span style={{ color: "blue" }} >Browse</span></p>

                    </div>
            }
        </div>
    );
};

export default DragAndDrop;