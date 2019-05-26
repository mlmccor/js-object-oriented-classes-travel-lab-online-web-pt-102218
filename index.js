class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }
  
  yearsExperienceFromBeginningOf(date) {
    let endYear = new Date(date).getFullYear()
    return endYear - (this.startDate.getFullYear())
  }
  
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  
  
}