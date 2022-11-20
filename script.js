fetch(
  "https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/books-shop/books.json"
) //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//main parts

const MAIN = document.getElementsByTagName("main");
