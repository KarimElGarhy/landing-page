import Image from "next/image"
import React from "react"
type icon = {
  heading: string
  dec: string
  imageSrc: string
}

function IconList(props: icon) {
  return (
    <div className="flex gap-x-6 items-center">
      <div>
        <Image src={props.imageSrc} width={60} alt="icon" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{props.heading}</h1>
        <p className="font-extralight w-96">{props.dec}</p>
      </div>
    </div>
  )
}

export default IconList
