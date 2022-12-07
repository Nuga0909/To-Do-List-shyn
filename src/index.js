import './style.css';
import {
  pushList, addList, showList, pushToLocal, addTask,
} from './modules/displayList';

window.addEventListener('load', () => {
  showList();
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addList();
    pushList();
    pushToLocal();
  }
});