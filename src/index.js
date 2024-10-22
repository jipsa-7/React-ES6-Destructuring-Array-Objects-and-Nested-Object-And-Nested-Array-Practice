import animals, { useAnimals } from "./data";

console.log("first we import animals array to this file");
console.log("checking what all this are inside the animal array");
console.log(animals);

// DESTRUCTURING AN ARRAY
//************************ */

// we are going to destructure the animal array, so that we can take each of the array items. In effectively we freed the  object from array.
const [cats, dogs] = animals; //while destructuring an array or an object name given to each of it should be unique. otherwise it will show an error.
console.log(cats);
console.log(dogs);

//DESTRUCTURING AN OBJECT
//************************** */

//To check this out please comment the blow 3 blocks

const { name, sound } = cats; //While destructuring an object the name given should have to match with the property name of that object.
//You don't have to destructure for all of the properties and values in an object.
console.log(name);
console.log(sound);
console.log(name + " makes sound  " + sound);

//If we want to give a default property and value. We need to specify it like this below.
//************************************************************** */
//If you want to check this out you need to delete the properties name and sound in cats object fron data.js file.and then comment the block just above thisblock and 2 block below and then uncomment the block just below this.

//const { name = "Fluffy", sound = "Purr" } = cats; //  This will automatically makes the property and value if they are not specified.
//console.log(name);
//console.log(sound);
// console.log(name + " makes sound  " + sound);

// If we want to give an alternative name for the propertiese that comesfrom an object.
//******************************************************* */

//const { name: catname, sound: makesound } = cats;//name  and sound will no longer exist after giving new name to the properties.
//console.log(catname);

//DESTRUCTURING A NESTED OBJECT / (EXTENSIVE DESTRUCTURING)/ DESTRUCTURING OBJECTTHAT IS  INSIDE aN ANOTHER OBJECT
//************************************ */

//  To check this out please comment the above 3 blocks and uncomment the block below
// const {
//   name,
//   sound,
//   feedingRequirement: { food, water },
// } = cats;

// console.log(food);
// console.log(water);
const {
  feedingRequirement: { food, water },
} = cats;
console.log(food); ////You don't have to destructure for all of the properties and values in an object.
// here We destructured only the feedding requirement all the other properties that is name and sound had allready  destructured before.

// HOW SET STATE WORKS /USE STATE WORKS
//***************************************88 */

const [animal, makesound] = useAnimals(cats);
console.log(animal);
makesound();
/*************************************************
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 * &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 */

// CHALLENGE: uncomment the code below and see the car stats rendered
//****************************************************************** */

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";
const [honda, tesla] = cars; //Destructuring array
//Destructuring objects and its nested array and nested objects
const {
  model: hondamodel, //Renaming the property
  coloursByPopularity: [hondaTopColour, hondacolor2],
  speedStats: { topSpeed: hondatopSpeed, hondazeroToSixty },
} = honda;
//const [hondaTopColour, hondacolor2] = hondaColoursByPopularity;

const {
  model: teslamodel,
  coloursByPopularity: [teslaTopColour, teslacolor2],
  speedStats: { topSpeed: teslatopSpeed, zeroToSixty: teslazeroToSixty },
} = tesla;
//const [teslaTopColour, teslacolor2] = teslaColoursByPopularity;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{teslamodel}</td>
      <td>{teslatopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondamodel}</td>
      <td>{hondatopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
