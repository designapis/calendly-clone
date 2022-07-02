import {useState} from 'react'
import Dropdown from './Dropdown'
import {PlusIcon, TrashIcon} from '@heroicons/react/solid'

export default function EditEvent() {
  const [eventName, setEventName] = useState('Meeting for coffee')
  const [eventLength, setEventLength] = useState(15)
  // const [dayTimeSlots, setDayTimeSlots] = useState([])

  const values = ['09:00am', '09:15am', '09:30am']
  return (
    <div className="border-2 border-gray-400 rounded-md p-3" >
      <h2 className="text-2xl" >Edit Event</h2>
      <section className="" >
	<h3 className="text-gray-600" >Event</h3>
	<div>
	  <label htmlFor="eventName">Name of event</label>
	  <input className="border-gray-600 border rounded-md px-2.5 py-1.5" placeholder="Meeting for coffee" name="eventName" type="text" onChange={(e: any) => {setEventName(e.target.value)}} value={eventName} />
	  <Dropdown render={(v) => `${v} min`} values={[15, 30, 60]} value={eventLength} onChange={setEventLength}/>
	</div>

      </section>
      <section className="mt-4" >
	<h3 className="text-gray-600" >Set your weekly hours</h3>
	<div>
	  <div>
	    <input type="checkbox" />
	    <DayTimes values={values} />
	    <button><TrashIcon className="text-gray-600 hover:text-gray-500 w-5 h-5" /></button>
	    <button><PlusIcon className="text-gray-600 hover:text-gray-500 w-5 h-5" /></button>
	  </div>
	</div>

      </section>

    </div>
  )
}

function DayTimes({values}: {
  values: string[];
}) {
  const [startTime, setStartTime] = useState(values[0] || '???')
  const [endTime, setEndTime] = useState(values[1] || values[0])
  return (
    <div className="inline-block" >
      <Dropdown values={values} value={startTime} onChange={setStartTime}/>
      {' to '}
      <Dropdown values={values} value={endTime} onChange={setEndTime}/>
    </div>
  
  )
}
