let users = [];

//Procurando no banco
const filterUsers = async (name) =>
  fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${name}`
  ).then((res) => res.json());

//Fazendo o debounce depois de determinado tempo a partir dos arguments (event)
export const debounceEvent = (fn, wait = 1000, time) => (...args) => {
  clearTimeout(
    time,
    (time = setTimeout(() => {
      fn(...args);
    }, wait))
  );
};

//Fazendo a busca pelas teclas digitadas e apenas o nome pelo Map
function handleKeyUp(event) {
  filterUsers(event.target.value).then((users) =>
    console.log(users.map((user) => user.name))
  );
}

//Buscando em meio segundo
// document.querySelector("input").addEventListener("keyup", debounceEvent(handleKeyUp, 500))
