import Head from "next/head"

import { Header } from '../components/Header'


export default function Courses() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Shinjuku Highschool - Yearbook</title>
        <meta
          name="description"
          content="Shinjuku Highschool Yearbook"
        />
      </Head>
      <Header linkClassName="text-white" iconClassName='fill-white' buttonClassName='text-white border border-white'/>
      <main>
        <div className="absolute inset-x-0 mx-auto top-1/2 w-[866px]">
          <img src='/images/under_construction.svg' alt="under_construction"/>
        </div>
      </main>
    </div>
  )
}