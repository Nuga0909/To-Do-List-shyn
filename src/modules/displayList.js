const listItems = document.querySelector('#list');

const listArr = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Visit grandma',
    completed: false,
    index: 2,
  },
  {
    description: 'Write some lines of code',
    completed: false,
    index: 3,
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