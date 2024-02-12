"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
type link = { title: string; url: string }
const linkList: link[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "" },
  { title: "Services", url: "" },
  { title: "Customer", url: "" },
  { title: "Blog", url: "" },
]
import logo from "@/public/logo.svg"
function Navbar() {
  const [opened, setOpened] = useState(false)
  return (
    <div className="h-full flex items-center gap-x-5 justify-between md:justify-around ">
      {/* Logo */}
      <div className="relative">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>
      {/* Navbar Link */}
      <div className="hidden md:flex md:gap-x-10 ">
        {linkList.map((item, index) => (
          <Link
            className="hover:text-pink-600 duration-300 font-semibold text-lg  capitalize"
            href={item.url}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {/* Buttons */}
      <div className="flex gap-x-5 items-center">
        <Link
          className="hover:ring-1 hover:ring-blue-800 hover:ring-offset-2 duration-300 rounded px-4 md:text-lg text-sm py-2 capitalize bg-blue-800 text-white"
          href=""
        >
          Login
        </Link>
        <Link
          className="hover:ring-1 hover:ring-pink-600 hover:ring-offset-2 duration-300 rounded px-4 md:text-lg text-sm py-2 capitalize bg-pink-600 text-white"
          href=""
        >
          Sign Up
        </Link>
        {/* menuButton */}
        <div
          className="flex flex-col gap-y-1 md:hidden cursor-pointer z-50"
          onClick={() => setOpened(!opened)}
        >
          <div className="w-6 rounded bg-pink-600 h-1"></div>
          <div className="w-6 rounded bg-pink-600 h-1"></div>
          <div className="w-3 rounded bg-pink-600 h-1"></div>
        </div>
        {/* Responsive Menu */}
        {opened && (
          <div className="flex absolute top-0 bottom-0 end-0 start-0 bg-black z-40 text-white justify-center items-center flex-col gap-y-12 text-xl">
            {linkList.map((item, index) => (
              <Link
                onClick={() => setOpened(!opened)}
                href={item.url}
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
