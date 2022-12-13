import React from "react"
import { Transition } from "@headlessui/react";

export default function Roadmap1(props){

  return(
    <Transition
      show={props.isShowing1}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-0"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <button className="absolute left-[850px] bottom-[50px] z-10" onClick={() => {
        props.setIsShowing1(!props.isShowing1)
        props.setIsShowing2(!props.isShowing2)
      }}>
        <img src="/images/rightarrow.svg" alt="rightarrow"/>
      </button>
      <img src="/images/1bg.svg" alt="1bg" className="absolute right-0 w-[300px]"/>
      <div className="absolute">
        <div className="max-w-8xl grid grid-cols-2 mt-[50px]">
          <div>
            <img src="/images/1minting.svg" alt="1minting"/>
            <div className="bg-orange rounded-full mt-[32px] w-[96px] h-[24px] justify-center text-center leading-[20px]">
              <span className="font-bold text-[12px] uppercase">In progress</span>
            </div>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">First Generation of NFTs (500)</h3>
            <p className="text-gray text-[16px] mt-[8px]">Our first collection of dynamic NFTs (dNFT) will feature the first-years of Shinjuku High, a group of unique individuals with a range of abilities and attributes.</p>
            <h3 className="font-bold text-gray text-[16px] uppercase mt-[32px]">Future Generations of NFTs (4500)</h3>
            <p className="text-gray text-[16px] mt-[8px]">The remaining 4500 dNFTs will be released periodically. Each subsequent drop will feature a different set  of characters found in our universe. Existing supporters will have early access to all releases.</p>
          </div>
          <img src="/images/1img.svg" alt="1img" className="bg-cover w-full"/>
        </div>
      </div>
    </Transition>
  )
}