
// Create a welcome button
const button = document.createElement("button");

button.textContent = "Click Me";

button.style.display = "block";
button.style.margin = "20px auto";
button.style.padding = "12px 25px";
button.style.backgroundColor = "#1e3a8a";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// Add button to the webpage
document.body.appendChild(button);

// Add click interaction
button.addEventListener("click", function() {
    alert("Welcome to My Portfolio!");
});
