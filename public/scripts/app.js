//function creates element for every individual todo item
const todoElement = function (todo) {
  newElement = `<label
><input type="checkbox" name="todo-element"/>${todo.title}
<button class="deleteButton" id="${todo.id}"> DeleteME </button></label
>
<p class = "test"> TEST </p>
<article class="todoElement">
<div>category: <span contenteditable="true"> ${todo.category} </span></div>
<div>title:<span contenteditable="true">${todo.title}</span></div>
</article>`;

  return newElement;
};


//function determines category and calls the todoElement function
const addElement = function (todo) {
  if (todo.category === "toWatch") {
    $(".watch.todos").append(todoElement(todo));
  }

  if (todo.category === "toRead") {
    $(".read.todos").append(todoElement(todo));
  }

  if (todo.category === "toBuy") {
    $(".buy.todos").append(todoElement(todo));
  }

  if (todo.category === "toEat") {
    $(".eat.todos").append(todoElement(todo));
  }
};

$(document).ready(function () {
  //hide items on load
  $(`.watch.todos`).hide()
  $(`.read.todos`).hide()
  $(`.buy.todos`).hide()
  $(`.eat.todos`).hide()

  //get existing todo items on page load / reload
  const loadToDos = function () {
    $.ajax({
      method: "GET",
      url: "/todo",
    }).done((todos) => {
      $(".watch.todos").empty();
      $(".read.todos").empty();
      $(".buy.todos").empty();
      $(".eat.todos").empty();
      todos.forEach((todo) => {
        addElement(todo);
      });
    });
  };

  loadToDos();


  //add new todo list to form upon user submission
  $(".new.todo").on("submit", function (event) {
    event.preventDefault();
    let data = $("input", this).val();


    //if user enters blank todo send alert for now
    if (data.length === 0) {
      return alert("To-do field is blank!");
    }

    $.ajax({ method: "POST", url: "/todo", data: { task: data } }).then(
      (response) => {
        $(".new.todo input").val("");
        loadToDos();
      }
    );
  });

<<<<<<< HEAD
  //Delete button code that is working now.
  $('.todo.container').on('click','.deleteButton',function(e){
    e.preventDefault();
    //Would be getting the ID from the current button
    let id = $(this).attr("id");

    //alert("We are  good to go");
    $.ajax({
      method: 'POST',
      url: `/todos/delete/${id}`,
      success: function(result){
        alert("Everything looked good. The todo is deleted");
        alert(result.result);
      },
      error: function(error){
        console.log("there was an error doing this operation", error);
      }
    });
  });

  //add new todo list to form upon user submission
  // $(".deleteButton").on("click", function (event) {
  //   event.preventDefault();
  //   $(this).parent().remove();
  //   console.log("HERE");
  //   console.log("🚀 ~ file: app.js ~ line 78 ~ event", event)


  //   // $.ajax({ method: "POST", url: `/todo/:${}/delete`).then(
  //   //   (response) => {
  //   //     console.log(response);
  //   //     $(".new.todo input").val("");
  //   //     loadToDos();
  //   //   }
  //   // );
  // });



  //toggle buttons for each category
  // const toggleButton = $(".collapsible");
  // function toggleToDoList(category) {
  //   $(`.collapsible.${category} label`).slideToggle(1000);
  //   $(`.collapsible.${category} article`).slideToggle(1000);
  // }
=======
  // toggle buttons for each category
  function toggleToDoList(category) {
    $(`.collapsible.${category}`).click(() => {
      $(`.${category}.todos`).slideToggle();
    });
  }
>>>>>>> origin/master

  toggleToDoList("watch");
  toggleToDoList("read");
  toggleToDoList("buy");
  toggleToDoList("eat");
});
