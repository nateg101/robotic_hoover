
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
    let roomArrays = []
    let array = input.split('\r\n')
    let roomSize = array[0].split(' ').map(Number)
    let roomArrayLength = new Array(roomSize[0])

    for (var i = 0; i < roomSize[1]; i++) {
      roomArrays[i] = roomArrayLength
    }
    this.room = roomArrays.fill(0)
  }



}
