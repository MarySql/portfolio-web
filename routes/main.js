// main.js
export function renderMain() {
  const main = document.createElement('main');
  main.innerHTML = `
<div class="container text-center mt-5">
  <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">

    <!-- Coluna de texto -->
    <div id="textColumn" class="col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0">
      <p>Hello, I’m Maryane</p>
      <h1>Fullstack Developer</h1>
      <p>based in Brazil.</p>
      <a class="button-container" href="#">
        <img class="button" alt="resume">
        <img class="button-hover" alt="resume">
      </a>
    </div>

    <!-- Coluna de avatar -->
    <div id="avatarColumn" class="col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2">
      <div class="avatar-container">
        <img class="profile img-fluid" alt="profile">
      </div>
    </div>

  </div>
</div>


  `;


  // Adiciona as classes de animação ao carregar a página
  window.addEventListener('load', () => {
    document.querySelector('.button').setAttribute('src', 'assets/button.svg');
    document.querySelector('.button-hover').setAttribute('src', 'assets/button-hover.svg');
    document.querySelector('.profile').setAttribute('src', 'assets/profile.png');

    document.getElementById('textColumn').classList.add('slide-in-left');
    document.getElementById('avatarColumn').classList.add('slide-in-right');
  });

  document.querySelector('#app').appendChild(main);
}
