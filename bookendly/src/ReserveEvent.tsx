import {useState} from 'react'
import Times from './Times'
import ReserveForm from './ReserveForm'
import Calendar from './Calendar'
export default function ReserveEvent() {
  const [startDate, setStartDate] = useState<Date>(new Date)
  return (
    <div>
      <div className="mt-4" >
	<Calendar startDate={startDate} changeStartDate={setStartDate}/>
	{startDate ? (
	  <Times startDate={startDate} times={['09:00', '10:00', '11:00']} /> 
	) : null }
      </div>
    </div>
    
  )
}

