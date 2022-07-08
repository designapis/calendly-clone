import {ClockIcon} from '@heroicons/react/outline'
import {parse, format, differenceInMinutes} from 'date-fns'
import {useQuery} from 'react-query'
import {useParams} from 'react-router-dom'
import {ReservationsApi, Reservation, Event, EventsApi, Configuration} from './generated-og'
import {A} from './UI'

const resApi = new ReservationsApi(new Configuration({ basePath: '/api'}))
const eventsApi = new EventsApi(new Configuration({ basePath: '/api'}))

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
  const { id } = useParams()

  const {isLoading, data: reservation, isError, error} = useQuery<Reservation|null>(['reservation', id], async ({queryKey}) => {
    const resId = parseInt(queryKey[1] + '')
    return resApi.getReservationsByID(resId).then(res => {
      console.log("res", res)
      return res.data
    })
  }, {retry: 2})

  const {data: eventData, isLoading: eventIsLoading} = useQuery(['event', reservation?.eventId], async ({queryKey}) => {
    const id = queryKey[1] as number
    const {data} = await eventsApi.getEventById(id)
    return data
  }, {
    enabled: typeof reservation?.eventId === 'number'
  }) 

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if(isError) {
    return (
      <div>
	{(error as any).message}
      </div>
    )
  }

  if(!reservation) {
    return (
      <div>
	Unable to load reservation
      </div>
    )
  }


  const {name, email, startDateTime, endDateTime} = reservation
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)
  const actualDuration = differenceInMinutes(end, start)


  return (
    <div className="mt-16 w-[600px] m-auto" >
      <h1 className="text-xl" > {eventIsLoading ? 'Loading...' : (eventData?.title) ? eventData.title : '<Unknown>'} </h1>
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
	{name} -- <A className="text-blue-600 " href={'mailto:' + email}>{email}</A> 
      </div>

    </div>
  )
}
