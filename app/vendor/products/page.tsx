'use client'
import VendorDashboardHeader from '@/app/components/dashboard/VendorDashboardHeader'
import VendorNavbar from '@/app/components/dashboard/VendorNavbar'
import AddProductsNavbar from '@/app/components/product/AddProductsNavbar'
import DashboardInsideNavbar from '@/app/components/product/DashboardInsideNavbar'
import Styles from '../../styles/ProductsSection.module.css'
import React, { useEffect, useRef, useState } from 'react'
import SelectCategory from '@/app/components/product/SelectCategory'
import AddImages from '@/app/components/product/AddImages'
import AddProductInfo from '@/app/components/product/AddProductInfo'
import Image from 'next/image';
import ShowMoreText from "react-show-more-text";


import mainImageProduct from '../../../public/assets/mainImageProduct.png'
import { Button, ConfigProvider, Popover } from 'antd'

const VendorProducts = () => {
  const [activeNav, setActiveNav] = useState(1)
  const [doneNav, setDoneNav] = useState('')

  const productListings = [
    {index:1, quantity: 0, title:'Active Listings', description:''},
    {index:2, quantity: 0, title:'Ready for Activation', description:''},
    {index:3, quantity: 0, title:'Blocked Listings', description:''},
    {index:4, quantity: 0, title:'Inactive Listings', description:''},
    {index:5, quantity: 0, title:'Archived Listings', description:''}
  ]


  
  return (
    <div>
        <VendorDashboardHeader title="Vendor Dashboard Header"/>
        <VendorNavbar />
        <div className={Styles.productListHeaderDiv}>
          <h2 className={Styles.productListHeading}>Products & Services Listings Management</h2>
          <div className={Styles.productListDetails}>
            {
              productListings.map((item:any) => {
                return <ListingQuantity item={item} />
              })
            }
          </div>
          <div className={Styles.productListNavbar}>
            {productListings.map((item) => {
              return <ListingsNavigation item={item} activeIndex={activeNav} onClick={() => setActiveNav(item.index)} />
            })}
          </div>
          <div>
            <ListedProduct activeIndex={activeNav} />
          </div>
        </div>
    </div>
  )
}

export default VendorProducts

interface ChildComponentProps {
  item: any
}
const ListingQuantity : React.FC<ChildComponentProps> = ({item}) =>  {
  return (
    <div className={Styles.productDetailsDiv}>
      <div className={Styles.productDetailsQuantity}>{item.quantity}</div>
      <div className={Styles.productDetailsTitle}>{item.title}</div>
    </div>
  )
}

interface NavigationComponentProps {
  item: any,
  activeIndex: number,
  onClick: () => void
}
const ListingsNavigation : React.FC<NavigationComponentProps> = ({item,activeIndex,onClick}) =>  {
  return (
    <div onClick={onClick} className={item.index === activeIndex ? Styles.activeProductNav : Styles.listingNavContainer}>
      {item.title}
    </div>
  )
}

const ListedProduct = ({activeIndex}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // const element:any = textRef.current;
    // if (element.scrollHeight > element.clientHeight) {
    //   setIsOverflowing(true);
    // } else {
    //   setIsOverflowing(false);
    // }
  }, [textRef, isExpanded]);

  const productData = [
    {
      'Product Name':'Cotton Round Neck T Shirt Print ',
      'Price':' ₹0 /Piece',
      'Kids Printing':' ₹0 /Piece',
      'Category':'Cotton Round Neck T Shirt',
      'Printing kids cloths':'Yes',
      'Description':'Cotton Round Neck',
      'Printing Technique':'Screen Printing',
      'Color':'White , Black  grey',
      'Kids Cloths Size':'1 Year , 2 Year',
      'Collar Type':'1 Year , 2 Year  view more',
      'Minimum Order Quantity':'100',
      'Size':'Small, Medium , Large ,',
      'Material':'Cotton',
      'Production Capacity':'1000',
      'Fabric':'Cotton',
      'Pattern':'Cotton Round Neck T Shirt Print ',
      'Listing Date':'24 Jan 2023',
    }
  ]

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return(
    <div className={Styles.productContainer}>
      <div className={Styles.productListHead}><p>Product List</p></div>
      <div style={activeIndex === 2 ? { gap:'76%'} : activeIndex === 4 ? { gap:'66%'} :activeIndex === 5 ? { gap:'66%'}:{ gap:'70%'}} className={Styles.productHeadSection}>
        <h3>Cotton Round Neck T Shirt Print </h3>
        <div>
          {activeIndex !== 2 && activeIndex !== 4 && activeIndex !== 5 && <p>Deactive</p>}
          {activeIndex === 4 && <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `#ffffff`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button style={{
                              width: `120px`,
                              height: '30px',
                              borderRadius: "4px",
                              fontWeight: "500",
                              fontSize: "14px",
                              // backgroundColor: `${bgColor}`,
                              color: `#2FD35E`,
                              marginTop: '7px',
                              border: '1px solid #2FD35E'
                            }} type="primary" size='small' block>
                  Activate listing
                </Button>
              </ConfigProvider>}
              {activeIndex === 5 && <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `#ffffff`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button style={{
                              width: `120px`,
                              height: '30px',
                              borderRadius: "4px",
                              fontWeight: "500",
                              fontSize: "14px",
                              // backgroundColor: `${bgColor}`,
                              color: `#FF0000`,
                              marginTop: '7px',
                              border: '1px solid #FF0000'
                            }} type="primary" size='small' block>
                  Deactivate listing
                </Button>
              </ConfigProvider>}
          <p>Edit</p>
        </div>
      </div>
      <div className={Styles.productDataSection}>
        <div>
          <Image
              src={mainImageProduct}
              alt="My SVG"
              width={360}
              height={360}
              style={{marginLeft:'43px'}}
           />
        </div>
        <div className={Styles.subImagesContainer}>
          <div>
            <Image
                src={mainImageProduct}
                alt="My SVG"
                width={78}
                height={68}
                style={{margin:'1px 1px'}}
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={Styles.productDetailsContainer}>
          <div>
            <p className={Styles.productDetailsLabel}>Product Name</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Product Name']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Price</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Price']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Kids Printing</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Kids Printing']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Category</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Category']}</div>
              <Popover content={content} title="Title" trigger="click">
                 <a className={Styles.viewMoreAnchor}>view more</a>
              </Popover>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Printing kids cloths</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Printing kids cloths']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Desciption</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Description']}</div>
              <Popover content={content} title="Title" trigger="click">
                 <a className={Styles.viewMoreAnchor}>view more</a>
              </Popover>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Printing Technique</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Printing Technique']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Color</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Color']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Kids Cloths Size</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Kids Cloths Size']}</div>
              <Popover content={content} title="Title" trigger="click">
                 <a className={Styles.viewMoreAnchor}>view more</a>
              </Popover>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Collar Type</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Collar Type']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Minimum Order Quantity</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Minimum Order Quantity']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Size</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Size']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Material</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Material']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Production Capacity</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Production Capacity']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Fabric</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Fabric']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Pattern</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Pattern']}</div>
            </div>
          </div>
          <div>
            <p className={Styles.productDetailsLabel}>Listing Date</p>
            <div style={{display:'flex'}}>
              <div className={Styles.productDetailsData}>{productData[0]['Listing Date']}</div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      {activeIndex === 2 && <div className={Styles.productActivateSection}>
        <p>Your Product/Service is Ready for activation click on  active button to  go live .</p>
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
                              width: `173px`,
                              height: '40px',
                              borderRadius: "4px",
                              fontWeight: "500",
                              fontSize: "19px",
                              // backgroundColor: `${bgColor}`,
                              color: `#ffffff`
                            }} type="primary" size='large' block>
                  Activate
                </Button>
              </ConfigProvider>
      </div>}
      {activeIndex === 3 && <div className={Styles.productBlockedSection}>
        <p>Your Product/Service is Ready for activation click on  active button to  go live .</p>
        <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `#DE0505`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button style={{
                              width: `173px`,
                              height: '40px',
                              borderRadius: "4px",
                              fontWeight: "500",
                              fontSize: "19px",
                              // backgroundColor: `${bgColor}`,
                              color: `#ffffff`,
                              border: '1px solid #ffffff'
                            }} type="primary" size='large' block>
                  View Reason
                </Button>
              </ConfigProvider>
      </div>}
      {activeIndex === 5 && <div className={Styles.productArchivedSection}>
        <p>Complete your listing and start earning now</p>
        <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `#F99733`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button style={{
                              width: `173px`,
                              height: '40px',
                              borderRadius: "4px",
                              fontWeight: "500",
                              fontSize: "19px",
                              // backgroundColor: `${bgColor}`,
                              color: `#ffffff`,
                              border: '1px solid #ffffff'
                            }} type="primary" size='large' block>
                  Edit Listing
                </Button>
              </ConfigProvider>
      </div>}
    </div>
  )
}