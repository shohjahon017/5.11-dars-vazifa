const wrapper = document.querySelector("#wrapper");
function createCard(todo) {
  return ` <div class="todo">
        <h3>${todo.postId}</h3>
        <h3>${todo.id}</h3>
        <h3>${todo.name}</h3>
        <p>${todo.email}</p>
        <p>${todo.body}</p>
      </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
  })
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then((data) => {
      wrapper.innerHTML = "";
      if (data.length) {
        data.forEach((element) => {
          let card = createCard(element);
          wrapper.innerHTML += card;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
