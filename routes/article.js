export function renderArticle() {
  const article = document.createElement('article');
  article.id = 'work';

  // Define o título do artigo
  const textTitle = `
    <h2>Work.</h2>
  `;

  // Cria a estrutura HTML do artigo
  article.innerHTML = `
    <div class="container text-center">
      <div class="text-start mt-5 pb-5">
        ${textTitle}
      </div>
      <div class="row g-2" id="image-grid">
        <div class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
        <div class="col-6">
          <div class="p-3">Custom column padding</div>
        </div>
      </div>
    </div>
  `;

  // Adiciona o artigo ao container #app
  document.querySelector('#app').appendChild(article);

  // Dados dinâmicos: URLs de imagens, textos descritivos e links de redirecionamento
  const images = [
    { url: 'https://i.imgur.com/VduM5Fr.jpeg', text: 'Render', link: 'https://github.com/MarySql/proj_reemb/tree/main' },
    { url: 'https://i.imgur.com/qSWN3Xt.jpeg', text: 'Zingen', link: 'https://github.com/MarySql/proj_landing_app' },
    { url: 'https://i.imgur.com/7n1mgNz.jpeg', text: 'Estrelas do amanhã', link: 'https://github.com/MarySql/proj_matricula' },
    { url: 'https://i.imgur.com/QKFWVHh.jpeg', text: 'Weather', link: 'https://marysql.github.io/Projetos/Weather/' }, { url: 'https://i.imgur.com/8D9I1od.jpeg', text: 'Budget Buddy', link: 'https://github.com/MarySql/budget-buddy' }

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
      img.className = 'img-fluid mb-2 hover-grow';

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
