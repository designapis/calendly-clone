import {useState} from 'react'
import Calendar from './Calendar' 
import Times from './Times'
import EditEvent from './EditEvent'
import {useQuery} from 'react-query'
import {Event, EventsApi} from './generated-api'

const eventsApi = new EventsApi({basePath: 'https://httpbin.org/anything'})

function App() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const {data, isLoading, error, isError} = useQuery<Event>('events', async () => {
    const {data} = await eventsApi.getEventById(0)
    return data
  })

  const [startDate, changeStartDate] = useState<Date>()
  return (
    <div className="p-2">
      <header className="text-center mt-2">
	<h2 className="text-blue-500 font-bold text-2xl" > Bookendly </h2>
	<h3>{timezone}</h3>
      </header>

      <div>
	{isLoading ? (
	  <div>Loading...</div>
	) : isError ? (
	  <div>Error: {error+''}</div>
	) : (
	  <pre>{JSON.stringify(data)}</pre>
	)}

      </div>

      <section>
	<Calendar changeStartDate={changeStartDate} startDate={startDate} />
	<Times />

	<EditEvent/>

      </section>

    </div>
  );
}

export default App;
