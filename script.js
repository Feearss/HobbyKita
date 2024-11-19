document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".name-button");
  const hobbies = document.querySelectorAll(".hobby");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      hobbies.forEach(hobby => {
        hobby.style.display = "none"; // Sembunyikan semua hobi
      });

      const targetId = button.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        target.style.display = "block"; // Tampilkan hobi yang dipilih
      }
    });
  });
});

