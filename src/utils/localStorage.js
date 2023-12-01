export const setItemLocalData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemLocalData = key => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeItemLocalData = key => {
  localStorage.removeItem(key);
};
