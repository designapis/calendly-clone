import {useState} from 'react'
import {Button} from './UI'
import {formatMinutes} from './utils'
import Time from './Time'

export default function Times({times, setTime}: {
  times: Time[];
  setTime: (time: Time) => void;
}) {
  const [selected, setSelected] = useState<Time|null>()
  return (
    <div>
      <section>
	<h3 className="text-gray-600" >Choose a time</h3>
	<div className="flex flex-col max-h-[600px] overflow-y-auto">
	  {times.map(v => (
	    <div key={v.minutes} className="flex flex-1 space-x-2 mt-2" >
	      <Button onClick={() => setSelected(v)} disabled={selected === v} className="flex-1" >{v.pretty}</Button>
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
