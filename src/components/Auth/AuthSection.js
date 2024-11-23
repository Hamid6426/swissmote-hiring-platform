import React from 'react'
import Image from 'next/image'

export default function AuthSection() {
  return (
    <>
     <div className="w-5/12 flex flex-col justify-center items-center bg-blue-400 gap-12">
        <Image
          src="/swissmote-logo.svg"
          width={360}
          height={80}
          alt="Swissmote Logo"
          className=""
        />
        <div className="text-3xl font-bold text-center flex flex-col gap-4">
          <h2>PROVE YOURSELF AND GET HIRED</h2>
          <h2>NO MORE RESUME IN THE WAY</h2>
        </div>
        <Image
          src="/design-asset-1.png"
          width={256}
          height={280}
          alt="design asset"
        />
      </div> 
    </>
  )
}
