import Link from "next/link"
import React from "react"
type buttonSecondary = {
  text: string
  url: ""
}
function SecondaryButton(props: buttonSecondary) {
  return (
    <Link
      className="hover:ring-1 hover:ring-pink-600 hover:ring-offset-2 duration-300 rounded px-4 md:text-lg text-sm py-2 capitalize bg-pink-600 text-white"
      href={props.url}
    >
      {props.text}
    </Link>
  )
}

export default SecondaryButton
