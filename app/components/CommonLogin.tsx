"use client"
import Styles from "./../styles/CommonLogin.module.css"
import React, { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import validator from "validator";
import SimpleNumberInput from "./SimpleNumberInput";
import SimpleButton from "./SimpleButton";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { signIn, signOut } from "next-auth/react"
import logoGoogleSignup from "../../public/assets/logoGoogleSignup.png"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PhoneNumberInput from "./PhoneNumberInput";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

interface ChildComponentProps {
    type: string;
    onClickButton: () => void
  }
  
const CommonLogin: React.FC<ChildComponentProps> = ({type,onClickButton}) => {
    const [buttonActive, setButtonActive] = useState(true)
    const searchParams = useSearchParams();
    const [value, setValue] = useState("")
    const accessToken = searchParams.get("access_token");
    const [userDetails, setUserDetails] = useState({
        countryCode: "",
        phoneNo: "",
        phEmailJwt: "",
      });

    const CLIENT_ID = "17770247180483520148"
    const validatePhoneNumber = (number:string) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber) && (`${number}`.length === 12) ? true : false
    }
    const onClick = () => {
        openLoginWindow()
        // toast.success('OTP Sent Successfully!');
        // onClickButton()
    }

    const onChange = (value:number|null) => {
        
        setButtonActive(validatePhoneNumber(`${value}`))
        setValue(`${value}`)
    }

    useEffect(() => {
        if (accessToken) {
          httpRequest();
        }
      }, [accessToken]);
    

    const httpRequest = async () => {
        try {
          const url = "https://eapi.phone.email/getuser";
          const data = new FormData();
    
          data.append("access_token", `${accessToken}`);
          data.append("client_id", CLIENT_ID);
    
          const response = await fetch(url, { method: "POST", body: data });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const responseData = await response.json();
    
          if (responseData.status !== 200) {
            throw new Error("Something went wrong");
          }
    
          const phEmailJwt = responseData.ph_email_jwt;
    
          setUserDetails({
            countryCode: responseData.country_code,
            phoneNo: responseData.phone_no,
            phEmailJwt: phEmailJwt,
          });
    
          // Set cookie with 1-day expiration
          const cookieExpire = new Date(
            Date.now() + 1 * 24 * 60 * 60 * 1000
          ).toUTCString();
          document.cookie = `ph_email_jwt=${phEmailJwt}; expires=${cookieExpire}; path=/`;
          toast.success(`${type} Successfully`);
          onClickButton()
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };

    const openLoginWindow = useCallback(() => {
        const top = (window.screen.height - 600) / 2;
        const left = (window.screen.width - 500) / 2;
    
        const REDIRECT_URL = window.location.href;
        const AUTH_URL = `https://www.phone.email/auth/log-in?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}`;
        const APP_SETTING = `toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=560, top=${top}, left=${left}`;
    
        window.open(AUTH_URL, "peLoginWindow", APP_SETTING);
      }, []);
    
      console.log(accessToken)
    return (
        <div className={Styles.commonLoginContainer}>
            <h2 className={Styles.commonLoginHeader}>{type === "OTP" ? "Welcome" : type} to Threadtrades saller </h2>
            <p className={Styles.commonLoginText}>Let’s create your Partner Account to start your journey with us.</p>
            <div className={Styles.PhoneNumberDiv}>
                {/* <PhoneNumberInput value={value} onChange={onChange} type='number' title={type === "OTP" ? type : 'Phone Number'} width='360px' size='large' /> */}
                {/* <SimpleNumberInput value={value} onChange={onChange} type='number' title={type === "OTP" ? type : 'Phone Number'} width='360px' size='large' /> */}
                <SimpleButton htmlType='Submit' type='number' title={`${type} with Phone`} width='260px' size='large' bgColor={buttonActive ? '#FF0000' : '#BCC1CC'} color={buttonActive ? '#FFE7E7' : '#455A64'} disabled={!buttonActive} onClick={onClick} fontWeight={600}/>
            </div>
            {type !== "OTP" ? <div className={Styles.googleButtonContainer}>
                <div className={Styles.googleButtonOr}>Or</div>
                {/* Google Button */}
                {/* <SimpleButton htmlType='Submit' type='number' title='Continue' width='360px' size='large' bgColor='#BCC1CC' color='#455A64'/> */}
                {/* <AuthButton /> */}
                <button onClick={() => signIn("google")}  className={Styles.googleButton}> 
                
                <Image
                    src={logoGoogleSignup}
                    alt="My SVG"
                    width={16}
                    height={16}
                /> {type} with Google</button>
                {/* <button onClick={() => signOut()}  className={Styles.googleButton}> Sign Out</button> */}
            </div>:<div className={Styles.distanceDiv}></div>}
            <div className={Styles.termsAndConditions}>
               By continuing, you agree to the<Link href="http://localhost:3000/auth/login"> Terms </Link> Of Use & <Link href="http://localhost:3000/auth/login">Privacy Policy</Link>
            </div>
            <div className={Styles.needHelp}>Need help?</div>
        </div>
    );
}
export default CommonLogin;