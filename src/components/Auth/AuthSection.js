import React from 'react'
import Image from 'next/image'

export default function AuthSection() {
  return (
    <>
     <div className="w-5/12 flex flex-col justify-center items-center bg-indigo-600 dark:bg-indigo-950  gap-12">
     <div className="dark:hidden flex">
        <Image
          src="/swissmote-logo.svg"
          width={240}
          height={0}
          alt="swissmote logo"
          
        />
      </div>
      <div className="hidden dark:flex">
        <Image
          src="/swissmote-logo-dark.svg"
          width={240}
          height={0}
          alt="swissmote logo"
          
        />
      </div>
        <div className="text-white text-2xl font-bold text-center flex flex-col gap-4">
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
