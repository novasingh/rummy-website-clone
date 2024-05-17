const LIST_NAME = "todo-list"

export const setListToLocalStorage = (list) => {
  localStorage.setItem(LIST_NAME, JSON.stringify(list));
};

export const getListFromLocalStorage = () => {
  const data = localStorage.getItem(LIST_NAME);
  return data ? JSON.parse(data) : [];
};

export const removeListFromLocalStorage = () => {
  localStorage.removeItem(LIST_NAME);
};