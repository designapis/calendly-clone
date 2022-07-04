import {useState} from 'react'
import Dropdown from './Dropdown'
import {PlusIcon, TrashIcon} from '@heroicons/react/solid'
import {produce} from 'immer'
import {minuteSteps, formatMinutes} from './utils'
import {Button} from './UI'

interface DayTimeSlot {
  // dayOfWeek: number; // 0 = Sun, 6 = Sat
  startTime: number; // Minutes since midnight. 0 -> 00:00 , 1 -> 00:01, 60 -> 01:00, ...
  endTime: number;
}

interface DayTimeSlots {
  [key: number]: DayTimeSlot[];
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export default function EditEvent() {
  const [eventName, setEventName] = useState('Meeting for coffee')
  const [eventLength, setEventLength] = useState(15)
  const [dayTimeSlots, setDayTimeSlots] = useState<DayTimeSlots>({
    0: [{startTime: 20*15, endTime: 30*15}, {startTime: 35*15, endTime: 40*15}],
    3: [{startTime: 20*15, endTime: 40*15}],
  })

  const onCheckDay = (i: number) => {
    setDayTimeSlots(s => {
      const newState = {...s}
      if(newState[i]) {
	delete newState[i]
      } else {
	newState[i] = [...(newState[i] || []), {startTime: 0, endTime: 0}]
      }
      return newState
    })
  }

  const onAddSlot = (i: number) => {
    setDayTimeSlots(s => {
      const newState = {...s}
      newState[i] = [...(newState[i] || []), {startTime: 0, endTime: 0}]
      return newState
    })
  }

  const onDeleteSlot = (dayIndex: number, slotIndex: number) => {
    setDayTimeSlots(s => {
      if(!s[dayIndex]?.[slotIndex])
        return s
      const newState = {...s}
      const slots = [...newState[dayIndex].slice(0,slotIndex), ...newState[dayIndex].slice(slotIndex + 1)]
      newState[dayIndex] = slots
      return newState
    })
  }

  const onUpdateTimeSlot = (dayIndex: number, slotIndex: number, time: DayTimeSlot) => {
    setDayTimeSlots(produce(draft => {
      if(!draft[dayIndex]) {
	draft[dayIndex] = []
      }
      draft[dayIndex][slotIndex] = time
      return draft
    }))
 }

  return (
    <div className="border-2 border-gray-400 rounded-md p-3" >
      <h2 className="text-2xl" >Edit Event</h2>
      <section className="" >
	<h3 className="text-gray-600" >Event in {timezone} timezone</h3>
	<div>
	  <label htmlFor="eventName">Name of event</label>
	  <input className="border-gray-600 border rounded-md px-2.5 py-1.5" placeholder="Meeting for coffee" name="eventName" type="text" onChange={(e: any) => {setEventName(e.target.value)}} value={eventName} />
	  <Dropdown render={(v) => `${v} min`} values={[15, 30, 60]} value={eventLength} onChange={setEventLength}/>
	</div>

      </section>
      <section className="mt-4" >
	<h3 className="text-gray-600" >Set your availability</h3>
	<div>
	  {daysOfWeek.map((_, i)=> ( 
	    <DaySlot dayIndex={i} onUpdateTimeSlot={onUpdateTimeSlot} onDeleteSlot={onDeleteSlot} onAddSlot={onAddSlot} onCheckDay={onCheckDay} slots={dayTimeSlots[i] || []} key={i}/>
	  ))}

	</div>

      </section>

      <div className="mt-3" >
	<Button>Update Event</Button>
      </div>

      <pre>
	{JSON.stringify({
	  dayTimeSlots,
	  eventName,
	  eventLength,
	}, null, 2)}
      </pre>

    </div>
  )
}

function DaySlot({dayIndex, slots, onCheckDay, onAddSlot, onDeleteSlot, onUpdateTimeSlot}: {dayIndex: number, slots: DayTimeSlot[], onAddSlot: (dayIndex: number) => void; onCheckDay: (dayIndex: number) => void; onDeleteSlot: (dayIndex: number, slotIndex: number) => void; onUpdateTimeSlot: (dayIndex: number, slotIndex: number, time: DayTimeSlot) => void;}) {

  const hasSlots = Boolean(slots.length)
  return (
    <div>
      <input type="checkbox" checked={hasSlots} onChange={() => onCheckDay(dayIndex)}/>
      {daysOfWeek[dayIndex] || 'Unknown'} 
      <button><PlusIcon onClick={() => onAddSlot(dayIndex)} className="text-gray-600 hover:text-gray-500 w-5 h-5" /></button>
      {slots.map((slot, slotIndex) => {
	const {endTime, startTime} = slot
	return (
	  <div key={slotIndex}>
	    <TimeDropdown {...{startTime, endTime, setTime: (s,e) => onUpdateTimeSlot(dayIndex, slotIndex, {startTime: s, endTime: e})}} />
	    <button><TrashIcon onClick={() => onDeleteSlot(dayIndex, slotIndex)} className="text-gray-600 hover:text-gray-500 w-5 h-5" /></button>
	  </div>
	)
      })}
      {hasSlots ? null : (
	<span className="text-gray-500 ml-4" >Unavailable</span>
      )}
    </div>
  )
  
}

const every15min = minuteSteps(15)

function TimeDropdown({
  startTime = 0,
  endTime = 0,
  setTime,
}: {
  startTime: number;
  endTime: number;
  setTime: (startTime: number, endTime: number) => void;
}) {
  return (
    <div className="inline-block" >
      <Dropdown values={every15min} render={(minutes) => formatMinutes(minutes)} value={startTime} onChange={(startTime: number) => setTime(startTime, endTime)}/>
      {' to '}
      <Dropdown values={every15min} render={(minutes) => formatMinutes(minutes)} value={endTime} onChange={(endTime: number) => setTime(startTime, endTime)}/>
    </div>
  
  )
}
