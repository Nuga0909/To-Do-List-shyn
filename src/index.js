import './style.css';
import {
  pushList, addList, showList, pushToLocal, clear, addTask,
} from './modules/displayList';

const clearAll = document.querySelector('.clear');

window.addEventListener('load', () => {
  showList();
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addTask.value === '') {
      addTask.innerText += "To-Do list can't be empty";
    } else {
      addList();
      pushList();
      pushToLocal();
    }
  }
});

clearAll.addEventListener('click', () => {
  clear();
  pushList();
  pushToLocal();
});