var button = document.getElementById("enter"); /* enter button */
var input = document.getElementById("userinput"); /* input field */
var ul = document.querySelector("ul"); /* unordered list that we add to */

function inputLength()	{return input.value.length;}

function createListElement() {
		var li = document.createElement("li");		/* creates new list element */
		li.classList.add("listItem");	/* marks new item as listItem class */
		li.appendChild(document.createTextNode(input.value));	/* adds input text to list element */
		li.addEventListener("click", function () {li.classList.toggle("done");});
		ul.appendChild(li); /* adds item to list */
		input.value = ""; /* clear input form */

		/* Delete List Item Button */
		var deleteButton = document.createElement("button");
		deleteButton.classList.add("delete");
		deleteButton.style.marginLeft = "10px"; deleteButton.style.fontVariant = "small-caps";
		deleteButton.appendChild(document.createTextNode("remove"));
		deleteButton.addEventListener("click", function()
			{	li.remove();});
		li.appendChild(deleteButton);

}

function addListAfterClick() {
	if(inputLength() > 0){
		createListElement();
	}
};

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

