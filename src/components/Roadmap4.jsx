import React from "react"
import { Transition } from "@headlessui/react";

export default function Roadmap4(props){

  return(
    <Transition
      show={props.isShowing4}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-0"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <button className="absolute left-[850px] bottom-[50px] z-10" onClick={() => {
        props.setIsShowing4(!props.isShowing4)
        props.setIsShowing1(!props.isShowing1)
      }}>
        <img src="/images/rightarrow.svg" alt="rightarrow"/>
      </button>
      <img src="/images/4bg.svg" alt="4bg" className="absolute right-0 w-[300px]"/>
      <div className="absolute">
        <div className="max-w-8xl grid grid-cols-2 mt-[50px]">
          <div>
            <img src="/images/4inreallife.svg" alt="4inreallife"/>
            <div className="bg-blue rounded-full mt-[32px] w-[96px] h-[24px] justify-center text-center leading-[20px]">
              <span className="font-bold text-[12px] uppercase">Exploring</span>
            </div>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">Fashion</h3>
            <p className="text-gray text-[16px] mt-[8px]">Get dripped out with iconic fashion items from the Shinjuku High universe.</p>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">Collectables</h3>
            <p className="text-gray text-[16px] mt-[8px]">Show off your involvement with our community by obtaining physical copies of some of our most popular items in the Shinjuku High world.</p>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">Events/Pop ups</h3>
            <p className="text-gray text-[16px] mt-[8px]">Anime and NFT communities exist around the world and we plan on participating in various gatherings for our supporters.</p>
          </div>
          <img src="/images/4img.svg" alt="4img" className="bg-cover w-full"/>
        </div>
      </div>
    </Transition>
  )
}