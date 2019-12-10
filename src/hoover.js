
class Hoover {
  constructor() {
    this.hooverInstructions
    this.startCoords
    this.room
    this.xCoords
    this.yCoords
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
    let roomArray = array[0].split(' ').map(Number)
    this.xCoords = roomArray[0]
    this.yCoords = roomArray[1]
  }



}
