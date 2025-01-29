const toDoContainer = document.querySelector(".to-do-list");

let toDoArray = [
  "Brush teeth",
  "Make the bed",
  "Breakfast",
  "Get ready for school",
  "Don’t forget to kiss mom!",
];

const renderList = () => {
  toDoContainer.innerHTML = "";

  toDoArray.forEach((listItem) => {
    toDoContainer.innerHTML += `
    <p class='list-item'>${listItem}<button class="check">check</button></p>
    `;
  });
  checkedItem();
};

const checkedItem = () => {
  const listItem = document.querySelectorAll(".check");

  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("done");
    });
  });
};

// checkedItem();

/* Add to list */

const btnAddItem = document.querySelector(".btn-add-item");
const input = document.querySelector("#input");

btnAddItem.addEventListener("click", () => {
  const newItem = input.value;
  toDoArray.push(newItem);
  input.value = "";
  //   console.log(toDoArray);

  saveData();
  renderList();
  checkedItem();
});

function saveData() {
  localStorage.setItem("toDoList", JSON.stringify(toDoArray)); // saved object toDoArray
}

function loadData() {
  const savedList = localStorage.getItem("toDoList");
  if (savedList) {
    toDoArray = JSON.parse(savedList);
    renderList();
  }
}

loadData();
