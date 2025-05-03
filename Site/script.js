
function filterBooks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
      const text = article.innerText.toLowerCase();
      article.style.display = text.includes(input) ? "block" : "none";
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.star-rating').forEach(container => {
      const stars = container.querySelectorAll('.star');
      const output = container.nextElementSibling;
  
      stars.forEach(star => {
        star.addEventListener('click', () => {
          const rating = parseInt(star.dataset.value);
          stars.forEach(s => {
            s.classList.toggle('selected', parseInt(s.dataset.value) <= rating);
          });
          const book = container.dataset.book || "this book";
          output.textContent = `You rated ${book} ${rating} out of 5 stars.`;
        });
      });
    });
  });
  