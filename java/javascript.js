const taskInput = document.getElementById("newTasks");//Add a new task.
const addButton = document.getElementsByTagName("button")[0];//first button
const incompleteTaskHolder = document.getElementById("toDoTasks");//ul of #toDoTasks
const completedTasksHolder = document.getElementById("completedTasks");//completedTasks


//New task list item
const createNewTaskElement = function (taskString) {

	const listItem = document.createElement("li");

	//input (checkbox)
	const checkBox = document.createElement("input");
	//label
	const label = document.createElement("label");
	//input (text)
	const editInput = document.createElement("input");
	//button.edit
	const editButton = document.createElement("button");

	//button.remove
	const removeButton = document.createElement("button");

	label.innerText = taskString;

	//Each elements, needs appending
	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";//innerText encodes special characters, HTML does not.
	editButton.className = "edit";
	removeButton.innerText = "remove";
	removeButton.className = "remove";

	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(removeButton);
	return listItem;
}

const addTask = function () {
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	const listItem = createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";

}

//Edit an existing task.

const editTask = function () {
	console.log("Edit Task...");
	console.log("Change 'edit' to 'save'");


	const listItem = this.parentNode;

	const editInput = listItem.querySelector('input[type=text]');
	const label = listItem.querySelector("label");
	const containsClass = listItem.classList.contains("editMode");
	//If class of the parent is .editmode
	if (containsClass) {

		//switch to .editmode
		//label becomes the inputs value.
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}

	//toggle .editmode on the parent.
	listItem.classList.toggle("editMode");
}

//remove task.
const removeTask = function () {
	console.log("remove Task...");

	const listItem = this.parentNode;
	const ul = listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);

}

//Mark task completed
const taskCompleted = function () {
	console.log("Complete Task...");

	//Append the task list item to the #completedTasks
	const listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}


const taskIncomplete = function () {
	console.log("Incomplete Task...");
	//Mark task as incomplete.
	//When the checkbox is unchecked
	//Append the task list item to the #toDoTasks.
	const listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

const ajaxRequest = function () {
	console.log("AJAX Request");
}

//Set the click handler to the addTask function.
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


const bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	console.log("bind list item events");
	//select ListItems children
	const checkBox = taskListItem.querySelector("input[type=checkbox]");
	const editButton = taskListItem.querySelector("button.edit");
	const removeButton = taskListItem.querySelector("button.remove");


	//Bind editTask to edit button.
	editButton.onclick = editTask;
	//Bind removeTask to remove button.
	removeButton.onclick = removeTask;
	//Bind taskCompleted to checkBoxEventHandler.
	checkBox.onchange = checkBoxEventHandler;
}

//loop for incompleteTaskHolder items
//for each list item
for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//loop completedTasksHolder items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}


//Local storage section
const save = document.querySelectorAll('ul')





