var newtitle = document.getElementById("title");
var addtolistbutton= document.getElementById("addtolistbutton");
var list= document.getElementById("list");
var addtolisttext = document.getElementById ("addtolisttext");
var removebutton = document.getElementById("removefromlistbutton");



function changetitle () {
	document.getElementsByTagName("h1")[0].textContent = newtitle.value;
}



addtolistbutton.addEventListener("click", function() {

	if (addtolisttext.value != ""){
	var li = document.createElement("li");
	li.textContent =  addtolisttext.value;
	list.appendChild(li);
	var i = document.createElement("i");
	i.className = "fa fa-trash-o";
	li.appendChild(i);
	addtolisttext.value = "";
	addtolisttext.focus();
	i.addEventListener("click", function(){
	list.removeChild(li);
});

	}
	

});











