import {ButtonHTMLAttributes, HTMLProps } from 'react'
import {Link, LinkProps} from 'react-router-dom'
export type COLORS = {
  red: string;
  blue: string;
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof COLORS;
}

const BUTTON_COLORS: COLORS = {
  blue: 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800',
  red: 'bg-red-500 hover:bg-red-600 focus:bg-red-600 active:bg-red-700',
}

export function A({className, ...rest}: LinkProps) {
  let c = `${className} text-blue-800 underline hover:no-underline`
  return (
    <Link className={c} {...rest}/>
  )
}

export function Button({className, color='blue', ...rest}: IButton) {
  let colorClasses = BUTTON_COLORS[color]
  let c = `${className} ${colorClasses} bg-blue-600 disabled:bg-gray-300 disabled:text-gray-800 rounded-md hover:bg-blue-500 px-2.5 py-1.5 text-white`
  return (
    <button className={c} {...rest}/>
  )
}

export function Input({className, ...rest}: React.ComponentPropsWithoutRef<"input">) {
  className = `${className} border border-gray-300 rounded-lg px-2.5 py-1.5`
  return (
    <input className={className} {...rest}/>
  )
}


