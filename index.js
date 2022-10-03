let greeting = ["Hello,", "Welcome"];

let greetingName = "I am Shivam";

let speed = 110;
let i = 0;

function writeGreeting() {
  if (i < greeting[0].length) {
    document.getElementById("greeting").innerHTML += greeting[0].charAt(i);
    i++;
    setTimeout(writeGreeting, speed);
  }
}


let j = 0;
function writeIntroduction() {
  if (j < greeting[1].length) {
    document.getElementById("greet-2").innerHTML += greeting[1].charAt(j);
    j++;
    setTimeout(writeIntroduction, speed);
  }
}

let k=0;

function writeName() {
    if (k < greetingName.length) {
      document.getElementById("intro").innerHTML += greetingName.charAt(k);
      k++;
      setTimeout(writeName, speed);
    }
  }


writeGreeting();

setTimeout(writeIntroduction, 850);

setTimeout(writeName, 2000)