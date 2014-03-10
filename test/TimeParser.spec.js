describe("TimeParser", function () {
  it("returns an array of objects containing time,songtitle, songnumber using standard [n. title here hh:mm] format", function () {
    var inputTimeString = 
        "1. Test title here 0:00\n\r" +
        "2. The second track 03:31\n\r" +
        "3. Third track 07:09\n\r";
    
    var expectedParsedOutput =
      [
        {
          "TrackNumber": 1,
          "SongTitle": "Test title here",
          "startingAt": {
            "hour": 0,
            "minute": 0,
            "second": 0
          }
        },
        {
          "TrackNumber": 2,
          "SongTitle": "The second track",
          "startingAt": {
            "hour": 0,
            "minute": 3,
            "second": 31
          }
        },
        {
          "TrackNumber": 3,
          "SongTitle": "Third track",
          "startingAt": {
            "hour": 0,
            "minute": 7,
            "second": 9
          }
        }
      ];
    
    var actualParsedOutput = window.me.joshbennett.TimeParser.parseFromString(inputTimeString);
    
    expect(actualParsedOutput).toEqual(expectedParsedOutput);
  });
});
