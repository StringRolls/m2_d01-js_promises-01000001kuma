"use strict";

const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Cappuccino"), 2000);
});

pr5
  .then((value1) => {
    console.log("value1:", value1);
    return value1 + " is good!";
  })
  .then((value2) => {
    console.log("value2:", value2);
    return "But pizza is also good...";
  })
  .then((value3) => {
    console.log("value3:", value3);
    return "Alas piza and cappuccino do not go together";
  })
  .then((value4) => {
    console.log("value4:", value4);
  });
