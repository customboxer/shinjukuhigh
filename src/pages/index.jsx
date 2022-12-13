import Head from "next/head"

import { Header } from '../components/Header'
import { TimeElement } from "../components/TimeElement"
import { Title } from "../components/Title"
// import Overlay from "../components/Overlay"
import { useState } from "react"

export default function Home() {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>Shinjuku Highschool</title>
        <meta
          name="description"
          content="Shinjuku Highschool"
        />
      </Head>
      <div className="relative bg-bg bg-shadow-color bg-no-repeat bg-cover bg-center min-w-screen min-h-screen w-full z-10 dark:bg-darkbg">
        <div className="top-0 left-0 bg-shadow-color min-w-screen min-h-screen brightness-0 opacity-70 "/>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
          <Header linkClassName="text-neutral-white" iconClassName='fill-neutral-white' buttonClassName="text-neutral-white dark-slate" title={false} darkModeToggleBtn={true} dark={dark} setDark={setDark}/>
          <main>
            <Title/>
            <TimeElement/>
          </main>
        </div>
      </div>
    </div>
  )
}
