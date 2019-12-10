describe("Hoover", function() {
  var hoover;

  beforeEach(function() {
    hoover = new Hoover
  });

  describe("processing the input", function() {
    it("should accept an input and return array of driving instructions", function() {
      hoover.processInstructions('5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW');
      expect(hoover.hooverInstructions).toEqual(['N','N','E','S','E','E','S','W','N','W','W'])
    })

    it("accepts an input and returns the starting coordinates", function() {
      hoover.processCoords('5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW');
      expect(hoover.startCoords).toEqual([1,2]);
      expect(hoover.startCoords[0]).toEqual(1);
      expect(hoover.startCoords[1]).toEqual(2);
    })

    it("accepts the input and returns 5 arrays of length 5", function() {
      hoover.processRoom('5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW');
      expect(hoover.room).toEqual([[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]])
    })

    it("accepts the input and places a 1 in the correct position in the room matrix", function() {
      let input = '5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW'
      hoover.processRoom(input)
      hoover.processDirtLoc(input);

      expect(hoover.room).toEqual([[0,1,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]])
    })
  })

  describe("producing the readout", function() {
    it('should produce the readout in the correct format', function() {
      let input = '5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW'
      hoover.processInstructions(input)
      hoover.processCoords(input)
      hoover.processRoom(input)
      hoover.processDirtLoc(input)

      expect(hoover.produceReadout()).toEqual('1 3\r\n1')
    })
  })
})
