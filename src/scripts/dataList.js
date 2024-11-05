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

let costumeContainers = document.getElementById("costumesContainer");

// Create the list tag
let costumesContainerList = document.createElement("ul");

dataArray.forEach((costume) => {
    // Verify what we are working with
    console.log(costume);

    // Create the list item
    let newCostumeEntry = document.createElement("li");

    // Add the list item to the list
    newCostumeEntry.innerText = costume;

    // Add a button to the list item to remove it
    let removeButton = document.createElement("button");

    // Add placeholder name to the button
    removeButton.innerText = "Remove " + costume;

    // Add the element to the container
    costumesContainerList.appendChild(newCostumeEntry);
    costumesContainerList.appendChild(removeButton);
});


// costumesContainer.innerText = "Hello world"
// Add the container to the HTML page
costumesContainer.appendChild(costumesContainerList);