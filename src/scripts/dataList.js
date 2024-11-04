//  Declare data to display front-end
let dataArray = [
    "Frankenstein",
    "Dracula",
    "Cthulhu",
    "Chucky",
    "Wednesday",
    "Voldemort",
    "T-Rex",
    "Gremlin",
    "Joker",
    "Clowns"
];

dataArray.forEach((costume) => {
    console.log(costume);
});

let costumeContainers = document.getElementById("costumesContainer");

costumesContainer.innerText = "Hello world";