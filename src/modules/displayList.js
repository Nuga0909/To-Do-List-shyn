import { completedTrue, completedFalse } from './checkbox';

const listItems = document.querySelector('#list');
const addTask = document.getElementById('input-task');
const clearAll = document.querySelector('.clear-all');

let listArr = [];

const addList = () => {
  const obj = {};
  obj.index = listArr.length + 1;
  obj.description = addTask.value;
  obj.completed = false;
  listArr.push(obj);
};

const pushToLocal = () => {
  localStorage.setItem('listArr', JSON.stringify(listArr));
};

const pushList = () => {
  listItems.innerHTML = '';
  listArr.forEach((obj) => {
    const toDo = `<li>
      <div><input class= "check-box" type="checkbox" data-id="${obj.index}"></div>
      <div class="title a-list">
          <input data-id="${obj.index}" class= "list-input" type = "text" value = "${obj.description}">
          <button class="delete-btn" data-id="${obj.index}"><i class="fa fa-ellipsis-v"></i></button>
      </div>
    </li>`;
    listItems.innerHTML += toDo;
    addTask.value = '';
  });
  const listRemoveBtn = document.querySelectorAll('.delete-btn');

  listRemoveBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSet = parseInt(button.dataset.id, 10);
      const buttonId = listArr.findIndex((object) => object.index === dataSet);
      const deleted = (id) => {
        listArr.splice(id, 1);
        for (let i = 0; i < listArr.length; i += 1) {
          listArr[i].index = i + 1;
        }
        pushList();
        localStorage.setItem('listArr', JSON.stringify(listArr));
      };
      deleted(buttonId);
    });
  });

  const inputDescription = document.querySelectorAll('.list-input');
  inputDescription.forEach((toDo) => {
    toDo.addEventListener('focusout', () => {
      const dataSet = parseInt(toDo.dataset.id, 10);
      const toDoId = listArr.findIndex((object) => object.index === dataSet);
      listArr[toDoId].description = toDo.value;
      const update = () => {
        pushList();
        localStorage.setItem('listArr', JSON.stringify(listArr));
      };
      update();
    });
  });

  const checkBox = document.querySelectorAll('.check-box');
  checkBox.forEach((tick) => {
    tick.addEventListener('change', (e) => {
      if (e.currentTarget.checked) {
        const dataSet = parseInt(tick.dataset.id, 10);
        const tickId = listArr.findIndex((object) => object.index === dataSet);
        completedTrue(listArr, tickId);
        pushToLocal();
      } else {
        const dataSet = parseInt(tick.dataset.id, 10);
        const tickId = listArr.findIndex((object) => object.index === dataSet);
        completedFalse(listArr, tickId);
        pushToLocal();
      }
    });
  });
};

const clear = () => {
  listArr = listArr.filter((obj) => obj.completed !== true);
};

const showList = () => {
  if (localStorage.getItem('listArr')) {
    listArr = JSON.parse(localStorage.getItem('listArr'));
  }
  pushList();
};

export {
  pushList, addList, showList, pushToLocal, clear, addTask, clearAll,
};