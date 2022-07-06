type TimeTypes = string | number | Time;

export default class Time {
  minutes = 0;

  constructor(time: TimeTypes) {
    if(time instanceof Time) {
      this.minutes = time.minutes
    } else if(typeof time == 'number') {
      this.minutes = time
    } else {
      const [h,m] = time.split(':')
      this.minutes = parseInt(h) * 60 + parseInt(m)
    }
  }

  stepsUntil(endTime: TimeTypes, step=15): Time[] {
    let end = new Time(endTime)
    let slots: Time[] = []
    const numSlots = Math.floor((end.minutes - this.minutes) / step)
    for(let i = 0; i < numSlots; i++) {
      slots.push(new Time(this.minutes + (i * step)))
    }
    return slots
  }

  get isAm() {
    return (this.minutes % (24*60)) < 12*60 
  }

  get pretty() {
    return this.toString() + (this.isAm ? ' am' : ' pm')
  }

  toString(): string {
    const hours = Math.floor(this.minutes / 60) 
    const min = this.minutes % 60 
    return hours.toString().padStart(2, '0') + ':' + min.toString().padStart(2, '0')
  }

}
