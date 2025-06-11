// Função principal para renderizar o conteúdo
export function renderAbout() {
  const about = document.createElement('section');
  about.id = 'about'; // Adicionando um ID para a seção

  const titleAbout = `<h2 class="pb-5">About me.</h2>`;

  const titleStar = `<h3 class="scroll-text">A long time ago in a galaxy far, far away... </h3>`;

  const textAbout = `
    <p class="scroll-text">Maryane Soares began her journey in the world of programming, always seeking creative and efficient solutions. With a passion for JavaScript, React, and tools like Vite and Bootstrap, she builds immersive and dynamic experiences. She believes persistence and innovation are key to success. In addition to her technical skills, Maryane is an advocate for digital inclusion and accessibility. Ready to face new challenges, she continues her mission to transform the digital world.</p>
  `;

const skillsIcons = `
  <div class="skills-icons text-center mt-4" data-aos="fade-up">

  <h3 class="pb-2">Tools & Frameworks</h3>

  <h3 class="pb-2 ">Frontend</h3>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="60" title="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="60" title="TypeScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" title="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="60" title="Next.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="60" title="Vite"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="60" title="Tailwindcss"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60" title="HTML"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60" title="CSS"/>
          
    <h3 class="pb-2 pt-2">Backend</h3>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="60" title="Java"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="60" title="Spring Boot"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" width="60" title="Ruby"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" title="Node.js"/>
  
  <h3 class="pb-2 pt-2">DevOps</h3>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" width="60" title="Docker"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width="60" title="GitLab CI/CD"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" width="60" title="Azure" />
  <img src="https://cdn.simpleicons.org/googlecloud" width="60" title="Google Cloud Platform"/>
  
  <h3 class="pb-2 pt-2">Data</h3>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="60" title="MongoDB"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="60" title="MySQL"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" width="60" title="SQLite"/>
  </div>


          
    




`;


  // Monta o HTML final
  about.innerHTML = `
    <div class="container text-center mt-5">
      <div class="text-start row justify-content-center align-items-center">
        ${titleAbout}
        <div class="col-12 bg-star mb-5">
          ${titleStar}
          ${textAbout}
        </div>
      </div>
      ${skillsIcons}
    </div>
  `;

  document.querySelector('#app').appendChild(about);

  // Efeito de animação ao scroll
  document.addEventListener('scroll', function () {
    const scrollTexts = document.querySelectorAll('.scroll-text');
    scrollTexts.forEach(function (scrollText) {
      const boxPosition = scrollText.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;

      if (boxPosition < screenPosition) {
        scrollText.style.animation = 'subtleScrollEffect 2s forwards ease-out';
      }
    });
  });
}
