 let nbr = 0;
 
 //gen 2 function declaration
 let increment = function() {
 nbr++;
 display();
 }
 //gen 3 function declaration
const decrement =() => {
nbr--;
 display();
}
 
const display = () =>{
	let ctrl = document.getElementById("inp")
	ctrl.value = nbr;
	ctrl.style.color = (nbr % 2 == 0) ? "red":"black";
	ctrl.style.fontWeight = (nbr % 3 == 0) ? "bold":"normal";
	ctrl.style.fontStyle = (nbr % 5 == 0) ? "italic":"normal";
	ctrl.style.fontSize = "12pt";
}


