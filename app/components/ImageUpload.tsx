// import React, { useState } from 'react';
// import { message, Upload } from 'antd';
// import type { GetProp, UploadFile, UploadProps } from 'antd';
// import Styles from '../styles/ProductsSection.module.css'

// type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

// interface ChildComponentProps {
//     text: String
// }
// const ImageUpload: React.FC<ChildComponentProps> = ({text}) =>{
//   const [fileList, setFileList] = useState<UploadFile[]>([
//   ]);

//   const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const onPreview = async (file: UploadFile) => {
//     let src = file.url as string;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj as FileType);
//         reader.onload = () => resolve(reader.result as string);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   const beforeUpload = (file:any) => {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//         message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//         message.error('Image must smaller than 2MB!');
//     }
//   return isJpgOrPng && isLt2M;
//   }
//   return (
//       <div className="imageUploadSection">
//         <Upload
//             action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//             listType="picture-card"
//             fileList={fileList}
//             onChange={onChange}
//             onPreview={onPreview}
//             beforeUpload={beforeUpload}
//         >
//             {fileList.length < 1 && text}
//         </Upload>
//       </div>
//   );
// };

// export default ImageUpload;

import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider, message, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import symbolsImage from '../../public/assets/symbolsImage.png'
import Styles from '../styles/ProductsSection.module.css'
import Image from 'next/image';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface ChildComponentProps {
    text: String,
    width: String,
    height: String,
    onUploadImage: (value:any)=> void,
    checkUploadedImage: () => boolean,
    image: any,
    activeIndex: number
}
const ImageUpload: React.FC<ChildComponentProps> = ({text,width,height,onUploadImage,checkUploadedImage,image,activeIndex}) =>{
  const [fileList, setFileList] = useState<UploadFile[]>([
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    onUploadImage(newFileList[0])
  };
  // console.log(fi)
  useEffect(() => {
    if (checkUploadedImage()) {
      setFileList([])
      console.log('HERE')
    } else {
      // const data = image.find((item:any) => item.image === activeIndex)
      // console.log(image,fileList,activeIndex,data)
      // setFileList([image])
      // setTimeout(() => {
      //   setFileList([image])
      // },1000)
      console.log(activeIndex,image)
      image.map((item:any) => {
        if (activeIndex == item.index) {
          setFileList([item.image])
        }
      })
    }
  },[checkUploadedImage(),activeIndex])

  console.log(fileList)

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    // const image = new Image();
    const image:any = {}
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = (file:any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
  return isJpgOrPng && isLt2M;
  }
  return (
      <div className="imageUploadSection">
        <Upload
            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            beforeUpload={beforeUpload}
            // style={{width:`${width}`, height: `${height}`}}
        >
          {fileList.length < 1 && 
            <ConfigProvider
                            theme={{
                            components: {
                                Button: {
                                    colorPrimary: `#5479F7`,
                                    lineWidth: 0,
                                },
                            },
                            }}
                        >
                            <div className={Styles.nullImageDiv}>
                              <Image
                                    src={symbolsImage}
                                    alt="My SVG"
                                    width={150}
                                    height={150}
                                />
                                <Button style={{
                                              color:'#fff',
                                              border: '1px solid #DDDDDD',
                                              width: `190px`,
                                              height: '44px',
                                              padding: '1px 0px',
                                              borderRadius: "4px",
                                              fontWeight: "500",
                                              fontSize: "18px",
                                              textAlign:'center',
                                              margin: "16px 14px",
                                              
                                              // marginTop: "1.5rem"
                                              }} type="primary"  block>
                                  {fileList.length < 2 && text}
                                  </Button>
                              </div>
                    </ConfigProvider>
          }
        </Upload>
      </div>
  );
};

export default ImageUpload;