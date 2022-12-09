const completedTrue = (arr, id) => {
  arr[id].completed = true;
};

const completedFalse = (arr, id) => {
  arr[id].completed = false;
};

export { completedTrue, completedFalse };