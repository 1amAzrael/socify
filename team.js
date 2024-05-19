document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      card.addEventListener('mouseenter', function () {
          card.querySelector('.overlay').style.opacity = "0.7";
      });

      card.addEventListener('mouseleave', function () {
          card.querySelector('.overlay').style.opacity = "0";
      });
  });
});
