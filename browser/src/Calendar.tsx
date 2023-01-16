import { useState } from 'react'
import ReactCalendar, {CalendarProps} from 'react-calendar'
import './Calendar.css'

const now = new Date()
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
  changeStartDate,
  dayEnabled
}: {
  startDate?: Date|null;
  changeStartDate: (d: Date) => void;
  dayEnabled: (date: Date) => boolean;
}) {

  const tileDisabled = ({date}: {date: Date}): boolean => {
    return date < now || !dayEnabled(date)
  }

  return (
    <div>
      <ReactCalendar onChange={changeStartDate} value={startDate}
	tileDisabled={tileDisabled}
      />
    </div>
  );
}
