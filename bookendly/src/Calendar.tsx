import { useState } from 'react'
import ReactCalendar, {CalendarProps} from 'react-calendar'
import './Calendar.css'

enum DayOfWeek {
  sun = 0,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat
}

export default function Calendar({
  startDate,
  changeStartDate
}: {
  startDate?: Date;
  changeStartDate: (d: Date) => void;
}) {

  const tileDisabled = ({date}: {date: Date}): boolean => {
    return date.getDay() === DayOfWeek.tue
  }

  return (
    <div>
      <ReactCalendar onChange={changeStartDate} value={startDate}
	tileDisabled={tileDisabled}
      />

      <div className="mt-4" >
	{startDate ? (
	  <h3 className="font-red-600 font-bold">
	    Date selected: {startDate.toLocaleDateString()}
	  </h3>
	) : null }
      </div>
    </div>
  );
}
