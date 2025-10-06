console.log("Day 11");

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
