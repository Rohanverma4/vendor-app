
"use client"
import React, { useEffect } from 'react'
import CommonLogin from '@/app/components/CommonLogin'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const VendorSignup = ( ) => {
  const { data }= useSession()
  const router = useRouter()
  useEffect(() => {
    if (data) {
      setTimeout(()=>{
        // router.push("/")
      }, 800)
    }
    
  }, [data])

  const onClick =() => {
    router.push("/")
  }

  return (
    <div>
        <CommonLogin onClickButton={onClick} type="Signup" />
    </div>
  )
}

export default VendorSignup