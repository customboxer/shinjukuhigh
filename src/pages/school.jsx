import Head from "next/head"

import { Header } from "../components/Header"
import { FullScreenContainer } from "../components/FullScreenContainer"

export default function School() {
  return (
    <div className="bg-bg-color">
      <Head>
        <title>Shinjuku Highschool - School </title>
        <meta name="description" content="Shinjuku Highschool Yearbook" />
      </Head>
      <Header
        linkClassName="text-primary-black"
        iconClassName="fill-primary-black"
        buttonClassName="text-primary-black border border-black"
      />
      <FullScreenContainer className="">
        <h2 className="shinjuku-primary-black text-shinjuku-school-header text-center medium-redaction">
          School
        </h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-shinjuku-content shinjuku-primary-black text-center mt-10 w-[624px]">
              We are a new generation of creatives redefining how we build and
              interact with metaverses. Our community unites creatives, anime
              fans, urban fashion enthusiasts, and blockchain technology under
              one roof. That’s right; no gatekeeping, no hurdles, no
              limitations.
            </p>
            <p className="text-shinjuku-content text-center mt-3 w-[624px]">
              Shinjuku High’s collection of dynamic NFTs, forged on the Internet
              Computer blockchain, is carefully designed so that you can make
              your own voices heard by developing unique stories and
              personalities for minted characters. Your NFT serves not only as
              your personal avatar in our metaverse, but also as a membership
              pass to IP exclusives.
            </p>
          </div>
        </div>
        <img className="mt-20 text-center mx-auto" src="/images/school.gif" />
        <div className="mt-40">
          <p className="text-center text-shinjuku-school-quote shinjuku-primary-blue low-redaction">
            Let’s bridge the gap between the
            <span className="high-redaction"> imagination </span> and the real
          </p>
        </div>
        <div className="border-black border-[1px] mt-40"/>
        <div className="mt-40">
          <h2 className="text-shinjuku-school-header medium-redaction text-center">
            Meet the Taishou
          </h2>
          <p className="text-shinjuku-content mt-6 text-center shinjuku-primary-black ">
            A vision shared by many around the world
          </p>
        </div>
        <div class="grid grid-cols-4 gap-12 mt-20 h-[439px]">
          <div className="w-[264px] h-[351px] justify-self-center mx-auto">
            <img src="/images/afoxx_profile.png" className="w-100" />
            <p className="mt-6 text-center medium-redaction text-shinjuku-profile-title">
              Founder
            </p>
            <p className="mt-1 uppercase text-center text-shinjuku-profile-name">
              Afoxx
            </p>
          </div>
          <div className="w-[264px] h-[351px] justify-self-center">
            <img src="/images/mike_profile.png" className="w-100" />
            <p className="mt-6 text-center medium-redaction text-shinjuku-profile-title">
              Creative Director
            </p>
            <p className="mt-1 uppercase text-center text-shinjuku-profile-name">
              Mike
            </p>
          </div>
          <div className="w-[264px] h-[351px] justify-self-center">
            <img src="/images/dom_profile.png" className="w-100" />
            <p className="mt-6 text-center medium-redaction text-shinjuku-profile-title">
              Community Manager
            </p>
            <p className="mt-1 uppercase text-center text-shinjuku-profile-name">
              Dom
            </p>
          </div>
          <div className="w-[264px] h-[351px] justify-self-center">
            <img src="/images/empty_profile.png" className="w-100" />
            <p className="mt-6 text-center medium-redaction text-shinjuku-profile-title">
              Role
            </p>
            <p className="mt-1 uppercase text-center text-shinjuku-profile-name">
              Name
            </p>
          </div>
        </div>
        <div className="border-black border-[1px] mt-40"/>
        <div className="mt-[152px] h-[640px] flex flex-row gap-[120px]">
          <div className="ml-60 w-[480px]">
            <h3 className="mt-[94px] text-shinjuku-school-subheader shinjuku-primary-black medium-redaction">
              Community
            </h3>
            <p className="mt-6 text-shinjuku-content shinjuku-primary-black">
              Each and every one of you comes first. Our community is the life
              blood of Shinjuku High, and so we are committed to maintaining you
              as our top priority. We will maintain transparency throughout
              every step of the project. You can expect regular updates and
              correspondence through our social media accounts, emails, and
              Discord announcements.
            </p>
            <h3 className="mt-20 text-shinjuku-school-subheader shinjuku-primary-black medium-redaction">
              Revolution
            </h3>
            <p className="mt-6 text-shinjuku-content shinjuku-primary-black">
              No one ever broke ground by copying the same old trend. Would that
              be easy? Sure. But we are not in this for an easy piece of the
              pie. We want to change the way we approach the metaverse. We
              encourage outside the box thinking from our creators and
              supporters. After all, true innovation requires a leap of faith.
            </p>
          </div>
          <div className="">
            <img src='/images/values.svg'/>
          </div>
        </div>
        <div className="mt-[120px]">
          <img src="/images/school_image.png" className="h-[900px]" />
        </div>
      </FullScreenContainer>
    </div>
  )
}
