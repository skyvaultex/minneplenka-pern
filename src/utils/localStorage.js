export const saveToLocalStorage = (destination ,item) => 
  localStorage.setItem(destination, JSON.stringify(item));

export const loadFromLocalStorage = (destination) => 
  JSON.parse(localStorage.getItem(destination)) || [];