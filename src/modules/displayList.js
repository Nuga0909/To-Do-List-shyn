const listItems = document.querySelector('#list');

const listArr = [
  {
    description: 'Play football',
    completed: false,
    index: 1,
  },
  {
    description: 'Reg for codecamp',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to the gym',
    completed: false,
    index: 3,
  },
  {
    description: 'Party with friends',
    completed: false,
    index: 4,
  },
];

const pushList = () => {
  listArr.forEach((obj) => {
    const toDo = `<li>
      <div><input type="checkbox"></div>
      <div class="title a-list">
          <p>
              ${obj.description}
          <p>
          <i class="fa fa-ellipsis-v"></i>
      </div>
    </li>`;
    listItems.innerHTML += toDo;
  });
};

export default pushList;