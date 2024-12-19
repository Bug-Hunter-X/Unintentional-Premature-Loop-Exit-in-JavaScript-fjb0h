function myFunc() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    // Removed the premature return statement
  }
}

myFunc();