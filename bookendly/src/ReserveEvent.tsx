import {useState} from 'react'
import Times from './Times'
import Calendar from './Calendar'
import {Button, Input} from './UI'
import {formatMinutes} from './utils'
import { format } from 'date-fns'

export default function ReserveEvent() {

  const times = [0, 15, 30, 60]
  const duration = 30
  const eventTitle = 'Something coffee'

  const [startDate, setStartDate] = useState<Date|null>(null)
  const [startTime, setStartTime] = useState<number|null>(null) // minutes since midnight
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
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
	      <Calendar startDate={startDate} changeStartDate={setStartDate}/>
	    </div>
	    <div className="flex-1" >
	      {startDate ? (
		<Times setTime={setStartTime} times={times} /> 
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


