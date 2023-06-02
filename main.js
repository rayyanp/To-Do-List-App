document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const taskList = document.querySelector("#tasks");
  
	form.addEventListener('submit', handleFormSubmit);
  
	function handleFormSubmit(event) {
	  event.preventDefault();
  
	  const task = input.value.trim();
  
	  if (task !== '') {
		createTaskElement(task);
  
		input.value = '';
		input.focus();
	  }
	}
  
	function createTaskElement(task) {
	  const taskElement = document.createElement('div');
	  taskElement.className = 'task';
  
	  const taskContentElement = createTaskContentElement(task);
	  const taskActionsElement = createTaskActionsElement();
  
	  taskElement.appendChild(taskContentElement);
	  taskElement.appendChild(taskActionsElement);
  
	  taskList.appendChild(taskElement);
	}
  
	function createTaskContentElement(task) {
	  const taskContentElement = document.createElement('div');
	  taskContentElement.className = 'content';
  
	  const taskInputElement = document.createElement('input');
	  taskInputElement.className = 'text';
	  taskInputElement.type = 'text';
	  taskInputElement.value = task;
	  taskInputElement.readOnly = true;
  
	  taskContentElement.appendChild(taskInputElement);
	  return taskContentElement;
	}
  
	function createTaskActionsElement() {
	  const taskActionsElement = document.createElement('div');
	  taskActionsElement.className = 'actions';
  
	  const taskEditButton = createActionButton('Edit', handleEditClick);
	  const taskDeleteButton = createActionButton('Delete', handleDeleteClick);
  
	  taskActionsElement.appendChild(taskEditButton);
	  taskActionsElement.appendChild(taskDeleteButton);
  
	  return taskActionsElement;
	}
  
	function createActionButton(label, clickHandler) {
	  const button = document.createElement('button');
	  button.className = label.toLowerCase();
	  button.innerText = label;
	  button.addEventListener('click', clickHandler);
	  return button;
	}
  
	function handleEditClick(event) {
	  const button = event.target;
	  const taskElement = button.closest('.task');
	  const taskInputElement = taskElement.querySelector('.text');
  
	  if (button.innerText.toLowerCase() === 'edit') {
		button.innerText = 'Save';
		taskInputElement.removeAttribute('readonly');
		taskInputElement.focus();
	  } else {
		button.innerText = 'Edit';
		taskInputElement.setAttribute('readonly', 'readonly');
	  }
	}
  
	function handleDeleteClick(event) {
	  const button = event.target;
	  const taskElement = button.closest('.task');
	  taskElement.remove();
	}
  });
  