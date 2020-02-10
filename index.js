const animal = {
  weight: 250,
  wolf: "dexter",
  dog: "Cake",
  others: {
    lion: "James",
    bear: "Boogie",
    tiger: "Donald",
    moose: "Jack"
  }
};

animal.wolf = "dexter";
animal.occupation = "Croc";
console.log(animal.others.lion);

