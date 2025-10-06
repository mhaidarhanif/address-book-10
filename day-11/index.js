console.log("Day 11");

// --------------------------------------------------------------------

const exampleAnimal = {
  name: "Bear",
  color: "brown",
  speed: 56, // km/h
};

function describeAnimal(animal) {
  console.log(`${animal.name} has ${animal.color} color,
with running speed up to ${animal.speed} km/h`);
}

describeAnimal(exampleAnimal);

// --------------------------------------------------------------------

function sumNumbers(numberA, numberB) {
  return numberA + numberB;
}

console.log(sumNumbers(1, 2));
console.log(sumNumbers(3, 4));
