function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log ("HELLO".toUpperCase())
}
function logWhisper(string) {
  console.log ("hello".toLowerCase())
}

function sayHiToGrandma(hello) {
  swith(hello) {
    case ("hello".toLowerCase() === "hello"):
     return "I can\'t hear you!";
    case ("hello".toUpperCase() === "HELLO"):
     return "YES INDEED!";
    case ("I love you, Grandma."):
     return "I love you, too.";
  }
}
