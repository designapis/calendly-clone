export default class Time {
  minutes = 0;

  constructor(time: string | number) {
    if(typeof time == 'number') {
      this.minutes = time
    } else {
      const [h,m] = time.split(':')
      this.minutes = parseInt(h) * 60 + parseInt(m)
    }
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
