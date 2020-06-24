// Write your code here!
main.remove();

let victory = document.createElement('h1');
victory.setAttribute("id", "victory");
document.body.appendChild(victory);

let newHeader = document.querySelector("h1#victory");
newHeader.innerHTML = 'Claudiu is the champion'
