import Time from './Time'

export function formatMinutes(minSinceMidnight: number, includeAm: boolean = true) {
  let hours = Math.floor(minSinceMidnight/60)
  let minutes = minSinceMidnight - (hours * 60) 
  let amPm = hours < 12 ? 'am' : 'pm'
  return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + (includeAm ? ' ' + amPm : '')
}

export function minuteSteps(step: number): Time[] {
  let steps: Time[] = []
  for(let i = 0; i < (24 * 60/step); i++) {
    steps.push(new Time(i * step))
  }
  return steps
}

export function formatTime(time: string | number) {
  const t = new Time(time)
  return t.toString() + (t.isAm ? ' am' : ' pm')
}
