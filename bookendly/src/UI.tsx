import {Link, LinkProps} from 'react-router-dom'
export function A({className, ...rest}: LinkProps) {
  let c = `${className} text-blue-800 underline hover:no-underline`
  return (
    <Link className={c} {...rest}/>
  )
}
