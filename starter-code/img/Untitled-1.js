let hacker1 ="ariver";
let hacker2="navigator";
let secHacker1 = "";
let inverted;
let invArr = [];
let lexComp =""

/*if(hacker1.length > hacker2.length){
  console.log(`The drivers has the longest name, it has ${hacker1.length}`)
}
else if (hacker1.length < hacker2.length){
  console.log(`Yo, the navigator definetly goes firts, it has ${hacker2.length}`);
}

else {
  console.log(`wow you both have equally the same characters, ${hacker1.length + hacker2.length} characters`);
}*/

/*for(i=0; i<hacker1.length; i++) {
 hacker1= hacker1.replace(hacker1[i], hacker1[i].toUpperCase())
secHacker1 += hacker1.substring(i,i+1) + " ";
}
console.log(secHacker1);
*/
/*function reverseStr (string) { 
    inverted = string.split("").reverse().join("");
    console.log(inverted)
  }*/


/* lexComp =  hacker1.localeCompare(hacker2); */
/*
if(hacker1[1] > hacker2.length){
  console.log(`The drivers name goes first`)
}
else if (hacker1.length < hacker2.length){
  console.log(`Yo, the navigator goes firts  definetly`);
}

else {
  console.log(`What? you both have the same the same name`);
} */


  for(i=0; i< hacker1.length; i++){
    if(hacker1[i] < hacker2[i]) {
      console.log(`The drivers name goes first`)
      break;
    }
    else if(hacker1[i] > hacker2[i]) {
      console.log(`Yo, the navigator goes firts  definetly`)
      break;
  }
  else if (hacker1 == hacker2){

    console.log(`What? you both have the same the same name`);
    break;
  }
}

