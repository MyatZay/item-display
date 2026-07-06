// app.js
// Assumes `items` array is already defined globally by item-list.js

document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("item-list");
  const idEl = document.getElementById("item-id");
  const nameEl = document.getElementById("item-name");
  const categoryEl = document.getElementById("item-category");
  const inventoryEl = document.getElementById("item-inventory");
  const priceEl = document.getElementById("item-price");

  function clearDetails() {
    idEl.textContent = "";
    nameEl.textContent = "";
    categoryEl.textContent = "";
    inventoryEl.textContent = "";
    priceEl.textContent = "";
  }

  function buildOptions() {
    // Blank/default option first, per spec: no default item selected
    const blankOption = document.createElement("option");
    blankOption.value = "";
    blankOption.textContent = "";
    selectEl.appendChild(blankOption);

    items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      selectEl.appendChild(option);
    });
  }

  function showItem(id) {
    const item = items.find((i) => i.id === Number(id));
    if (!item) {
      clearDetails();
      return;
    }
    idEl.textContent = item.id;
    nameEl.textContent = item.name;
    categoryEl.textContent = item.category;
    inventoryEl.textContent = item.inventory;
    priceEl.textContent = item.price;
  }

  selectEl.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "") {
      clearDetails();
    } else {
      showItem(value);
    }
  });

  buildOptions();
  clearDetails();
});
