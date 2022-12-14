const BOOKS = [
  {
    author: "Douglas Crockford",
    imageLink:
      "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "JavaScript: The Good Parts: The Good Parts",
    price: 30,
    description:
      "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
  },
  {
    author: "David Herman",
    imageLink:
      "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title:
      "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    price: 22,
    description:
      "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
  },
  {
    author: "David Flanagan",
    imageLink:
      "https://images.pexels.com/photos/2228582/pexels-photo-2228582.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "JavaScript: The Definitive Guide",
    price: 40,
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
  },
  {
    author: " Eric Elliott",
    imageLink:
      "https://images.pexels.com/photos/3990897/pexels-photo-3990897.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Programming JavaScript Applications",
    price: 19,
    description:
      "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
  },
  {
    author: "Addy Osmani",
    imageLink:
      "https://images.pexels.com/photos/3747497/pexels-photo-3747497.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Learning JavaScript Design Patterns",
    price: 32,
    description:
      "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    author: "Boris Cherny",
    imageLink:
      "https://images.pexels.com/photos/4547588/pexels-photo-4547588.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Programming TypeScript",
    price: 28,
    description:
      "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
  },
  {
    author: "Alex Banks, Eve Porcello",
    imageLink:
      "https://images.pexels.com/photos/5095897/pexels-photo-5095897.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Learning React, 2nd Edition",
    price: 25,
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
  },
  {
    author: "Bradley Meck Alex Young and Mike Cantelon",
    imageLink:
      "https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Node.js in Action",
    price: 38,
    description:
      "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
  },
  {
    author: "Kyle Simpson",
    imageLink:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "You Don't Know JS Yet: Get Started",
    price: 26,
    description:
      "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
  },
  {
    author: "John Resig and Bear Bibeault",
    imageLink:
      "https://images.pexels.com/photos/9758166/pexels-photo-9758166.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Secrets of the JavaScript Ninja",
    price: 33,
    description:
      "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
  },
];

/* DETAILS ABOUT CURRENT ORDER */
let ORDER = [];

const countingHowManySameBooks = (titleToCheck, orderArray) => {
  let counter = 0;
  for (const book of orderArray) {
    if (book.title === titleToCheck) counter += 1;
  }
  return counter;
};

let CART_QUANTITY = ORDER.length;

const recountNumberOfBooks = () => {
  return ORDER.length;
};

const recountTotal = () => {
  return ORDER.reduce((sum, book) => sum + book.price, 0);
};

const removeFromCart = (bookToRemove) => {
  ORDER = ORDER.filter(function (bookInCart) {
    return bookInCart.title != bookToRemove;
  });
};

const changeCartMiniStatus = () => {
  const cartStat = document.getElementById("totalAmount");
  if (cartStat) {
    cartStat.innerHTML = recountNumberOfBooks();
  }
};

let ORDER_STATUS = "ordering";

//main parts

const MAIN = document.getElementsByTagName("main");
const HEADER = document.createElement("div");
const CATALOG = document.createElement("div");
const ORDER_TAB = document.createElement("div");

const form = document.querySelector(".FORM");
form.style.display = "none";

const reloadPage = () => {
  if (ORDER_STATUS === "ordering") {
    if (!MAIN[0].contains(HEADER)) {
      MAIN[0].append(HEADER);
    }
    MAIN[0].append(ORDER_TAB);
    MAIN[0].append(CATALOG);
  } else if (ORDER_STATUS === "form-filling") {
    MAIN[0].prepend(HEADER);
    form.style.display = "inline-block";
    if (MAIN[0].contains(CATALOG)) {
      MAIN[0].removeChild(CATALOG);
    }
    if (MAIN[0].contains(ORDER_TAB)) {
      MAIN[0].removeChild(ORDER_TAB);
    }
  }
};
reloadPage();

// functions for ordering

ORDER_TAB.classList.add("order-tab");

const showCurrentCartState = () => {
  ORDER_TAB.innerHTML = "";
  const titleOfOrderTab = document.createElement("div");
  titleOfOrderTab.innerHTML = `<h4>Your order:</h4>`;
  ORDER_TAB.appendChild(titleOfOrderTab);
  ORDER.map((ordered_book) => {
    let idOfBook = `ID${ordered_book.title}`;

    if (ORDER_TAB.contains(document.getElementById(idOfBook))) {
      const countOfSameBook = countingHowManySameBooks(
        ordered_book.title,
        ORDER
      );
      const existingDetailsAboutBook = document.getElementById(idOfBook);
      const counter = document.createElement("div");
      counter.innerHTML = `<span>${countOfSameBook}</span>`;
      existingDetailsAboutBook.appendChild(counter);
    } else {
      const infoAboutBook = document.createElement("div");
      infoAboutBook.id = idOfBook;
      infoAboutBook.classList.add("order-tab__book-info");
      infoAboutBook.innerHTML = `<img src=${
        ordered_book.imageLink
      }/><div class="order-tab__book-info-price">$${ordered_book.price.toFixed(
        2
      )}</div><p>${ordered_book.title}</p>`;
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML =
        "<img src='https://cdn-icons-png.flaticon.com/512/75/75519.png' alt='cancel'/>";
      // -----------------> remove btn addlist
      removeBtn.addEventListener("click", () => {
        removeFromCart(ordered_book.title);
        showCurrentCartState();
        recountNumberOfBooks();
        changeCartMiniStatus();
      });
      infoAboutBook.appendChild(removeBtn);
      ORDER_TAB.appendChild(infoAboutBook);
    }
  });
  const toPay = recountTotal();
  const priceTotalInCart = document.createElement("h5");
  priceTotalInCart.innerHTML = `TOTAL: $${toPay.toFixed(2)}`;

  const orderBtn = document.createElement("button");
  orderBtn.innerHTML = "Order";
  orderBtn.classList.add("order-tab__order-btn");
  orderBtn.addEventListener("click", () => {
    ORDER_STATUS = "form-filling";
    reloadPage();
  });

  ORDER_TAB.appendChild(priceTotalInCart);
  ORDER_TAB.appendChild(orderBtn);
};

if (CART_QUANTITY === 0) {
  ORDER_TAB.innerHTML = "";
} else {
  showCurrentCartState();
  recountNumberOfBooks();
  changeCartMiniStatus();
}

// ---------------------------> DRAG

// content
// ---- catalog
// -------- name

const namePart = document.createElement("div");
const nameOfCatalog = document.createElement("h1");
nameOfCatalog.innerHTML = "Welcome to amazing Book Shop";
const cartBtn = document.createElement("button");
cartBtn.innerHTML =
  '<img src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" class="cart-img"/>';
const quantityElement = document.createElement("div");
cartBtn.addEventListener("click", () => {
  ORDER_STATUS = "form-filling";
  reloadPage();
});
quantityElement.innerHTML = recountNumberOfBooks();
quantityElement.id = "totalAmount";
cartBtn.appendChild(quantityElement);
namePart.appendChild(nameOfCatalog);
namePart.appendChild(cartBtn);
HEADER.appendChild(namePart);

// ------------ adding by drag

let overDrag = false;
const container = document.querySelector(".order-tab");
if (container) {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    overDrag = true;
  });
}

// -------- books
const bookGrid = document.createElement("div");

BOOKS.map((book) => {
  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details");
  //---------------cover
  const cover = document.createElement("img");
  cover.src = book.imageLink;
  cover.draggable = true;
  cover.classList.add("dragable");
  cover.addEventListener("dragend", () => {
    if (overDrag) {
      ORDER.push(book);
      showCurrentCartState();
      recountNumberOfBooks();
      changeCartMiniStatus();
    }
  });
  //------------textPart
  const detailedInfo = document.createElement("div");
  detailedInfo.classList.add("book-details__info");
  //------------title&author, price
  const detailsAboutBook = document.createElement("div");
  const author = document.createElement("h3");
  author.innerHTML = book.author;
  detailsAboutBook.appendChild(author);
  const title = document.createElement("h2");
  title.innerHTML = book.title;
  detailsAboutBook.appendChild(title);
  detailedInfo.appendChild(detailsAboutBook);
  const priceOfBook = document.createElement("h4");
  priceOfBook.innerHTML = `$${book.price.toFixed(2)}`;
  detailsAboutBook.appendChild(priceOfBook);
  //---btns
  const btns = document.createElement("div");
  btns.classList.add("book-details__btns");
  const showMoreBtn = document.createElement("button");
  showMoreBtn.id = `SHOW${book.title}`;
  showMoreBtn.innerHTML = "show more";

  // ------------------------show more interactivity
  showMoreBtn.addEventListener("click", () => {
    const descriptionText = document.createElement("div");
    descriptionText.innerHTML = book.description;
    descriptionText.classList.add("book-details__popup");
    const cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "cancel";
    cancelBtn.id = `CANCEL${book.title}`;
    cancelBtn.addEventListener("click", () => {
      descriptionText.style.display = "none";
    });
    descriptionText.appendChild(cancelBtn);
    detailedInfo.appendChild(descriptionText);
  });

  btns.appendChild(showMoreBtn);
  const addBtn = document.createElement("button");
  addBtn.id = `ADD${book.title}`;
  addBtn.innerHTML = "add to cart";
  // ----------------------- add interactivity
  addBtn.addEventListener("click", () => {
    ORDER.push(book);
    showCurrentCartState();
    recountNumberOfBooks();
    changeCartMiniStatus();
  });
  btns.appendChild(addBtn);
  detailedInfo.appendChild(btns);

  bookDetails.appendChild(cover);
  bookDetails.appendChild(detailedInfo);

  bookGrid.appendChild(bookDetails);
});

CATALOG.appendChild(bookGrid);

//style

namePart.classList.add("head-section");
namePart.style.backgroundImage =
  "url('https://images.pexels.com/photos/2925304/pexels-photo-2925304.jpeg')";

CATALOG.classList.add("catalogue");
bookGrid.classList.add("book-grid");

// FORM

form.classList.add("form");

let date = document.getElementById("date");
let today = new Date();
date.min = new Date(today.setDate(today.getDate() + 1))
  .toISOString()
  .split("T")[0];

// ------------------ validation
let valid = false;

const invalidInfo = (element) => {
  element.classList.add("error");
  element.value = "";
  element.placeholder = "The field is invalid";
  element.addEventListener("focus", () => {
    element.classList.remove("error");
    element.placeholder = "";
  });
};

const validate = function (event) {
  let failures = [];
  let fname = document.getElementById("fname");
  if (!(fname.value.length > 3) || fname.value.match(/\s+/)) {
    invalidInfo(fname);
    failures.push({ input: "fname" });
  }

  let sname = document.getElementById("sname");
  if (!(sname.value.length > 4) || sname.value.match(/\s+/)) {
    invalidInfo(sname);
    failures.push({ input: "sname" });
  }

  let street = document.getElementById("street");
  if (!(street.value.length > 4)) {
    invalidInfo(street);
    failures.push({ input: "street" });
  }

  let hnumber = document.getElementById("hnumber");
  if (
    Number(hnumber.value) < 0 ||
    hnumber.value.length <= 0 ||
    !hnumber.value.match(/^\d+/)
  ) {
    invalidInfo(hnumber);
    failures.push({ input: "hnumber" });
  }

  let fnumber = document.getElementById("fnumber");
  if (
    Number(fnumber.value) < 0 ||
    fnumber.value.length <= 0 ||
    fnumber.value.match(/^\-/)
  ) {
    invalidInfo(fnumber);
    failures.push({ input: "fnumber" });
  }

  if (document.querySelectorAll("input[type=radio]:checked").length < 1) {
    failures.push({ input: "checkbox" });
  }
  if (failures.length < 0) {
    valid = true;
  }
  return failures;
};

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    if (document.querySelectorAll("input[type=checkbox]:checked").length > 2) {
      e.preventDefault();
    }
  });
});

const send = function (ev) {
  ev.preventDefault();
  ev.stopPropagation();
  let fails = validate();
  console.log(fails);
  if (fails.length === 0) {
    document.getElementById("order-form").submit();
  } else {
    console.log("bad!");
  }
};

document.getElementById("button-submit").addEventListener("click", send);
