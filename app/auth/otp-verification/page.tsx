"use client"
import React, { useEffect } from 'react'
import validator from 'validator' 
import CommonLogin from '@/app/components/CommonLogin'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const VendorLogin = ( ) => {
  const router = useRouter()
  const { data } = useSession()

  const validatePhoneNumber = (number:string) => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
  }
  useEffect(() => {
    if (data) {
      setTimeout(()=>{
        // router.push("/")
      }, 800)
    }
    
  }, [data])

  const onClick = () => {

  }
  return (
    <div>
        <CommonLogin onClickButton={onClick} type="OTP" />
    </div>
  )
}

export default VendorLogin

// 1066814378429-qjkftpgv86b7kl3v938gre2g7vabjfrj.apps.googleusercontent.com
// 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