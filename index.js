// Write your code here!

"Make sure you remove the <main> with id 'main'"

main.remove()

"Make sure you create an <h1> with id 'victory'"

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";