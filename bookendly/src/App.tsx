import { Routes, Route } from "react-router-dom";
import {Link} from './UI'
import ViewReservation from './ViewReservation'
import ReserveEvent from './ReserveEvent'
import EditEvent from './EditEvent'
// import {useQuery} from 'react-query'
// import {Event, EventsApi, Configuration} from './generated-og'
// const eventsApi = new EventsApi(new Configuration({basePath: 'https://httpbin.org/anything'}))

function App() {

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className="p-2">

      <header className="text-center mt-2">
	<h2 className="text-blue-500 font-bold text-2xl" > Bookendly </h2>
	<h3>{timezone}</h3>
	<div className="flex space-x-2 justify-center" >
	  <Link to='/'> Edit Event </Link>
	  <Link to='/events/0'> Reserve slot </Link>
	  <Link to='/reservations'> Reservations </Link>
	  <Link to='/reservations/0'> View reservation </Link>
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
	  <div>
	    <ViewReservation />
	  </div>
	</div>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
