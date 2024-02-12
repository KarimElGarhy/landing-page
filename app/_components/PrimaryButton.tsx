import Link from "next/link"
import React from "react"
type buttonPrimary = {
  text: string
  url: ""
}
function PrimaryButton(props: buttonPrimary) {
  return (
    <Link
      className="hover:ring-1 hover:ring-blue-800 hover:ring-offset-2 duration-300 rounded px-4 md:text-lg text-sm py-2 capitalize bg-blue-800 text-white"
      href={props.url}
    >
      {props.text}
    </Link>
  )
}

export default PrimaryButton
