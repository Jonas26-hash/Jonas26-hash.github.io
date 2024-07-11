var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })

  document.querySelectorAll('.btn-1[data-target]').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll('.btn-2[data-target]').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });

  });

});

// Función para mostrar la notificación
function showNotification() {
  var notification = document.getElementById('cart-notification');
  notification.style.display = 'block';
  setTimeout(function() {
      notification.style.display = 'none';
  }, 3000); // Tiempo en milisegundos (3 segundos en este ejemplo)
}

// Captura todos los botones "Agregar al Carrito"
var addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
      showNotification();
      // Aquí iría tu lógica para agregar el producto al carrito
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", (event) => {
          const productElement = event.target.closest(".product");
          const product = {
              name: productElement.dataset.name,
              price: productElement.dataset.price,
              image: productElement.dataset.image
          };
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          showNotification("Producto agregado al carrito");
      });
  });

  function showNotification(message) {
      const notification = document.createElement("div");
      notification.classList.add("notification");
      notification.textContent = message;
      document.body.appendChild(notification);
      setTimeout(() => {
          notification.remove();
      }, 3000);
  }
});