import {useState} from 'react'
import {Button} from './UI'
import {formatMinutes} from './utils'
export default function Times({times, setTime}: {
  times: number[];
  setTime: (minutes: number) => void;
}) {
  const [selected, setSelected] = useState<number|null>()
  return (
    <div>
      <section>
	<h3 className="text-gray-600" >Choose a time</h3>
	<div className="flex flex-col">
	  {times.map(v => (
	    <div className="flex flex-1 space-x-2 mt-2" >
	      <Button onClick={() => setSelected(v)} disabled={selected === v} className="flex-1" >{formatMinutes(v)}</Button>
	      {selected === v ? (
		<Button onClick={() => setTime(v)} className="flex-1" >Confirm</Button>
	      ) : null}
	    </div>
	  ))}
	</div>
      </section>
    </div>
  )
}
