import { Fragment, useEffect, useState } from "react"
import { Transition } from '@headlessui/react'

import CategoryForm from "./CategoryForm"
import FilterSelection from "./FilterSelection"

const filters = [
  {
    id: 'background',
    name: 'Background',
    options: [
    ],
  },
  {
    id: 'bodyPose',
    name: 'Body Pose',
    options: [
    ],
  },
  {
    id: 'clique',
    name: 'Clique',
    options: [
    ],
  },
  {
    id: 'eyes',
    name: 'Eyes',
    options: [
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'black', label: 'Black', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
    ],
  },
  {
    id: 'clothing',
    name: 'Clothing',
    options: [
    ],
  },
  {
    id: 'eyewear',
    name: 'Eyewear',
    options: [
    ],
  },
  {
    id: 'faceExpression',
    name: 'Face Expression',
    options: [
    ],
  },
  {
    id: 'hair',
    name: 'Hair',
    options: [
      { value: 'short', label: 'Short', checked: false },
    ],
  },
  {
    id: 'headGear',
    name: 'Head Gear',
    options: [
    ],
  },
  {
    id: 'wearables',
    name: 'Wearables',
    options: [
    ],
  },
]

export default function FilterSideBar(props) {

  const onSelected = (value) => {
    let temp = props.filterList;
    temp[ value.id ] = value;
    if( temp[value.id]?.selected?.length === 0 ){
      delete temp[value.id];
    }
    props.setFilterList(temp);
  }

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <div>

        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-200"
          enterFrom="translate-x-0"
          enterTo= "translate-x-0.5"
          leave="transform transition ease-in-out duration-200"
          leaveFrom="translate-x-0.5"
          leaveTo="translate-x-0"
        >
          <div className="flex h-full flex-col w-[300px] shadow-xl bg-bg-color">
            <div className="relative mt-6 flex-1 px-4 sm:px-6">
              {/* Replace with your content */}
              <input
                type="text"
                placeholder="Search by ID..."
                className="mb-[4px] bg-bg-color text-primary-black uppercase placeholder-primary-blue border-transparent focus:border-transparent focus:ring-0"
              />
              {
                filters.map((filter, index) => {
                  return <CategoryForm section={filters[index]} onSelected={onSelected} selectedOrNo={ props.filterList[filters[index].id]?.selected || [] }/>
                })
              }
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition.Root>
  )
}
