document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    darkModeToggle.addEventListener("change", function () {
      body.classList.toggle("dark-mode");
      document.querySelectorAll(".electronics, .books, .clothes, .footer-clean").forEach(category => {
        category.classList.toggle("dark-mode");
      });      

      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("bg-body-tertiary");
      navbar.classList.toggle("bg-dark");
      document.querySelector(".navbar-brand").classList.toggle("text-light");
      document.querySelectorAll(".nav-link").forEach(function(navLink) {
        navLink.classList.toggle("text-light");
      });
      const d = document.querySelectorAll(".nav-link:hover");
      d.forEach(element => {
        element.style.backgroundColor = "black";
      });
    });
  
});


const cardsContainer = document.querySelector(".container-card");

cardsContainer.addEventListener("mouseover", (e) => {
  const target = e.target.closest(".maincard");

  if (!target) return;

  cardsContainer.querySelectorAll(".maincard").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});

cardsContainer.addEventListener("mouseout", (e) => {
  const target = e.target.closest(".maincard");

  if (!target) return;

  target.classList.remove("active");
});



document.addEventListener("DOMContentLoaded", function() {
  function createCard(imageSrc, title, description, price) {
      return `
      <div class="card">
          <div class="card-img"><img src="${imageSrc}"></div>
          <div class="card-info">
              <p class="text-title">${title}</p>
              <p class="text-body">${description}</p>
          </div>
          <div class="card-footer">
              <span class="text-title">${price}</span>
              <div class="card-button">
              <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
              <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
          </svg>
              </div>
          </div>
      </div>
      `;
  }

  const cardsData = [
      {
          imageSrc: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Max-Deep-Purple-PDP-Image-493177798-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTMwMnxpbWFnZS9qcGVnfGltYWdlcy9oMTAvaDBmLzEwMDE2OTY0NzcxODcwLmpwZ3xjNzIwNzBhNmY3ZTAxM2ZjZWI2YWYxMzFjMWRlY2I3NDllZmM4MjcyZGI5MWRkYzc2OTI2OTQ3MDQ4M2RjM2Q4",
          title: "Apple iPhone 14 Pro Max",
          description: "128 GB, Deep Purple",
          price: "Rs.129,990"
      },
      {
          imageSrc: "https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
          title: "Sony WH-1000MX4",
          description: "Over-ear headphones with noise cancellation",
          price: "Rs.9999"
      },
      {
          imageSrc: "https://www.suryaelectronics.in/img/Product/Main/SamsungHomeappliancesFAFL.jpg",
          title: "Samsung Washing Machine",
          description: "7 Kg Front Loading Fully Automatic Washing Machine",
          price: "Rs.35,999"
      },
      {
          imageSrc: "https://mm.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4c3cb7d7/JBL_VIBE_WAVE_200TWS_Product%20Image_Open%20Case_Black.png?sw=537&sfrm=png",
          title: "JBL Tune 230NC TWS",
          description: "True wireless earbuds with active noise cancellation",
          price: "Rs.4,999"
      }
  ];

  const cardContainer = document.getElementById("card-scroll-container");
  cardsData.forEach(cardData => {
      const cardHTML = createCard(cardData.imageSrc, cardData.title, cardData.description, cardData.price);
      cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
});
