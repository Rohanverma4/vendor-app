"use client"
import React, { useEffect } from 'react'
import CommonLogin from '@/app/components/CommonLogin'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import validator from 'validator' 

const VendorLogin = ( ) => {
  const router = useRouter()
  const { data } = useSession()

  useEffect(() => {
    if (data) {
      setTimeout(()=>{
        // router.push("/")
      }, 800)
    }
    
  }, [data])

  const onClick =() => {
    setTimeout(()=>{
      router.push("/")
    }, 500)
  }

  const validatePhoneNumber = (number:string) => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    return (isValidPhoneNumber)
  }

  return (
    <div>
        <CommonLogin onClickButton={onClick} type="Login" />
    </div>
  )
}

export default VendorLogin

// 1066814378429-qjkftpgv86b7kl3v938gre2g7vabjfrj.apps.googleusercontent.com
// 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