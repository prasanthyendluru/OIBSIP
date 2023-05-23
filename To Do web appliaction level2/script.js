const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');
const taskInput = document.getElementById('task-input');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const currentDate = new Date();
  const dateTimeString = formatDateTime(currentDate);

  const listItem = document.createElement('li');
  listItem.innerHTML = `${taskText} - ${dateTimeString}
                         <button onclick="completeTask(this)">Complete</button>
                         <button onclick="editTask(this)">Edit</button>
                         <button onclick="deleteTask(this)">Delete</button>`;
  pendingList.appendChild(listItem);

  taskInput.value = '';
}

function completeTask(button) {
  const listItem = button.parentNode;
  const taskText = listItem.firstChild.textContent.split(' - ')[0];

  const currentDate = new Date();
  const dateTimeString = formatDateTime(currentDate);

  listItem.firstChild.textContent = `${taskText} - ${dateTimeString}`;
  listItem.remove();
  completedList.appendChild(listItem);

  const completedButton = listItem.querySelector('button:nth-child(1)');
  completedButton.textContent = 'Incomplete';
  completedButton.setAttribute('onclick', 'incompleteTask(this)');
}

function incompleteTask(button) {
  const listItem = button.parentNode;
  const taskText = listItem.firstChild.textContent.split(' - ')[0];

  const currentDate = new Date();
  const dateTimeString = formatDateTime(currentDate);

  listItem.firstChild.textContent = `${taskText} - ${dateTimeString}`;
  listItem.remove();
  pendingList.appendChild(listItem);

  const incompleteButton = listItem.querySelector('button:nth-child(1)');
  incompleteButton.textContent = 'Complete';
  incompleteButton.setAttribute('onclick', 'completeTask(this)');
}

function editTask(button) {
  const listItem = button.parentNode;
  const taskText = listItem.firstChild.textContent.split(' - ')[0];

  const newTaskText = prompt('Edit task:', taskText);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    const currentDate = new Date();
    const dateTimeString = formatDateTime(currentDate);
    listItem.firstChild.textContent = `${newTaskText} - ${dateTimeString}`;
  }
}

function deleteTask(button) {
  const listItem = button.parentNode;
  listItem.remove();
}

function formatDateTime(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleString('en-US', options);
}
