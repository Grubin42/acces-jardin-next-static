import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Logo() {
  return (
    <Link href="/" className="flex items-start gap-2 md:gap-3">
      <Image 
        src="/images/logo.png" 
        alt="Accès Jardin Logo" 
        width={50} 
        height={50}
        className="rounded-md w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
      />
      <div className="flex flex-col mt-1 md:mt-0">
        <span className="font-bold text-base md:text-xl leading-tight">Accès Jardin</span>
        <span className="text-[10px] md:text-xs text-gray-400 -mt-1 ml-4 md:ml-10">Entretien et plantation</span>
      </div>
    </Link>
  )
} 