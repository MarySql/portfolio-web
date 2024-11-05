export function renderFooter() {
  const footer = document.createElement('footer');
  footer.id = 'contact';

  // Define o título do footer
  const textTitle = `<h2>Contact.</h2>`;

  // Define as informações de contato
  const contactInfo = `
    <ul class="list-unstyled">
      <li><strong>Email:</strong>&nbsp;mary.mitsuri250@gmail.com</li>
      <li><strong>Telefone:</strong>&nbsp;(11) 9 4893-8423</li>
      <li><strong>LinkedIn:</strong>&nbsp;<a href="https://www.linkedin.com/in/maryane-soares-1b4642327/" target="_blank">Maryane Soares</a></li>
      <li><strong>GitHub:</strong>&nbsp;<a href="https://github.com/MarySql" target="_blank">MarySql</a></li>
    </ul>
  `;

  // Cria a estrutura HTML do footer
  footer.innerHTML = `
    <div class="container text-center">
      <div class="text-start mt-5 pb-5 pt-5">
        ${textTitle}
      </div>
      <div class="row g-3 align-items-center">
        <!-- Coluna da Imagem -->
        <div class="col-12 col-md-6 text-start" id="image-container">
          <div class="p-3">
            <!-- A imagem será injetada aqui -->
          </div>
        </div>
        
        <!-- Coluna de Informações de Contato -->
        <div class="col-12 col-md-6 text-start">
          <div class="p-3">${contactInfo}</div>
        </div>
      </div>
      <div class="text-center mt-4">
        <p class="small">&copy; 2024 Maryane Soares. Todos os direitos reservados.</p>
      </div>
    </div>
  `;

  // Adiciona o footer ao elemento #app
  document.querySelector('#app').appendChild(footer);

  // Injeta a imagem depois de o footer estar no DOM
  const imageContainer = document.querySelector('#image-container .p-3');
  const img = document.createElement('img');
  img.src = 'assets/images/contact.svg'; // Caminho da sua imagem
  img.alt = 'Descrição da imagem';
  img.classList.add('img-fluid'); // Torna a imagem responsiva
  imageContainer.appendChild(img);
}
