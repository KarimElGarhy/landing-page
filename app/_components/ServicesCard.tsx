import Image from "next/image"
import React from "react"

import Link from "next/link"

type servicesProps = {
  headLine: string
  dec: string
  imageLink: string
  link: string
}
function ServicesCard(props: servicesProps) {
  return (
    <div>
      <div className="hover:scale-110 duration-300 flex flex-col justify-center items-center gap-5 bg-gray-500/10 shadow-lg rounded p-5">
        <Image src={props.imageLink} alt="email" width={80} height={80} />
        <h1 className="text-blue-950 font-bold capitalize text-xl">
          {props.headLine}
        </h1>
        <p className="text-sm">{props.dec}</p>
        <Link className="text-pink-600 font-bold" href="">
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ServicesCard
