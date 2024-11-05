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

let costumesContainer = document.getElementById("costumeContainer");



function renderData() {
    // Create the list tag
    let costumesContainerList = document.createElement("ul");

    costumesContainer.innerText = "";

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
        // removeButton.innerText = "Remove " + costume;
        removeButton.innerText = `Remove ${costume}`;

        removeButton.onclick = (() => removeCostumeFromDataList(costume));
    
        // Add the element to the container
        costumesContainerList.appendChild(newCostumeEntry);
        costumesContainerList.appendChild(removeButton);
     
        // Add the container to the HTML page
        costumesContainer.appendChild(costumesContainerList);
    });   
}

function removeCostumeFromDataList(targetItemToRemove) {
    dataArray = dataArray.filter((costume) => costume != targetItemToRemove);

    renderData();
}

function addCostumeToDataList(event, targetInputID) {
    // Find the form from the event 
    // prevent form from doing its default behavior (refreshing the page)
    event.preventDefault();
    console.log("Add costume to the list function is running!!");

    // find the input text field based on targetInputID
    let targetTextInput = document.getElementById(targetInputID);

    // get the value from the input text field
    console.log(targetTextInput.value);

    // append or push to the dataArray
    dataArray.push(targetTextInput.value);

    // clear the input text field
    targetTextInput.value = "";

    // renderData function call to update the page
    renderData();
}

let formInputButton = document.getElementById("costumesInputForm");

formInputButton.addEventListener("click", (event) => addCostumeToDataList(event, "costumeInputText"));
