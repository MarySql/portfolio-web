export function renderFooter() {
  const footer = document.createElement('footer');
  footer.id = 'contact';

  // Define o título do footer
  const textTitle = `<h2>Contact.</h2>`;

  // Define as informações de contato
  const contactInfo = `
    <ul class="list-unstyled">
      <li><strong>Email:</strong>&nbsp;marysql.contato@gmail.com</li>
      <li><strong>WhatsApp:</strong>&nbsp;(11) 9 6721-1169</li>
      <li><strong>LinkedIn:</strong>&nbsp;<a href="https://www.linkedin.com/in/marysql/" target="_blank">Maryane Soares</a></li>
      <li><strong>GitHub:</strong>&nbsp;<a href="https://github.com/MarySql" target="_blank">MarySql</a></li>
    </ul>
  `;

  // Cria a estrutura HTML do footer
  footer.innerHTML = `
    <div class="container text-center">
      <div class="text-start mt-5 pb-5 pt-5">
        ${textTitle}
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="2000" class="row g-3 align-items-center">
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
  img.src = 'assets/images/profile.svg'; // Caminho da sua imagem
  img.alt = 'Descrição da imagem';
  img.classList.add('img-fluid');
  img.classList.add('contact-img'); 
  imageContainer.appendChild(img);
}
