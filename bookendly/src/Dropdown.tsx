import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function defaultRender(value: any) {
  return value+''
}

export default function Dropdown({value, onChange, values, render=defaultRender}: {
  value: any;
  values: any[];
  onChange: (value: any) => void;
  render?: (value: any) => string;
}) {
  return (
    <Menu as="div" className="relative inline-block">
      <div>
	<Menu.Button className="inline-flex w-full justify-end rounded-md bg-white bg-opacity-90 px-4 py-2 text-sm font-medium text-gray-800 border-gray-600 border hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
	  {render(value)}
	  <ChevronDownIcon
	    className="ml-2 -mr-1 h-5 w-5 text-gray-800 hover:text-gray-600"
	    aria-hidden="true"
	  />
	</Menu.Button>
      </div>
      <Transition
	as={Fragment}
	enter="transition ease-out duration-100"
	enterFrom="transform opacity-0 scale-95"
	enterTo="transform opacity-100 scale-100"
	leave="transition ease-in duration-75"
	leaveFrom="transform opacity-100 scale-100"
	leaveTo="transform opacity-0 scale-95"
      >
	<Menu.Items className="absolute right-0 mt-2 min-w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
	  <div className="px-1.5 py-1.5">
	    {values.map(item => (
	      <Menu.Item>
		{(({active}) => {
		  let activeClasses = active ? 'bg-blue-200' : ''
		  return (
		    <div onClick={() => onChange(item)} className={`${activeClasses} cursor-pointer mt-1 px-2.5 py-1.5 text-gray-800`} >{render(item)}</div>
		  )
		})}
	      </Menu.Item>
	    ))}
	  </div>
	</Menu.Items>
      </Transition>
    </Menu>
  )
}
