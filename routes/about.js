// Função principal para renderizar o conteúdo
export function renderAbout() {   
  const about = document.createElement('section');
  about.id = 'about'; // Adicionando um ID para a seção

  const textAbout = `
    <h2 class="pb-3">About me.</h2>
    <p id="discribe">Hi! I'm Maryane Soares, a Computer Science student and a technology enthusiast. I'm interested in web development, especially in JavaScript and frameworks like Svelte. I like to explore new ideas and create projects that positively impact people's lives. I'm also a cat lover and always try to learn something new every day. <i class="fa-solid fa-book-open" style="color: #744f78;"></i> <i class="fa-solid fa-heart" style="color: #744f78;"></i> </p>
  `;
  
  about.innerHTML = `
  <div class="container text-center mt-5">
    <div class="text-start row justify-content-center align-items-center">
      <div class="col-12">
        ${textAbout}
      </div>
    </div>
    <canvas id="skillsChart"></canvas> 
  </div>
`;


  document.querySelector('#app').appendChild(about);

  // Chamada da função para renderizar o gráfico
  renderSkillsChart();
}

// Função para renderizar o gráfico de habilidades
function renderSkillsChart() {
  const ctx = document.getElementById('skillsChart').getContext('2d');

  // Aumenta a largura e a altura manualmente
  ctx.canvas.width = ctx.canvas.clientWidth; // Define a largura para o clientWidth
  ctx.canvas.height = 300; // Define uma altura fixa para o canvas

  const skillsChart = new Chart(ctx, {
      type: 'bar', // Tipo de gráfico
      data: {
          labels: ['React', 'Bootstrap', 'JavaScript', 'HTML/CSS', 'Sql'],
          datasets: [{
              label: 'Skill levels',
              data: [40, 60, 70, 90, 45], // Níveis de conhecimento (0-100)
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true, // Torna o gráfico responsivo
          maintainAspectRatio: false, // Permite que a altura do gráfico varie
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100 // Define o máximo
              }
          }
      }
  });
}
