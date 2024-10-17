document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageCounter = document.getElementById("pageCounter");
  let currentIndex = 0;

  function updatePage() {
    pages.forEach((page, index) => {
      page.style.display = index === currentIndex ? "block" : "none"; // Mostrar solo la página actual
      page.style.zIndex = pages.length - index; // Asegurar el z-index correcto
    });
    pageCounter.textContent = `Page ${currentIndex + 1} of ${pages.length}`; // Actualizar el contador
  }

  function flipPage(direction) {
    const currentPage = pages[currentIndex];
    currentPage.classList.add("flipped");

    // Mostrar la página siguiente o anterior antes de la animación
    if (direction === "next" && currentIndex < pages.length - 1) {
      currentIndex++;
    } else if (direction === "prev" && currentIndex > 0) {
      currentIndex--;
    }

    const nextPage = pages[currentIndex];
    nextPage.style.display = "block"; // Asegurarse de que la siguiente página esté visible

    setTimeout(() => {
      updatePage(); // Mostrar la nueva página
      currentPage.classList.remove("flipped");
    }, 500); // Tiempo de la animación de giro
  }

  updatePage(); // Mostrar la primera página

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      flipPage("prev"); // Flip para la página anterior
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < pages.length - 1) {
      flipPage("next"); // Flip para la siguiente página
    }
  });
});
