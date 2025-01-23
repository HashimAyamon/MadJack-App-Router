"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const BackButton = () => {
    const router=useRouter(); 
  return (
    <div>
        <button onClick={()=>{
            router.back()
        }}>
        <i className="bi bi-arrow-left"></i>
        </button>
    </div>
  )
}
