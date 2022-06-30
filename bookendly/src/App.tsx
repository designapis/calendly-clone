import {useState} from 'react'
import Calendar from './Calendar' 
import Times from './Times'

function App() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [startDate, changeStartDate] = useState<Date>()
  return (
    <div className="">
      <header className="text-center mt-2">
	<h2 className="text-blue-500 font-bold text-2xl" > Bookendly </h2>
	<h3>{timezone}</h3>
      </header>

      <section>
	<Calendar changeStartDate={changeStartDate} startDate={startDate} />
	<Times />
      </section>

    </div>
  );
}

export default App;
