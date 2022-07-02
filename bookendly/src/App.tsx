import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import {A} from './UI'
import ReserveEvent from './ReserveEvent'
import EditEvent from './EditEvent'
import {useQuery} from 'react-query'
import {Event, EventsApi, Configuration} from './generated-og'

const eventsApi = new EventsApi(new Configuration({basePath: 'https://httpbin.org/anything'}))

function App() {

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // const {data, isLoading, error, isError} = useQuery<Event>('events', async () => {
  //   const {data} = await eventsApi.getEventById(0)
  //   return data
  // })

  const [startDate, changeStartDate] = useState<Date>()
  return (
    <div className="p-2">

      <header className="text-center mt-2">
	<h2 className="text-blue-500 font-bold text-2xl" > Bookendly </h2>
	<h3>{timezone}</h3>
	<div className="flex space-x-2 justify-center" >
	  <A to='/'> Edit Event </A>
	  <A to='/events/0'> Reserve slot </A>
	  <A to='/reservations'> Reservations </A>
	  <A to='/reservations/0'> View reservation </A>
	</div>
      </header>

      <Routes>
	<Route path='/' element={<div>
	  <EditEvent/>
	</div>}> </Route>

	<Route path='/events/:id' element={<div>
	  <ReserveEvent />
	</div>}> </Route>

	<Route path='/reservations' element={<div>
	  <span>List of reservations</span>
	</div>}> </Route>

	<Route path='/reservations/:id' element={<div>
	  <span>View reservation</span>
	</div>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
