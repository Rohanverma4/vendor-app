// 'use client'
import Image from "next/image";
import HomepageHeader from "./components/HomepageHeader";
import { Button, Carousel, ConfigProvider } from "antd";
import homepageCarousel from "../public/assets/homepageCarousel.png";
import buildBusinessBackground from "../public/assets/buildBusinessBackground.png"
import styles from "./styles/HomepageCarousel.module.css"
import { ArrowRightOutlined } from '@ant-design/icons';
import step1Image from "./../public/assets/step1Image.png"

import SimpleCard from "./components/SimpleCard";
import CircleImageCard from "./components/CircleImageCard";
import earthLocation from "../public/assets/earthLocation.png"
import storeBox from "../public/assets/storeBox.png"
import internet from "../public/assets/internet.png"
import growth from "../public/assets/growth.png"
import buyers from "../public/assets/buyers.png"
import earnMore from "../public/assets/earnMore.png"
import growth2 from "../public/assets/growth2.png"
import addtionalSupport from "../public/assets/additionalSupport.png"
import burningRocket from "../public/assets/burningRocket.png"

import EasyCard from "./components/EasyCard";
import worldMap from "../public/assets/worldMap.png"
import { Video } from "./components/Video";
import AddQuestion from "./components/AddQuestion";
import AddQuestionDescription from "./components/AddQuestionDescription";

export default function HomePage() {
  return (
    <div>
      <HomepageHeader title="vn"/>
      <div>
        <Carousel autoplay>
          <div className={styles.container}>
            <Image
                src={homepageCarousel}
                alt="My SVG"
                width={1920}
                height={800}
                className={styles.image}
              />
            <div className={styles.overlay}>
              <div className={styles.headerImgText}>Become a seller on tradethreads.com</div>
              <div className={styles.headerImgSecText}>Start your selling journey on Theadtrades.com and become a part of our 14 Lakh+ seller community</div>
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
                              width: `285px`,
                              height: '60px',
                              borderRadius: "10px",
                              fontWeight: "600",
                              fontSize: "large",
                              marginTop: "15px"
                              // backgroundColor: `${bgColor}`,
                              // color: `${color}`
                            }} type="primary" size='large' block>
                  Start Selling <ArrowRightOutlined style={{ fontSize: '20px', fontWeight: "bold"}} />
                </Button>
              </ConfigProvider>
            </div>
          </div>
          <div>
            <Image
              src={homepageCarousel}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
          <div>
            <Image
              src={homepageCarousel}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
          <div>
            <Image
              src={homepageCarousel}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
          <div>
            <Image
              src={homepageCarousel}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
        </Carousel>
      </div>
      <div className={styles.cardContainerDiv}>
        <h1 className={styles.cardContainerHeading}>How to sell on threadtrades.com In 3 Simple Steps </h1>
        <div className={styles.cardDiv}>
          <SimpleCard firstHeading={"STEP 1"} secondHeading={"CREATE AN ACCOUNT"} description={"Register using your mobile number. Enter your Name, Shop name and Pincode."} image={step1Image} />
          <SimpleCard firstHeading={"STEP 2"} secondHeading={"COMPLETE SHOP KYC"} description={"Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence."} image={step1Image} />
          <SimpleCard firstHeading={"STEP 3"} secondHeading={"START EARNING"} description={"List your product and services on threadtrades.com start getting orders."} image={step1Image} />
        </div>
        <div className={styles.cardContainerButton}>
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
                              width: `285px`,
                              height: '60px',
                              borderRadius: "10px",
                              fontWeight: "600",
                              fontSize: "large",
                              marginTop: "15px"
                              // backgroundColor: `${bgColor}`,
                              // color: `${color}`
                            }} type="primary" size='large' block>
                  Start Selling Now <ArrowRightOutlined style={{ fontSize: '20px', fontWeight: "bold"}} />
                </Button>
        </ConfigProvider>
        </div>
      </div>
      <div className={styles.buildBusinessContainer}>
      <div className={styles.container}>
            <Image
                src={buildBusinessBackground}
                alt="My SVG"
                width={1818}
                height={500}
              />
            <div className={styles.buildBusinessOverlay}>
              <h2 className={styles.buildBusinessHeader}>Build your Business with us</h2>
              <p className={styles.buildBusinessDescription}>Powerful platform gives deep research and big data analytics with global producer’s products supply to your door for your business</p>
              <div className={styles.buildBusinessCardsDiv}>
                <CircleImageCard heading={"190+"} description={"Single platform for 190+ countries"} image={earthLocation} />
                <CircleImageCard heading={"15+"} description={"tailored categories of the products"} image={storeBox} />
                <CircleImageCard heading={"1000+"} description={"variety of products in one domain"} image={internet} />
                <CircleImageCard heading={"10+"} description={"service sectors integration for growth your business"} image={growth} />
              </div>
            </div>
          </div>
      </div>
      <div className={styles.reasonContainerDiv}>
        <h2 className={styles.reasonContainerHeader}>Why Choose Us ?</h2>
        <p className={styles.reasonContainerPara}> We provide a comprehensive suite of services, including printing, delivery, design, packing, and high-quality raw materials.</p>
        <div className={styles.reasonCardContainer}>
          <div className={styles.reasonCardContainerPart}>
            <EasyCard heading={"18 crore+ Buyers"} description={"Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence"} image={buyers} />
            <EasyCard heading={"Opportunity to earn more"} description={"Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence"} image={earnMore} />
          </div>
          <div className={styles.reasonCardContainerPart} style={{marginTop: '3rem'}}>
            <EasyCard heading={"Growth"} description={"Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence"} image={growth2} />
            <EasyCard heading={"Additional Support"} description={"Upload any one of shop's KYC documents like GSTIN, Shop & Establishment Licence"} image={addtionalSupport} />
          </div>
        </div>
      </div>
      <div className={styles.videoCarouselContainer}>
        <Carousel>
          <div className={styles.videoCarousel}>
            <Image
                src={worldMap}
                alt="My SVG"
                width={1600}
                height={800}
                // className={styles.image}
              />
            <div className={styles.videoCarouselOverlay}>
              <div className={styles.videoCarouselHeading}>Why Seller Love Threadtrade?</div>
              <div className={styles.videoCarouselDescription}>Seller Success Stories</div>
              <div className={styles.videoContainer}>
                <div className={styles.videoDescriptionDiv}>
                  <div className={styles.videoDescriptionText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                  <div className={styles.videoDescriptionTitle}>Simon Árpád</div>
                  <div  className={styles.videoDescriptionProfession}>Global Accountability Officer</div>
                </div>
                <div className={styles.videoDiv}>
                  <Video />
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <Image
              src={worldMap}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
          <div>
            <Image
              src={worldMap}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
          <div>
            <Image
              src={worldMap}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div>
          <div>
            <Image
              src={worldMap}
              alt="My SVG"
              width={1920}
              height={800}
            />
          </div> */}
        </Carousel>
      </div>
      <div className={styles.questionBoxContainer}>
        <div className={styles.questionBoxHeader}>Frequently Asked Questions</div>
        <div className={styles.questionBoxDiv}>
          <div className={styles.questionBoxSection}>
            <AddQuestion question={"How to launch a Webflow website?"} />
            <AddQuestion question={"How to launch a Webflow website?"} />
            <AddQuestionDescription question={"Why is Webflow the best nocode tool?"} description={"Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"} />
          </div>
          <div className={styles.questionBoxSection}>
            <AddQuestion question={"Who founded BRIX Templates?"} />
            <AddQuestion question={"Who founded BRIX Templates?"} />
            <AddQuestionDescription question={"Why is Webflow the best nocode tool?"} description={"Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"} />
          </div>
        </div>
      </div>
      <div className={styles.buildBusinessContainer}>
      <div className={styles.container}>
            <Image
                src={burningRocket}
                alt="My SVG"
                width={1800}
                height={800}
              />
            <div className={styles.burningRocketOverlay}>
              <div className={styles.burningRocketHeader}>Start your Seller Journey</div>
              <div className={styles.burningRocketDescription}>Join our family of 14 Lakh+ businesses who sell on Amazon.in</div>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `#FFF9F9`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button style={{
                              width: `285px`,
                              height: '60px',
                              borderRadius: "32px",
                              fontWeight: "600",
                              fontSize: "large",
                              marginTop: "15px",
                              // backgroundColor: `${bgColor}`,
                              color: `#000000`
                            }} type="primary" size='large' block>
                  Start Selling Now <ArrowRightOutlined style={{ fontSize: '20px', fontWeight: "bold"}} />
                </Button>
              </ConfigProvider>
            </div>
          </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
