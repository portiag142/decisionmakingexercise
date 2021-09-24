let randomNum = Math.random();
console.log(randomNum);
randomNum *= 5;
console.log(randomNum);
randomNum = Math.floor(randomNum);
console.log(randomNum);
randomNum++;
console.log(randomNum);


if (randomNum>=4) {
    console.log(randomNum>= 4);
  } 
  else if (randomNum) {
      console.log ("Equal to 2 or 3");
  }
  else {
  console.log("Equal to 1");
  }

  if (randomNum == 1 || 2 || 4 ||5){
  console.log("not equal to 3");
  }

  if (randomNum == 1 || 2 || 4) {
  console.log("not equal to 3 and not equal to 5");
  }
  if (randomNum == 2 || 4){
      console.log("equal to 2 or equal to 4");
  }