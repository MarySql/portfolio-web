export function renderArticle() {
  const article = document.createElement('article');
  article.id = 'work';

  // Define o título
  const textTitle = `
    <h2>Work.</h2>
  `;

  // Cria a estrutura HTML
  article.innerHTML = `
    <div class="container text-center">
      <div class="text-start mt-5 pb-5">
        ${textTitle}
      </div>
      <div class="row g-2" id="image-grid">
        <div data-aos="fade-right" class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div data-aos="fade-left" class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div data-aos="fade-right" class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div data-aos="fade-left" class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div data-aos="fade-right" class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div data-aos="fade-left" class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        
      </div>
    </div>
  `;

  // Adiciona o artigo ao container #app
  document.querySelector('#app').appendChild(article);

  // Dados dinâmicos: URLs de imagens, textos descritivos e links de redirecionamento
  const images = [
    { url: 'https://imgur.com/N1Z8bKi.jpeg', text: 'DevResume', link: 'https://devresume-nine.vercel.app/' },
    { url: 'https://github.com/user-attachments/assets/80753c4e-9f3f-4c5e-82ed-9d8be2be53ce', text: 'Blogeek', link: 'https://github.com/MarySql/blog' },
    { url: 'https://github.com/user-attachments/assets/85311731-d875-4e2f-9706-f28729b01b8f', text: 'MedConnect', link: 'https://github.com/MarySql/medconnect.web' },
    { url: 'https://github.com/user-attachments/assets/9354fe0c-8070-48b8-9be9-d3926bafc502', text: 'Todo-list', link: 'https://marysql.github.io/Projetos/Weather/' },
    { url: 'https://github.com/user-attachments/assets/f80bdc0c-88fd-4857-9de1-531a6a6ce646', text: 'Cat Facts', link: 'https://github.com/MarySql/cat-facts' },
    { url: 'https://imgur.com/wia4ZLk.jpeg', text: 'Last Friend', link: 'https://github.com/MarySql/last-friend' }
  ];

  // Seleciona todas as colunas dentro do `image-grid`
  const columns = document.querySelectorAll('#image-grid .col-6');

  // Itera sobre cada coluna e injeta a imagem, o link e o texto
  images.forEach((item, index) => {
    if (columns[index]) {
      // Seleciona o contêiner de padding na coluna
      const paddingDiv = columns[index].querySelector('.p-3');
      paddingDiv.innerHTML = ''; // Limpa o conteúdo padrão

      // Cria o elemento de link que envolverá a imagem
      const link = document.createElement('a');
      link.href = item.link;
      link.target = '_blank'; // Abre o link em uma nova aba

      // Cria o elemento de imagem
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.text;
      img.className = 'img-fluid mb-2 hover-grow work-icon';

      // Adiciona a imagem dentro do link
      link.appendChild(img);

      // Cria o elemento de texto
      const textDiv = document.createElement('div');
      textDiv.className = 'text-muted';
      textDiv.innerText = item.text;

      // Adiciona o link (com a imagem) e o texto ao `paddingDiv`
      paddingDiv.appendChild(link);
      paddingDiv.appendChild(textDiv);
    }
  });
}
