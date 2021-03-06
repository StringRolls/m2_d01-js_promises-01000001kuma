"use strict";

const directions = [
  'Starting point: Ironhack Miami',
  '↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue',
  '➔ Turn right onto S Miami Ave',
  '* Chipotle Mexican Grill 891 S Miami Ave, Miami'
];

function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    console.log(directions[step]); // This simulates giving instructions to the user walking
    
    if (!directions[step]) errorCallback('Instructions not found.');
    else callback();
  },1500 + Math.random() * 1000); 
  
}
// // Single callback
// getDirections(0, ()=> {
//   getDirections(1, () => {});
// });

// getDirections(1, () => {
//   //getDirections(1, () => {});
//   return;
// });

// getDirections(2, () => {
//   //getDirections(1, () => {});
//   return;
// });


// Callbacks in sequence
getDirections(
  0,
  () => {
    getDirections(
      1,
      () => {
        getDirections(
          2,
          () => {
            getDirections(
              3,
              () => {
                console.log("You arrived at your destination!");
                getDirections(4, () => {}, (err) => console.log(err) ) ;
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);