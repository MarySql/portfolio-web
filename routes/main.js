// main.js
export function renderMain() {
  const main = document.createElement('main');
  main.innerHTML = `
<div class="container text-center mt-5">
  <div class="text-start row justify-content-center align-items-center">

    <!-- Coluna de texto -->
    <div id="textColumn" class="col d-flex flex-column ">
      <p>Hello, I’m Maryane</p>
      <h1>Fullstack Developer</h1>
      <p>based in Brazil.</p>
      <a class="button-container" href="#">
        <img class="button" src="assets/button.svg" alt="resume">
        <img class="button-hover" src="assets/button-hover.svg" alt="resume">
      </a>
    </div>

    <!-- Coluna de avatar -->
    <div id="avatarColumn" class="col d-flex justify-content-center align-items-center avatar">
      <div class="position-relative avatar-container">
        <img class="profile" src="assets/profile.png" alt="profile">
        <img class="contour" src="assets/contour.svg" alt="#">
        <img class="cross" src="assets/cross.svg" alt="#">
        <img class="retangles" src="assets/retangles.svg" alt="#">
      </div>
    </div>

  </div>
</div>


  `;

   // Adiciona as classes de animação ao carregar a página
   window.addEventListener('load', () => {
    document.getElementById('textColumn').classList.add('slide-in-left');
    document.getElementById('avatarColumn').classList.add('slide-in-right');
  });
  document.querySelector('#app').appendChild(main);
}
