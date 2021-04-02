function loadFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);
  return parsedData;
}
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { loadFromLocalStorage, saveToLocalStorage };

// localStorage.clear();
