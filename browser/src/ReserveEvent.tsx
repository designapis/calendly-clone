import {useState, useCallback} from 'react'
import Times from './Times'
import Calendar from './Calendar'
import {Button, Input, Link} from './UI'
import { format, parse } from 'date-fns'
import Time from './Time'
import {Event} from './generated-og'
import {useQuery, useMutation} from 'react-query'

import {EventsApi, Configuration, ReservationsApi, Reservation} from './generated-og'
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

const resApi = new ReservationsApi(new Configuration({ basePath: '/api'}))

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
  const [fullName, setFullName] = useState('Bob Example')
  const [email, setEmail] = useState('bob@example.com')

  const {mutate: reserveEvent, isLoading: isReserving, data: resResponseData, isSuccess, isError: reserveIsError, error: reserveError } = useMutation(async () => {
    if(!startDate || !startTime) {
      console.error('Missing startDate or startTime')
      throw new Error('Missing startDate or startTime')
    }

    const time = new Time(startTime)
    const startDateTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())
    startDateTime.setHours(time.hours)
    startDateTime.setMinutes(time.min)
    const endDateTime = new Date(startDateTime)
    endDateTime.setMinutes(startDateTime.getMinutes() + slotDuration)

    const {data} = await resApi.reserveEvent({
      email,
      name: fullName,
      eventId: 0,
      id: 0,
      localTz: 'a/b',
      startDateTime: startDateTime.toISOString(),
      endDateTime: endDateTime.toISOString(),
    })

    return data
  })

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


  const {slotDuration, title} = event

  const duration = slotDuration  
  const eventTitle = title

  const cancel = () => {
    setStartDate(null)
    setStartTime(null)
  }

  const selectedDateTime = startDate && startTime !== null

  if(isSuccess) {
    const {id} = resResponseData
    return (
      <div>
	<p> Successfully reserved your slot! </p>
	<Link to={`/reservations/${id}`}> View reservation </Link>
      </div>
    )
  }

  if(reserveIsError) {
    const err: any = (reserveError as any)?.response.data 
    return (
      <div>
	<h3>Error reserving</h3>
	<p>{JSON.stringify(err, null, 2)}</p>
      </div>
    )
  }


  return (
    <div>
      <div className="mt-4" >

	<h2 className="text-xl" > {eventTitle} ({duration}min)</h2>

	<div className="mt-2" >

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
	      <h3 className="text-gray-600" >Confirm your slot for {startTime.pretty} to {new Time(startTime.minutes + duration).pretty} {format(startDate, 'eeee, do MMM yyyy')} </h3>
	      <form className="mt-2"  onSubmit={(e) => e.preventDefault()}>
		<Input className=""  type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
		<Input className="ml-2" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name"/>
		<div className="flex mt-2 space-x-3" >
		  <Button onClick={cancel} className="flex-1" color='red'>Cancel</Button>
		  <Button disabled={isReserving} onClick={() => reserveEvent()} className="flex-1" >Reserve</Button>
		</div>
	      </form>
	    </div>
	  )}


	</div>
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


