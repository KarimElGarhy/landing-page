import React from "react"
import SectionHeading from "../SectionHeading"
import Image from "next/image"
import allMedia from "@/app/_lib/images"
import IconList from "../IconList"

function CustomerHelp() {
  return (
    <div className="grid grid-cols-2 justify-center items-center my-10  ">
      <div className="gap-6 flex flex-col">
        <SectionHeading
          dec="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium voluptate asperiores laborum quibusdam cumque corrupti dignissimos architecto libero veniam rerum, aspernatur voluptatibus at blanditiis voluptates."
          title="Do you need help? Our Support Team ready to help you"
        />
        <IconList
          heading="Email client support"
          dec="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laboriosam."
          imageSrc={allMedia.emilSub}
        />
        <IconList
          heading="Email client support"
          dec="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, laboriosam."
          imageSrc={allMedia.windows}
        />
      </div>
      <div>
        <Image src={allMedia.loving} alt="Love our customers" />
      </div>
    </div>
  )
}

export default CustomerHelp
