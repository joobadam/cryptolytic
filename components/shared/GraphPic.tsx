import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const GraphPic = () => {
  return (
    <div className="blurpic shadow-2xl rounded-xl h-[60vh] w-[90%] relative mx-auto mb-10 scale-div"> 
    <Link href="/crypto">
    <Image
      src="/assets/images/crypto2.png"
      alt="crypto"
      layout="fill"
      className="object-cover object-center rounded-xl mx-auto blurpic"
    />
    </Link>
  </div>

  )
}

export default GraphPic