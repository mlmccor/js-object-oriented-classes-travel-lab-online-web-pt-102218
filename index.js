class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }
  
  yearsExperienceFromBeginningOf(year) {
    let endYear = new Date(year)
    console.log(this.startDate.year)
    console.log(endYear.year)
    // return endYear - (this.startDate)
  }
  
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
}