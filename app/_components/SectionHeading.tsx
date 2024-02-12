import React from "react"
type sectionHead = {
  title: string
  dec: string
}
function SectionHeading(props: sectionHead) {
  return (
    <div>
      <h1 className="mb-5 text-4xl text-blue-950 font-bold capitalize">
        {props.title}
      </h1>
      <p className="text-black text-lg font-semibold">{props.dec} </p>
    </div>
  )
}

export default SectionHeading
