import React from "react"
type sectionTitle = {
  subtitle: string
  headline: string
}
function SectionTitle(props: sectionTitle) {
  return (
    <div>
      <p className="text-blue-800 text-lg capitalize my-3 font-mono">
        {props.subtitle}
      </p>
      <h1 className="text-3xl font-bold mb-12 capitalize text-blue-950">
        {props.headline}
      </h1>
    </div>
  )
}

export default SectionTitle
