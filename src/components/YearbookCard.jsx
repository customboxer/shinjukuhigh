import { Fragment } from "react"
import { Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function YearbookCard(props){
  return(
        <div className={classNames(
          props.enabled ? 'translate-w-[216px]' : 'translate-w-[300px]',
          'text-center transition ease-in-out duration-200')}>
          <button onClick={props.onClick}>
            <img src={props.imageUrl} className="object-cover bg-no-repeat h-[400px]" alt={props.id}/>
          </button>
          <p className="pt-[24px] text-[16px] medium-redaction">{props.overline}</p>
          <p className="pt-[4px] text-[14px] text-shinjuku-profile-title">{props.title}</p>
        </div>
  )
}
