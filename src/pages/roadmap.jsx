import Head from "next/head"
import { useState } from "react"
import { Header } from '../components/Header'
import { FullScreenContainer } from "../components/FullScreenContainer"
import Roadmap1 from "../components/Roadmap1"
import Roadmap2 from "../components/Roadmap2"
import Roadmap3 from "../components/Roadmap3"
import Roadmap4 from "../components/Roadmap4"

export default function Roadmap() {
  const [isShowing1, setIsShowing1] = useState(true)
  const [isShowing2, setIsShowing2] = useState(false)
  const [isShowing3, setIsShowing3] = useState(false)
  const [isShowing4, setIsShowing4] = useState(false)
  return (
    <>
      <Head>
        <title>Shinjuku Highschool - Yearbook</title>
        <meta
          name="description"
          content="Shinjuku Highschool Yearbook"
        />
      </Head>
      <div className="bg-black min-h-screen">
        <Header linkClassName="text-white" iconClassName='fill-white' buttonClassName='text-white border border-white'/>
        <main>
          <FullScreenContainer>
            <Roadmap1 isShowing1={isShowing1} setIsShowing1={setIsShowing1} isShowing2={isShowing2} setIsShowing2={setIsShowing2}/>
            <Roadmap2 isShowing2={isShowing2} setIsShowing2={setIsShowing2} isShowing3={isShowing3} setIsShowing3={setIsShowing3}/>
            <Roadmap3 isShowing3={isShowing3} setIsShowing3={setIsShowing3} isShowing4={isShowing4} setIsShowing4={setIsShowing4}/>
            <Roadmap4 isShowing4={isShowing4} setIsShowing4={setIsShowing4} isShowing1={isShowing1} setIsShowing1={setIsShowing1}/>
          </FullScreenContainer>
        </main>
      </div>
    </>
  )
}