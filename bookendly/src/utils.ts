
export function formatMinutes(minSinceMidnight: number, includeAm: boolean = true) {
  let hours = Math.floor(minSinceMidnight/60)
  let minutes = minSinceMidnight - (hours * 60) 
  let amPm = hours < 12 ? 'am' : 'pm'
  return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + (includeAm ? ' ' + amPm : '')
}

export function minuteSteps(step: number) {
  let steps = []
  for(let i = 0; i <= (24 * 60/step); i++) {
    steps.push(i * step)
  }
  return steps
}
