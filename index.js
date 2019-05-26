class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }
  
  yearsExperienceFromBeginningOf(year) {
    let endYear = new Date(year)
    return endYear - (this.startDate)
  }
  
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
}