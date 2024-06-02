'use client'
import React, { useState } from 'react'
import Styles from '../../styles/ProductsSection.module.css'
import Image from 'next/image'
import ImageUpload from '../ImageUpload'
import DragAndDrop from '../DragDropImage'
import { Button, ConfigProvider } from 'antd'
import ImageLink from '../ImageLink'

const AddImages = ({type}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(''); 
  const [activeIndex, setActiveIndex ] = useState(1)
  const [imageData,setImageData] = useState([
    {
      index: 1,
      image: null
    },
    {
      index: 2,
      image: null
    },
    {
      index: 3,
      image: null
    },
    {
      index: 4,
      image: null
    },
    {
      index: 5,
      image: null
    },
    {
      index: 6,
      image: null
    },
    {
      index: 7,
      image: null
    },
    {
      index: 8,
      image: null
    }
  ])

  const onUploadImage = (image:any) => {
    let newImageData:any = imageData
    newImageData.map((item:any) => {
      if (item.index === activeIndex) {
        item.image = image
      }
    })
    setImageData([...newImageData])
  }

  const checkUploadedImage = () => {
    for (let i = 0; i < imageData.length; i++) {
      if (activeIndex === imageData[i].index && !imageData[i].image) {
        return true
      }
    }
    return false
  }

  const getImage = () => {
    imageData.map((item) => {
      if (item.index === activeIndex) {
        console.log(activeIndex,)
        return item.image
      }
    })
    return null
  }

  return (
    <div>
        {type === "create" && <div className={Styles.addImagesHeading}>Add Product Image</div>}
        <div>
          <ImageUpload text={'Image Upload'} width={''} height={''} onUploadImage={onUploadImage} checkUploadedImage={checkUploadedImage} activeIndex={activeIndex} image={imageData}/>
        </div>
        <div className={Styles.smallImageContainer}>
          {imageData.map((item)=> {
            return (
              <div className={Styles.divImageContainer} onClick={()=> setActiveIndex(item.index)} style={item.index === activeIndex ? {border: '2px solid #5479F7'}: {}}>
                {item.image ? 
                  <><ImageLink href={item.image}/></>
                  :<div>Add Images</div>}
              </div>  
            )
          })}
        </div>
        {type === "create" && <div className={Styles.bottomNavigation}>
          <div>Back</div>
          <div>
          <ConfigProvider
                            theme={{
                            components: {
                                Button: {
                                    colorPrimary: `#fff`,
                                    lineWidth: 0,
                                },
                            },
                            }}
                        >
                            <Button style={{
                                        color:'#000000',
                                        border: '1px solid #DDDDDD',
                                        width: `133px`,
                                        height: '44px',
                                        padding: '1px 0px',
                                        borderRadius: "4px",
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        textAlign:'center',
                                        margin: "16px 14px",
                                        
                                        // marginTop: "1.5rem"
                                        }} type="primary"  block>
                            Cancel
                            </Button>
                    </ConfigProvider>
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
                            <Button style={{
                                        color:'#fff',
                                        border: '1px solid #5479F7',
                                        width: `133px`,
                                        height: '44px',
                                        padding: '1px 0px',
                                        borderRadius: "4px",
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        textAlign:'center',
                                        margin: "16px 14px",
                                        
                                        // marginTop: "1.5rem"
                                        }} type="primary"  block>
                            Save & Next
                            </Button>
                    </ConfigProvider>
          </div>
        </div>}
    </div>
  )
}

export default AddImages