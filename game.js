var elements = document.getElementsByClassName("column");
var row=document.querySelector(".row");
// Declare a loop variable
var i;
console.log("connected");
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100px";
    elements[i].style.height = "100px";
    elements[i].style.border= "2px solid black";
    elements[i].textContent='';
  }

  function change(){
  	if(this.textContent === '')
  	this.textContent= 'X';
  	else if(this.textContent ==='X')
  		this.textContent='O';
  	else
  		this.textContent='';
  }
for(i=0;i<elements.length;i++){
	elements[i].addEventListener('click',change);
}