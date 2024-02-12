import Image from "next/image"
import React from "react"
import allMedia from "../_lib/images"
import SectionHeading from "./SectionHeading"
const customerList = [
  { title: "medical and vision" },
  { title: "life insurance" },
  { title: "400(K) savings" },
  { title: "HSAs and FSAs" },
]
function CustomerServices() {
  return (
    <div className="grid grid-cols-2 justify-center items-center my-10">
      {/* Image */}
      <div>
        <Image src={allMedia.dance} alt="Customer Services" />
      </div>
      {/* TEXT */}
      <div className="flex flex-col gap-y-6">
        <SectionHeading
          title="Customer Support is Our Main Priority with their hundred percent
          satisfaction."
          dec="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          delectus numquam hic eaque earum iusto voluptatum odio ab dicta sunt."
        />

        <div>
          {customerList.map((item, index) => (
            <li
              className="text-blue-950 list-none flex gap-x-2 text-lg capitalize font-semibold leading-loose"
              key={index}
            >
              <Image
                alt="Check Mark"
                src={allMedia.checkMark}
                width={20}
                height={20}
              />
              {item.title}
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerServices
