import Head from "next/head"

import { Header } from '../components/Header'
import { FullScreenContainer } from "../components/FullScreenContainer"
import MySwitch from "../components/MySwitch"
import YearbookCard from "../components/YearbookCard"
import { useState } from "react"
import ProfileCard from "../components/ProfileCard"
import FilterSideBar from "../components/FilterSideBar"
import FilterSelection from "../components/FilterSelection"

const DATA = [
  {
    id: "1",
    overline: "Overline",
    title: "TITLE",
    imageUrl: 'images/afoxx_profile.png',
    studentID: "001",
    background: "LETTERING",
    eyewear: "NONE",
    bodyPose: "LEANING TO THE SIDE",
    faceExpression: "SIDE EYE",
    clique: "TRENDSETTER",
    hair: "BROWN",
    clothing: "FLORAL DRESS",
    headgear: "EARPIECES",
    eyes: "GREEN",
    wearables: "CHANEL",
  },
  {
    id: "2",
    overline: "Overline",
    title: "TITLE",
    imageUrl: 'images/hina_profile.png',
    studentID: "002",
    background: "LETTERING",
    eyewear: "NONE",
    bodyPose: "LEANING TO THE SIDE",
    faceExpression: "SIDE EYE",
    clique: "TRENDSETTER",
    hair: "BROWN",
    clothing: "FLORAL DRESS",
    headgear: "EARPIECES",
    eyes: "GREEN",
    wearables: "CHANEL",
  },
  {
    id: "3",
    overline: "Overline",
    title: "TITLE",
    imageUrl: 'images/mike_profile.png',
    studentID: "003",
    background: "LETTERING",
    eyewear: "NONE",
    bodyPose: "LEANING TO THE SIDE",
    faceExpression: "SIDE EYE",
    clique: "TRENDSETTER",
    hair: "BROWN",
    clothing: "FLORAL DRESS",
    headgear: "EARPIECES",
    eyes: "GREEN",
    wearables: "CHANEL",
  },
  {
    id: "4",
    overline: "Overline",
    title: "TITLE",
    imageUrl: 'images/dom_profile.png',
    studentID: "004",
    background: "LETTERING",
    eyewear: "NONE",
    bodyPose: "LEANING TO THE SIDE",
    faceExpression: "SIDE EYE",
    clique: "TRENDSETTER",
    hair: "BROWN",
    clothing: "FLORAL DRESS",
    headgear: "EARPIECES",
    eyes: "GREEN",
    wearables: "CHANEL",
  }
]

export default function Yearbook() {

  const [enabled, setEnabled] = useState(false)

  const [filterList, setFilterList] = useState([]);
  const [count, setCount] = useState(0);

  const [cardState, setCardState] = useState(false)
  const [cardImage, setCardImage] = useState("")
  const [cardID, setCardID] = useState("")
  const [cardBackground, setCardBackground] = useState("")
  const [cardEyewear, setCardEyewear] = useState("")
  const [cardBodyPose, setCardBodyPose] = useState("")
  const [cardFaceExpression, setCardFaceExpression] = useState("")
  const [cardClique, setCardClique] = useState("")
  const [cardHair, setCardHair] = useState("")
  const [cardClothing, setCardClothing] = useState("")
  const [cardHeadgear, setCardHeadgear] = useState("")
  const [cardEyes, setCardEyes] = useState("")
  const [cardWearables, setCardWearables] = useState("")


  const onClearBtnClick = () =>{
    setFilterList([])
    setCount(0)
  }

  const onClickCardImage = (data) =>{
    setCardState(true)
    setCardImage(data.imageUrl)
    setCardID(data.studentID)
    setCardBackground(data.background)
    setCardEyewear(data.eyewear)
    setCardBodyPose(data.bodyPose)
    setCardFaceExpression(data.faceExpression)
    setCardClique(data.clique)
    setCardHair(data.hair)
    setCardClothing(data.clothing)
    setCardHeadgear(data.headgear)
    setCardEyes(data.eyes)
    setCardWearables(data.wearables)
  }

  const cards = DATA.map((data) =>
    <YearbookCard onClick={()=>{onClickCardImage(data)}} id={data.id} enabled={enabled} overline={data.overline} title={data.title} imageUrl={data.imageUrl}/>
  )

  const deleteFromFilterList = (id, name) => {
    let temp = filterList;
    if( !!temp[id] ){
      temp[id].selected = temp[id].selected.filter( (item) => item !== name );
    }
    setFilterList(temp);
    setCount(count + 1);
  }

  return (
    <div className="bg-bg-color">
      <Head>
        <title>Shinjuku Highschool - Yearbook</title>
        <meta
          name="description"
          content="Shinjuku Highschool Yearbook"
        />
      </Head>
      <Header linkClassName="text-primary-black" iconClassName='fill-primary-black' buttonClassName='text-primary-black border border-black'/>
      <main>
        <FullScreenContainer>
          <div className="text-center mt-20">
            {/*Title*/}
            <h2 className="shinjuku-primary-black text-shinjuku-school-header medium-redaction">
              Yearbook
            </h2>
            {/*Subtitle*/}
            <div className="flex items-center justify-center mt-12">
              <p className="shinjuku-primary-black text-shinjuku-content w-[624px]">
                Meet the class of 2022, the first minted group of unique characters. Find the one that speaks to you and take them on a journey within the Shinjuku High metaverse.
              </p>
            </div>
          </div>
          {/*Filters*/}
          <div className="border-black border-[1px] mt-20 mb-3"/>
          <div className="justify-between flex ml-12 mr-12">
            {/*Filter switch*/}
            <MySwitch text="VIEW FILTERS" enabled={enabled} setEnabled={setEnabled}/>

            {/*Selected Filters*/}
            <div className="grid grid-cols-9 flex gap-[4px] max-w-fit">

              {
                count > 0 && Object.values(filterList).map((filter) => {
                    return (
                      <>
                        {
                          filter.selected.map( (selected) => {
                            return <FilterSelection
                              filter={`${filter.label}: ` + selected}
                              onDelete={() => {
                                deleteFromFilterList( filter.id, selected );
                              }}
                            />
                          })
                        }
                      </>
                    )
                })
              }

              {count > 0 && (
                <button onClick={onClearBtnClick} className="flex justify-center rounded-full border-2 border-black h-[24px] w-[68px] items-center ">
                  <span className="text-sm">Clear all</span>
                </button>
              )}
            </div>

            {/*Count*/}
            <span>ALUMNIS</span>
          </div>

          <div className="border-black border-[1px] mt-3"/>
          <div className="flex flex-row mt-[48px]">
            {/* Filter SideBar*/}
            <FilterSideBar
              open={enabled}
              setOpen={setEnabled}
              filterList={filterList}
              setFilterList={(filters) => {
                setFilterList(filters);
                setCount(count + 1);
              }}
            />
            {/*Cards Grid*/}
            <div className="grid grid-cols-4 gap-4 pl-[48px]">
              {/*Card*/}
              {cards}
              {cards}
              {cards}
            </div>
          </div>
          <ProfileCard open={cardState} setOpen={setCardState} imageUrl={cardImage} studentID={cardID} cardBackground={cardBackground}
                       cardEyewear={cardEyewear} cardBodyPose={cardBodyPose} cardFaceExpression={cardFaceExpression} cardClique={cardClique}
                       cardHair={cardHair} cardClothing={cardClothing} cardHeadgear={cardHeadgear} cardEyes={cardEyes} cardWearables={cardWearables}/>
        </FullScreenContainer>
      </main>
    </div>
  )
}
