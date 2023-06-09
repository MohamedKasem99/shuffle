// Get DOM elements
const nameList = document.getElementById("nameList");
const randomizeBtn = document.getElementById("randomizeBtn");
const newNameInput = document.getElementById("newName");
const copyBtn = document.getElementById("copyBtn");
const addNameBtn = document.getElementById("addNameBtn");

function shuffle() {
    for (let i = nameList.children.length; i >= 0; i--) {
        nameList.appendChild(nameList.children[Math.random() * i | 0]);
    }
}

// Randomize names function
function shuffleNames() {
    const names = Array.from(nameList.children);
    names.forEach((name, index) => {
        setTimeout(() => {
            name.classList.add("shuffle");
            setTimeout(() => {
                name.textContent = names[index].textContent;
                name.classList.remove("shuffle");
            }, 200);
        }, 100);
    });
    setTimeout(shuffle, 350);
}
function copyNames() {
    const names = Array.from(nameList.children).map((name) => name.textContent);
    const namesString = names.join(", ");
    navigator.clipboard.writeText(`Order is: ${namesString}`);
}


// Add name function
function addName() {
    const newName = newNameInput.value;
    if (newName) {
        const name = document.createElement("li");
        name.textContent = newName;
        nameList.appendChild(name);
        newNameInput.value = "";
    }
}

// Event listeners
randomizeBtn.addEventListener("click", shuffleNames);
addNameBtn.addEventListener("click", addName);
copyBtn.addEventListener("click", copyNames);

window.addEventListener("load", shuffleNames);