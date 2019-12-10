
class Hoover {
  constructor() {
    this.hooverInstructions
    this.startCoords
    this.dirtCleaned = 0
    this.room = []
  }

  processInstructions(input) {
    let arrayInstructions = input.split('\r\n')
    this.hooverInstructions = arrayInstructions.splice(0, (input.length -1)).pop().split('')
  }

  processCoords(input) {
    let arrayCoords = input.split('\r\n')
    this.startCoords = arrayCoords[1].split(' ').map(Number)
  }

  processRoom(input) {
    let array = input.split('\r\n')
    this.room = (new Array(parseInt(array[0][0])).fill(0)).map(x => new Array(parseInt(array[0][2])).fill(0))
  }

  processDirtLoc(input) {
    let splitArray = input.split('\r\n')
    if (splitArray.length > 3) {
      splitArray.pop()
      let locations = splitArray.slice(2)
      let room = this.room
      let dirtLocations = locations.map(item => item.split(' ').map(Number))
      dirtLocations.forEach(element => room[element[1]][element[0]] = 1)

      this.room = room
    }
  }
}
