import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MySwitch(props) {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={props.enabled}
        onChange={props.setEnabled}
        className={classNames(
          props.enabled ? 'bg-primary-blue' : 'bg-transparent',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-black transition-colors duration-200 ease-in-out'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            props.enabled ? 'bg-white translate-x-[22px]' : 'translate-x-[4px] bg-black',
            'translate-y-[3px] pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full shadow ring-2 ring-black transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">{props.text}</span>
      </Switch.Label>
    </Switch.Group>
  )
}