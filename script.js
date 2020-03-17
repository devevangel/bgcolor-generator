var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

function setIniGradient() {
	css.textContent =
	"linear-gradient(to right , " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right , " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setIniGradient();


color1.addEventListener("input", function() {
	setGradient();
});

color2.addEventListener("input", function() {
	setGradient();
})

// cont addition = (a, b = 3) => {
// 	return a + b;
// }
