const animal = {
  weight: 250,
  wolf: "dexter",
  dog: "Cake",
  others: {
    lion: "James",
    bear: "Boogie",
    tiger: "Donald",
    moose: "Jack",
    leopard: "Thomas",
    Sealion: "Drake"
  }
};

let state = "Missouri"

animal.wolf = "Spike";
animal.occupation = "Croc";
console.log(animal.others.lion);



animal.occupation = ['Bird'];
console.log(animal);

