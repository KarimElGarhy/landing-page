import React from "react"
import ServicesCard from "../ServicesCard"
import allMedia from "../../_lib/images"
import SectionTitle from "../SectionTitle"
function Services() {
  return (
    <div className="text-center">
      <SectionTitle
        subtitle="Ideal solution for you"
        headline="Explore ultimate features"
      />

      {/* Cards */}
      <div className="grid grid-cols-3 gap-8 content-center text-center">
        <ServicesCard
          link=""
          imageLink={allMedia.emilSub}
          headLine="Email Subscription"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates fugiat eius. Esse debitis vel iure molestiae enim mollitia recusandae voluptatem, consequuntur quod nobis cupiditate amet id alias consectetur sunt."
        />
        <ServicesCard
          link=""
          imageLink={allMedia.manger}
          headLine="Email Subscription"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates fugiat eius. Esse debitis vel iure molestiae enim mollitia recusandae voluptatem, consequuntur quod nobis cupiditate amet id alias consectetur sunt."
        />
        <ServicesCard
          link=""
          imageLink={allMedia.windows}
          headLine="Email Subscription"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates fugiat eius. Esse debitis vel iure molestiae enim mollitia recusandae voluptatem, consequuntur quod nobis cupiditate amet id alias consectetur sunt."
        />
        <ServicesCard
          link=""
          imageLink={allMedia.online}
          headLine="Email Subscription"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates fugiat eius. Esse debitis vel iure molestiae enim mollitia recusandae voluptatem, consequuntur quod nobis cupiditate amet id alias consectetur sunt."
        />
        <ServicesCard
          link=""
          imageLink={allMedia.browser}
          headLine="Email Subscription"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates fugiat eius. Esse debitis vel iure molestiae enim mollitia recusandae voluptatem, consequuntur quod nobis cupiditate amet id alias consectetur sunt."
        />
        <ServicesCard
          link=""
          imageLink={allMedia.group}
          headLine="Email Subscription"
          dec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates fugiat eius. Esse debitis vel iure molestiae enim mollitia recusandae voluptatem, consequuntur quod nobis cupiditate amet id alias consectetur sunt."
        />
      </div>
    </div>
  )
}

export default Services
