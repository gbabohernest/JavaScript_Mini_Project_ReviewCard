// local reviews data
// array objects
const reviews = [
  {
    id: 1,
    name: "Sergio Hillton",
    job: "web developer",
    img: "https://images.unsplash.com/photo-1610430238543-79c8a825a0fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlaXJkJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Labore quisquam itaque obcaecati voluptas vel suscipit, facere quod cumque distinctio magni animi velit officiis, voluptatum modi quos. Ipsam repudiandae voluptate reiciendis!"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Vel aut distinctio obcaecati rerum similique, optio et architecto suscipit ipsum molestias  assumenda est mollitia vero facilis dicta ex voluptates expedita. Est tu van lascout swrint"
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Labore quisquam itaque obcaecati voluptas vel suscipit, facere quod cumque distinctio magni animi velit officiis, voluptatum modi quos. Ipsam repudiandae voluptate reiciendis!"
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHx0ZWNoJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "Quo impedit sint explicabo esse est, odit iusto hic quibusdam dignissimos, temporibus deleniti? Voluptatem quisquam at ducimus voluptatibus sed tempore a, quae ipsam,"
  }
];

// selecting items
const reviewImg = document.getElementById("img_2");
const reviewAuthor = document.getElementById("author");
const reviewJob = document.getElementById("job");
const reviewInfo = document.getElementById("info");

// buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentReviewsItem = 0;

// load intital item by setting eventListener on window obj
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show person based on review item
function showPerson() {
  const reviewItem = reviews[currentReviewsItem];
  reviewImg.src = reviewItem.img;
  reviewAuthor.textContent = reviewItem.name;
  reviewJob.textContent = reviewItem.job;
  reviewInfo.textContent = reviewItem.text;
}

// next button
nextBtn.addEventListener("click", function () {
  currentReviewsItem++;
  if (currentReviewsItem > reviews.length - 1) {
    currentReviewsItem = 0;
  }
  showPerson();
});

// prev button
prevBtn.addEventListener("click", function () {
  currentReviewsItem--;
  if (currentReviewsItem < 0) {
    currentReviewsItem = reviews.length - 1;
  }
  showPerson();
});

// random btn
randomBtn.addEventListener("click", function (event) {
  const btnRandom = randomSelection();
  currentReviewsItem = btnRandom;
  showPerson();
});

// select items randomly
function randomSelection() {
  return Math.floor(Math.random() * reviews.length);
}
