function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback.apply(this, args), delay);
  };
}

function throttle(callback, delay) {
  let lastRun = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastRun >= delay) {
      lastRun = currentTime;
      callback.apply(this, args);
    }
  };
}

const searchInput = document.querySelector("#searchInput");
const searchStatus = document.querySelector("#searchStatus");

const runSearch = debounce((searchTerm) => {
  searchStatus.textContent = searchTerm
    ? `Showing search results for "${searchTerm}"`
    : "Enter a product name to search.";
}, 500);

searchInput.addEventListener("input", (event) => {
  runSearch(event.target.value.trim());
});

const productList = document.querySelector("#productList");
const eventStatus = document.querySelector("#eventStatus");
const addProductButton = document.querySelector("#addProductButton");

productList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove-button")) {
    return;
  }

  eventStatus.textContent = "The parent list received the button click through bubbling.";
});

productList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-button");

  if (!removeButton) {
    return;
  }

  const productItem = removeButton.closest("li");
  productItem.remove();
  eventStatus.textContent = "The selected product was removed using event delegation.";
});

addProductButton.addEventListener("click", () => {
  const nextId = productList.children.length + 1;
  const productItem = document.createElement("li");
  productItem.dataset.id = String(nextId);

  const productName = document.createElement("span");
  productName.textContent = `New Product ${nextId}`;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";

  productItem.append(productName, removeButton);
  productList.append(productItem);
});

function calculateDiscount(price, percentage) {
  return price - price * percentage / 100;
}

function memoizeDiscount(calculation) {
  const cache = new Map();

  return function (price, percentage) {
    const key = `${price}:${percentage}`;

    if (cache.has(key)) {
      console.log("Result returned from cache");
      return cache.get(key);
    }

    console.log("Fresh discount calculation");
    const result = calculation(price, percentage);
    cache.set(key, result);
    return result;
  };
}

const cachedDiscount = memoizeDiscount(calculateDiscount);
const discountButton = document.querySelector("#discountButton");
const discountResult = document.querySelector("#discountResult");

discountButton.addEventListener("click", () => {
  const firstResult = cachedDiscount(5000, 10);
  const secondResult = cachedDiscount(5000, 10);
  discountResult.textContent = `Discounted price: ₹${firstResult}. Cached result: ₹${secondResult}.`;
});

const scrollStatus = document.querySelector("#scrollStatus");

window.addEventListener("scroll", throttle(() => {
  scrollStatus.textContent = `Scroll event handled at ${new Date().toLocaleTimeString()}`;
}, 1000));
