import React from "react"
import SectionTitle from "../SectionTitle"
import SecondaryButton from "../SecondaryButton"
import PrimaryButton from "../PrimaryButton"
const tableContent = [
  "Full Access Library",
  "Multi Website",
  "Next JS",
  "MERN Stack Project",
  "TypeScript Project",
]
function PriceTable() {
  return (
    <div className="flex justify-center items-center flex-col text-center mb-5">
      <SectionTitle
        subtitle="deal for your business"
        headline="Meet our pricing plan that suit you"
      />
      {/* First tables Container */}
      <div className="flex items-center justify-between w-[80%]">
        {/* First table */}
        <div className="bg-black/10 w-2/6 pb-8 flex flex-col justify-center hover:scale-105 duration-300  overflow-hidden shadow-lg">
          {/* Table Head */}
          <div className="p-10  bg-red-800 text-xl font-mono text-white rounded-t-lg  capitalize ">
            <h3>Starter</h3>
            <span className="text-yellow-200 font-extrabold text-2xl">
              $19.99/
            </span>{" "}
            <span>per month</span>
          </div>
          {/* Table Body */}
          <div className="flex flex-col px-3">
            {tableContent.map((item, index) => (
              <div className="border-b-2 border-gray-300 py-5" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="self-center mt-6">
            <SecondaryButton text="Choose plan" url="" />
          </div>
        </div>
        {/* Second table */}
        <div className="bg-black/10 text-xl w-2/6 pb-8 flex flex-col justify-center  hover:scale-105 duration-300 overflow-hidden z-40 shadow-lg">
          {/* Table Head */}
          <div className="p-10  bg-green-800 text-xl font-mono text-white rounded-t-lg  capitalize ">
            <h3>Starter</h3>
            <span className="text-yellow-200 font-extrabold text-2xl">
              $19.99/
            </span>{" "}
            <span>per month</span>
          </div>
          {/* Table Body */}
          <div className="flex flex-col px-3">
            {tableContent.map((item, index) => (
              <div className="border-b-2 border-gray-300 py-5" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="self-center mt-6">
            <PrimaryButton text="Choose plan" url="" />
          </div>
        </div>
        {/* Third table */}
        <div className="bg-black/10 w-2/6 pb-8 flex shadow-lg flex-col justify-center hover:scale-105 duration-300  overflow-hidden">
          {/* Table Head */}
          <div className="p-10  bg-yellow-800 text-xl font-mono text-white rounded-t-lg  capitalize ">
            <h3>Starter</h3>
            <span className="text-yellow-200 font-extrabold text-2xl">
              $19.99/
            </span>{" "}
            <span>per month</span>
          </div>
          {/* Table Body */}
          <div className="flex flex-col px-3">
            {tableContent.map((item, index) => (
              <div className="border-b-2 border-gray-300 py-5" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="self-center mt-6">
            <SecondaryButton text="Choose plan" url="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceTable
