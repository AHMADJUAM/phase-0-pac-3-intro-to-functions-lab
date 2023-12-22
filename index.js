function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    console.log(shout(string));
  }
  
  
  function logWhisper(string) {
    console.log(whisper(string));
  }
  
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  
  const exampleString = "Hello World!";
  console.log(shout(exampleString)); 
  console.log(whisper(exampleString)); 
  logShout(exampleString);
  logWhisper(exampleString); 
  console.log(sayHiToHeadphonedRoommate("hello")); 
  console.log(sayHiToHeadphonedRoommate("HELLO")); 
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); 
  