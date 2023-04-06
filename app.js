//Task 1
//Q1,2,3
fetch("https://api.github.com/users/dagan789")
  .then((response) => response.json())
  .then((dagan) => {
    //console.log(dagan.public_repos);
    // console.log(dagan.followers);
    fetch(dagan.followers_url)
      .then((response) => response.json())
      .then((followers) => {
        followers.forEach((follower) => {
          //  console.log(follower.login);
        });
      });
  });

// Task 2
// Q1
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((comments) => {
    //console.log(comments.length);
  });

//Q2
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    // console.log(photos.length);
  });

//Q3,4
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      //   console.log(user.name);
      //   console.log(user.email);
      //console.log(user.address.city);
    });
  });

//Q5,6
fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
  .then((response) => response.json())
  .then((todos) => {
    // console.log(todos.length);
    todos.forEach((todo) => {
      //  console.log(todo.title);
      //  console.log(todo.id);
    });
  });

//Q7
fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
  .then((response) => response.json())
  .then((todos) => {
    let userid = [];
    todos.forEach((todo) => {
      userid.push(todo.userId);
    });
    let unique_userid = [...new Set(userid)];
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        for (let i = 0; (len = unique_userid.length), i < len; i++) {
          users.forEach((user) => {
            if (user.id == unique_userid[i]) {
              // console.log(user.name);
            }
          });
        }
      });
  });

//Q8
fetch(
  "https://jsonplaceholder.typicode.com/albums?title=quidem%20molestiae%20enim"
)
  .then((response) => response.json())
  .then((albums) => {
    albums.forEach((album) => {
      let userid = album.userId;
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          users.forEach((user) => {
            if (user.id == userid) {
              // console.log(user.name);
            }
          });
        });
    });
  });
