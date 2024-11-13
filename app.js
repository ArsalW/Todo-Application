document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = {
        id: Date.now(),
        text: taskText,
      };
      tasks.push(task);
      taskInput.value = "";
      displayTasks();
    }
  });

  function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-title">${task.text}</span>
        <div class="buttons">
          <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
          <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

  
  window.editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    const newText = prompt("Edit Task", task.text);
    if (newText !== null) {
      task.text = newText.trim() || task.text;
      displayTasks();
    }
  };

  
  window.deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    displayTasks();
  };
});

const firebaseConfig = {
  apiKey: "AIzaSyCedU_54NAoAQkrbHSIt4Scv_JMcMdfP8U",
  authDomain: "to-d0-list-app.firebaseapp.com",
  databaseURL: "https://to-d0-list-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "to-d0-list-app",
  storageBucket: "to-d0-list-app.firebasestorage.app",
  messagingSenderId: "911055586392",
  appId: "1:911055586392:web:1836ae5510f96fc400362d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
