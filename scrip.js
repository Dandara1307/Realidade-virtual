document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll("a-box");
  const spheres = document.querySelectorAll("a-sphere");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Ação ao clicar no primeiro objeto
      console.log("Clicou no primeiro objeto. Exibindo vídeo...");
      // Lógica para exibir um vídeo ou outra mídia
    });
  });

  spheres.forEach((sphere) => {
    sphere.addEventListener("click", function () {
      // Ação ao clicar no segundo objeto
      console.log(
        "Clicou no segundo objeto. Exibindo informações adicionais..."
      );
      // Lógica para exibir informações detalhadas
    });
  });
});
