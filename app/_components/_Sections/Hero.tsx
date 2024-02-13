import Image from "next/image"
import Link from "next/link"
import React from "react"
import PrimaryButton from "../PrimaryButton"
import SecondaryButton from "../SecondaryButton"
import SectionHeading from "../SectionHeading"
import allMedia from "@/app/_lib/images"

function Hero() {
  return (
    <div className="flex min-h-screen justify-around items-center">
      {/* Text  */}
      <div className="gap-y-8 flex flex-col w-1/3">
        <SectionHeading
          title="exploring innovative paths to cultivate your bus"
          dec="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          obcaecati delectus architecto quos officia labore atque nihil modi
          tempora? Soluta suscipit modi repudiandae architecto doloremque eum
          dolorum vel nisi totam!"
        />

        <div className="flex gap-x-5 items-center">
          <PrimaryButton url="" text="Getting Started" />
          <SecondaryButton url="" text="Explorer Features" />
        </div>
      </div>
      {/* Image */}
      <div className="w-1/3 ">
        <Image
          src={allMedia.heroBanner}
          alt="Hero Banner"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}

export default Hero
