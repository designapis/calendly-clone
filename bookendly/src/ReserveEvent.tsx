import {useState} from 'react'
import Times from './Times'
import Calendar from './Calendar'
import {Button, Input} from './UI'
import {formatMinutes} from './utils'
import { format, parse } from 'date-fns'
import {Event} from './generated-og'
import {useQuery} from 'react-query'

const exampleEvent: Event = {
  id: 0,
  eventTz: 'Africa/Johannesburg',
  slotDuration: 30,
  title: 'Coffee time!',
  timeRanges: [
    {dayOfWeek: 'mon', startTime: '09:00', endTime: '12:00'},
    {dayOfWeek: 'mon', startTime: '18:00', endTime: '20:00'},
    {dayOfWeek: 'tue', startTime: '09:00', endTime: '12:00'},
  ]
}

function toMinutesSinceMidnight(time: string): number {
  const [hours, minutes] = time.split(':')
  return parseInt(hours) * 60 + parseInt(minutes)
}

const daysOfWeek = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat'
]

function timesForDate(date: Date, event: Event): number[] {

  const daySlots = event.timeRanges.filter(r => {
    return r.dayOfWeek && daysOfWeek.indexOf(r.dayOfWeek) === date.getDay()
  })

  if(!daySlots.length) {
    return []
  }

  let slots = new Set<number>()

  daySlots.forEach(daySlot => {
    const startMin = toMinutesSinceMidnight(daySlot.startTime || '0:0')
    const endMin = toMinutesSinceMidnight(daySlot.endTime || '0:0')

    const numSlots = Math.floor((endMin - startMin) / event.slotDuration)
    for(let i = 0; i < numSlots; i++) {
      slots.add(startMin + (i * event.slotDuration))
    }
  })

  return Array.from(slots)
}

export default function ReserveEvent() {
  const [startDate, setStartDate] = useState<Date|null>(null)
  const [startTime, setStartTime] = useState<number|null>(null) // minutes since midnight
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const {isLoading, data: event} = useQuery<Event>('reservation', async () => {
    return new Promise<Event>((done) => setTimeout(() => {
      done(exampleEvent)
    }, 3000))
  })

  if(isLoading || !event) {
    return (
      <div>
	Loading...
      </div>
    )
    
  }

  const {timeRanges, slotDuration, title} = event

  const times = [0, 15, 30, 60]
  const duration = slotDuration  
  const eventTitle = title

  const cancel = () => {
    setStartDate(null)
    setStartTime(null)
  }

  const selectedDateTime = startDate && startTime !== null
  return (
    <div>
      <div className="mt-4" >

	{!selectedDateTime ? (
	  <div className="flex" >
	    <div className="flex-1" >
	      <Calendar dayEnabled={(d) => !!timesForDate(d, event).length} startDate={startDate} changeStartDate={setStartDate}/>
	    </div>
	    <div className="flex-1" >
	      {startDate ? (
		<Times setTime={setStartTime} times={timesForDate(startDate, event)} /> 
	      ) : null}
	    </div>
	  </div>
	) : (

	  <div>
	    <h2 className="text-xl" > {eventTitle} ({duration}min)</h2>
	    <h3 className="text-gray-600" >Confirm your slot for {formatMinutes(startTime)} to {formatMinutes(startTime + duration)} {format(startDate, 'eeee, eo MMM yyyy')} </h3>
	    <form onSubmit={(e) => e.preventDefault()}>
	      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
	      <Input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name"/>
	      <div className="flex space-x-3" >
		<Button onClick={cancel} className="flex-1" color='red'>Cancel</Button>
		<Button className="flex-1" >Reserve</Button>
	      </div>
	    </form>
	  </div>
	)}
      </div>

      <pre>
	{JSON.stringify({
	  startDate,
	  startTime,
	  email,
	  fullName,
	}, null, 2)}
      </pre>
    </div>
    
  )
}


