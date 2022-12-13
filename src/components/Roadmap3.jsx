import React from "react"
import { Transition } from "@headlessui/react";

export default function Roadmap3(props){

  return(
    <Transition
      show={props.isShowing3}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-0"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <button className="absolute left-[850px] bottom-[50px] z-10" onClick={() => {
        props.setIsShowing3(!props.isShowing3)
        props.setIsShowing4(!props.isShowing4)
      }}>
        <img src="/images/rightarrow.svg" alt="rightarrow"/>
      </button>
      <img src="/images/3bg.svg" alt="3bg" className="absolute right-0 w-[300px]"/>
      <div className="absolute">
        <div className="max-w-8xl grid grid-cols-2 mt-[50px]">
          <div>
            <img src="/images/3manga.svg" alt="3manga"/>
            <div className="bg-orange rounded-full mt-[32px] w-[96px] h-[24px] justify-center text-center leading-[20px]">
              <span className="font-bold text-[12px] uppercase">In progress</span>
            </div>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">Bridge the Divide</h3>
            <p className="text-gray text-[16px] mt-[8px]">Read the story of the Shinjuku High class that saves Japan from doom, and maybe see cameos from your own NFTs. Dive into our metaverse in a tactile way that will take you back to the early days of reading volumes of manga in the Barnes and Nobles aisle.</p>
          </div>
          <img src="/images/3img.svg" alt="3img" className="bg-cover w-full"/>
        </div>
      </div>
    </Transition>
  )
}