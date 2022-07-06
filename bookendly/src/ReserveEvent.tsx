import {useState} from 'react'
import Times from './Times'
import Calendar from './Calendar'
import {Button, Input} from './UI'
import { format, parse } from 'date-fns'
import Time from './Time'
import {Event} from './generated-og'
import {useQuery} from 'react-query'
import {EventsApi, Configuration} from './generated-og'
const eventsApi = new EventsApi(new Configuration({basePath: '/api'}))

// const exampleEvent: Event = {
//   id: 0,
//   eventTz: 'Africa/Johannesburg',
//   slotDuration: 30,
//   title: 'Coffee time!',
//   timeRanges: [
//     {dayOfWeek: 'mon', startTime: '09:00', endTime: '12:00'},
//     {dayOfWeek: 'mon', startTime: '18:00', endTime: '20:00'},
//     {dayOfWeek: 'tue', startTime: '09:00', endTime: '12:00'},
//   ]
// }

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

function timesForDate(date: Date, event: Event): Time[] {

  const daySlots = event.timeRanges.filter(r => {
    return r.dayOfWeek && daysOfWeek.indexOf(r.dayOfWeek) === date.getDay()
  })

  if(!daySlots.length) {
    return []
  }

  let slots: Time[] = []

  daySlots.forEach(daySlot => {
    const startTime = new Time(daySlot.startTime || '0:0')
    const endTime = new Time(daySlot.endTime || '0:0')
    slots = [...slots, ...startTime.stepsUntil(endTime, event.slotDuration)]
  })

  return slots
}

export default function ReserveEvent() {
  const [startDate, setStartDate] = useState<Date|null>(null)
  const [startTime, setStartTime] = useState<Time|null>(null) // minutes since midnight
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const {isLoading, data: event} = useQuery<Event>('event', async () => {
    const res = await eventsApi.getEventById(0)
    const {data} = res
    return data
  })

  if(isLoading || !event) {
    return (
      <div>
	Loading...
      </div>
    )
    
  }

  const {timeRanges, slotDuration, title} = event

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

	<h2>{eventTitle}</h2>

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
	    <h3 className="text-gray-600" >Confirm your slot for {startTime.pretty} to {new Time(startTime.minutes + duration).pretty} {format(startDate, 'eeee, do MMM yyyy')} </h3>
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
	  startTime: startTime+'',
	  email,
	  fullName,
	}, null, 2)}
      </pre>
    </div>
    
  )
}


