// Função para criar colunas com conteúdo dinâmico
class Column {
  constructor(id, classes, content) {
    this.id = id;
    this.classes = classes;
    this.content = content;
  }

  createColumn() {
    const column = document.createElement('div');
    column.id = this.id;
    column.className = `col ${this.classes}`;
    column.innerHTML = this.content;
    return column;
  }
}

// Função principal para renderizar o conteúdo
export function renderMain() {
  const main = document.createElement('main');

  // Criação das colunas com o conteúdo específico
  const textContent = `
  <div data-aos="fade-down-right" data-aos-duration="2000">
    <p>Hello, I’m Maryane</p>
    <h1>Backend Developer</h1>
    <p>based in Brazil.</p>
    <a class="button-container" href="https://drive.google.com/file/d/1HRn4e42Oz6NhusOEFWbM-f0RkZp5ubwk/view?usp=sharing" target="_blank">
      <img class="button" alt="resume">
      <img class="button-hover" alt="resume">
    </a>
    </div>
  `;
  const avatarContent = `
    <div  data-aos="fade-up-left" data-aos-duration="2000" class="avatar-container">
      <img class="profile img-fluid" alt="profile">
    </div>
  `;

  const textColumn = new Column("textColumn", "col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0", textContent);
  const avatarColumn = new Column("avatarColumn", "col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2", avatarContent);

  // Criando a estrutura de layout
  main.innerHTML = ` 
    <div class="container text-center mt-5 pb-3 cemvh">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
    
  `;

  // Adicionando colunas ao layout
  const row = main.querySelector('.row');
  row.appendChild(textColumn.createColumn());
  row.appendChild(avatarColumn.createColumn());

  // Adiciona as classes de animação e configurações de imagens após carregar
  window.addEventListener('load', () => {
    document.querySelector('.button').setAttribute('src', 'assets/images/button.svg');
    document.querySelector('.button-hover').setAttribute('src', 'assets/images/button-hover.svg');
    document.querySelector('.profile').setAttribute('src', 'https://imgur.com/RBvgSot.png');

    //document.getElementById('textColumn').classList.add('slide-in-left');
    //document.getElementById('avatarColumn').classList.add('slide-in-right');
  });

  // Anexa o elemento main ao app
  document.querySelector('#app').appendChild(main);
}
