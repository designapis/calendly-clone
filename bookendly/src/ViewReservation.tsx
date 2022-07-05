import {Reservation, Event} from './generated-og'
import {ClockIcon} from '@heroicons/react/outline'
import {parse, format, differenceInMinutes} from 'date-fns'
import {A} from './UI'

const exampleReservation: Reservation = {
  name: 'Josh',
  email: 'josh@example.com',
  startDateTime: (new Date(2022, 1, 1, 8)).toUTCString(),
  endDateTime: (new Date(2022, 1, 1, 9)).toUTCString(),
  eventId: 0,
  id: 0,
  localTz: 'Africa/Johannesburg',
}
const exampleEvent: Event = {
  eventTz: 'Africa/Joahannesburg',
  timeRanges: [{dayOfWeek: 'mon', endTime: '18:00', startTime: '10:00'}],
  id: 0,
  slotDuration: 60,
  title: 'Coffee time!!',
}

export default function ViewReservation() {
  const {eventId, name, email, startDateTime, endDateTime} = exampleReservation
  const {title} = exampleEvent
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)
  const actualDuration = differenceInMinutes(end, start)

  return (
    <div className="mt-16 w-[600px] m-auto" >
      <h1 className="text-xl" > {title} </h1>
      <div className="flex items-center space-x-5" >

	<div>
	  {format(start, 'do eeee MMM yyyy')}
	</div>

	<b className="" >
	  {format(start, 'HH:mm')} - {format(end, 'HH:mm')}
	</b>


	<div className="flex items-center" >
	  {actualDuration}min
	  <ClockIcon className="inline-block h-5 w-5 text-gray-600" />
	</div>
      </div>

      <div className=''>
	{name} {'<'} <A className="text-blue-600 " href={'mailto:' + email}>{email}</A> {'>'}
      </div>

    </div>
  )
}
