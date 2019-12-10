
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

  produceReadout() {
    let instructions = this.hooverInstructions
    let position = this.startCoords
    let room = this.room
    let amountCleaned = this.dirtCleaned

    for(var i = 0; i < instructions.length; i++) {
      let directions = instructions[i]
      if (directions === "N") {
        if (position[1] !== (room[0].length -1)) {
          position[1]++
        }
        cleanDirt()
      } else if (directions === "S") {
        if (position[1] !== 0) {
          position[1]--
        }
        cleanDirt()
      } else if (directions === "E") {
        if (position[0] !== (room.length -1)) {
          position[0]++
        }
        cleanDirt()
      } else if (directions === "W") {
        if (position[0] !== 0) {
          position[0]--
        }
        cleanDirt()
      }
    }
    return position.join(' ') + '\r\n' + amountCleaned

    function cleanDirt() {
      if (room[position[1]][position[0]] === 1) {
        amountCleaned++
        room[position[1]][position[0]] = 0
      }
    }

  }
}
