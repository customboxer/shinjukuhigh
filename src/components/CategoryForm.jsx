import React, { useEffect } from "react"
import { Disclosure } from "@headlessui/react"
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid"

export default function CategoryForm(props){

  const [update, setUpdate] = React.useState(1);
  useEffect(() => {
    setUpdate(update + 1);
  }, [props.selectedOrNo])

  return(
    <form>
        <Disclosure as="div" key={props.section.id} className="px-4 py-6">
          {({ open }) => (
            <>
              <h3 className="-mx-2 -my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between px-2  text-gray-400">
                  <span className="font-medium text-gray-900 uppercase">
                    {props.section.name}
                    <span className="font-medium text-primary-blue uppercase pl-2">
                      {!!props.selectedOrNo?.length && props.selectedOrNo.length}
                    </span>
                  </span>
                  <span className="ml-6 flex items-center">
                      {
                        open ?
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        :
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      }
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-[25px]">
                <div className="space-y-[4px]">
                  {update && props.section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center ">
                      <input
                        id={`filter-mobile-${props.section.id}-${optionIdx}`}
                        name={`${props.section.id}[]`}
                        checked={props.selectedOrNo?.includes(option.label) }
                        type="checkbox"
                        className="h-[12px] w-[12px] bg-bg-color border-black text-primary-blue focus:ring-0"
                        onChange={ event => {
                          let temp = props.selectedOrNo;
                          if( temp.includes( option.label ) ){
                            temp = temp.filter( ( item ) => item !== option.label );
                          }
                          else{
                            temp.push( option.label );
                          }
                          props.onSelected({
                            id: props.section.id,
                            label: props.section.name,
                            selected: temp
                          });
                        }}
                      />
                      <label
                        htmlFor={`filter-mobile-${props.section.id}-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-500 uppercase"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </form>
  )
}
