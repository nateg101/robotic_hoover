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

    it("accepts the input and returns the x & y dimensions", function() {
      hoover.processRoom('5 5\r\n1 2\r\n1 0\r\n2 2\r\n2 3\r\nNNESEESWNWW');
      expect(hoover.xCoords).toEqual(5)
      expect(hoover.yCoords).toEqual(5)
    })
  })
})
