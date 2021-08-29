"use strict";

// Spread operator can be used to expand an array in to all its individual elements
// or we can say that it is used to unpack all the array elements at once.

const arr = [1, 3, 4];
// const newArray = [1, 20, arr[0], arr[1], arr[2]];
// console.log(newArray);

const spreadArray = [1, 20, ...arr, 499, 54, 4];

console.log(spreadArray);

// usage of spread. 1- copying an array

const copyArray = [...spreadArray];

console.log(copyArray);

const names = ["abc", "xyz", "lksdjf"];

// combining two or more arrays
const combineArray = [...arr, ...names];
console.log(combineArray);

// Strings

const myName = "Tamim Ehsas";

const letters = [...myName, " Addition"];

console.log(letters);

console.log(...myName);

// spread usage with methods
const restaurant = {
  name: "village rest",
  menu: ["pizza", "pasta", "burger"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `you ordered a pasta with ingredients : ${ing1} ${ing2},${ing3}`
    );
  },
};

const newMenu = ["items", ...restaurant.menu];
console.log(newMenu);

// const ingredients = [
//   prompt("type something for the first ingredient"),
//   prompt("ingredient2 "),
//   prompt("ingredient 3"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

const newRestaurant = {
  founder: "Tamim ehsas",
  ...restaurant,
  foundationDate: "2021",
};
console.log(newRestaurant);

// copy objects

const copyRestaurant = { ...restaurant };

console.log(restaurant.name);
console.log(copyRestaurant.name);
copyRestaurant.name = "cafeteria restaurant";
console.log(restaurant.name);
console.log(copyRestaurant.name);
