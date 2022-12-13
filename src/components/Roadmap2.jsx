import React from "react"
import { Transition } from "@headlessui/react";

export default function Roadmap2(props){

  return(
    <Transition
      show={props.isShowing2}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-0"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <button className="absolute left-[850px] bottom-[50px] z-10" onClick={() => {
        props.setIsShowing2(!props.isShowing2)
        props.setIsShowing3(!props.isShowing3)
      }}>
        <img src="/images/rightarrow.svg" alt="rightarrow"/>
      </button>
      <img src="/images/2bg.svg" alt="2bg" className="absolute right-0 w-[300px]"/>
      <div className="absolute">
        <div className="max-w-8xl grid grid-cols-2 mt-[50px]">
          <div>
            <img src="/images/2evolution.svg" alt="2evolution"/>
            <div className="bg-blue rounded-full mt-[32px] w-[96px] h-[24px] justify-center text-center leading-[20px]">
              <span className="font-bold text-[12px] uppercase">Exploring</span>
            </div>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">Play a part</h3>
            <p className="text-gray text-[16px] mt-[8px]">Each dNFT will have unique utilities that allow holders to interact with the Shinjuku High universe. Your involvement with the community will shape how your dNFT evolves over time. These utilities will truly allow our community to grow with their characters.</p>
          </div>
          <img src="/images/2img.svg" alt="2img" className="bg-cover w-full"/>
        </div>
      </div>
    </Transition>
  )
}