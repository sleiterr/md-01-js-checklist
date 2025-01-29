const toDoContainer = document.querySelector(".to-do-list");

// array
let toDoArray = [
  "Brush teeth",
  "Make the bed",
  "Breakfast",
  "Get ready for school",
  "Don’t forget to kiss mom!",
];

const renderList = () => {
  // update-clean list
  toDoContainer.innerHTML = "";

  toDoArray.forEach((listItem, index) => {
    toDoContainer.innerHTML += `
    <p class='list-item'>${listItem}
    <button class="check">check</button>
    
    <button class='bttn-delete' data-index='${index}'>delete</button></p>
    `;
    //* index help delete item
  });

  checkedItem();
  deleteItem();
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

const addItem = () => {
  const btnAddItem = document.querySelector(".btn-add-item");
  const input = document.querySelector("#input");

  btnAddItem.addEventListener("click", () => {
    const newItem = input.value.trim();

    if (newItem === "") return; // check for empty input

    //   console.log(toDoArray);
    toDoArray.push(newItem);

    // saveData();
    renderList();
    input.value = "";
  });
};

addItem();

function deleteItem() {
  const btnDelete = document.querySelectorAll(".bttn-delete");

  btnDelete.forEach((bttn) => {
    bttn.addEventListener("click", () => {
      const index = bttn.getAttribute("data-index");

      toDoArray.splice(index, 1);
      // saveData();
      renderList();
      // bttn.classList.add("hidden");
    });
  });
}



window.onload = () => {
  renderList();
};
