(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();particlesJS("particles-js",{particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#744f78"},shape:{type:"star",stroke:{width:0,color:"#fff"}},opacity:{value:.8,random:!0},size:{value:4,random:!0},line_linked:{enable:!1},move:{enable:!0,speed:1,direction:"bottom",random:!0,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1}},modes:{repulse:{distance:80}}},retina_detect:!0});function m(){const s=document.createElement("header");s.className="py-3";const t=document.createElement("div");t.className="container d-flex justify-content-between align-items-center",t.innerHTML=`
    <a class="logo" href="#">Maryane Soares</a>
    <nav class="navbar d-none d-md-block">
      <ul class="navbar-nav flex-row gap-3">
        <li class="nav-item">
          <a class="nav-link active" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#work">Work</a>
        </li>
      </ul>
    </nav>
    <div class="d-flex align-items-center">
      <a href="https://www.instagram.com/maryane.py/" target="_blank" class="me-3 fa-2x"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://github.com/MarySql" target ="_blank" class="me-3 fa-2x"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/maryane-soares-1b4642327/" target="_blank" class="me-3"><i class="fa-brands fa-linkedin fa-2x"></i></a>
    </div>
  `,s.appendChild(t),document.querySelector("#app").appendChild(s)}class d{constructor(t,a,n){this.id=t,this.classes=a,this.content=n}createColumn(){const t=document.createElement("div");return t.id=this.id,t.className=`col ${this.classes}`,t.innerHTML=this.content,t}}function u(){const s=document.createElement("main"),t=`
  <div data-aos="fade-down-right" data-aos-duration="2000">
    <p>Hello, I’m Maryane</p>
    <h1>Backend Developer</h1>
    <p>based in Brazil.</p>
    <a class="button-container" href="https://drive.google.com/file/d/1HRn4e42Oz6NhusOEFWbM-f0RkZp5ubwk/view?usp=sharing" target="_blank">
      <img class="button" alt="resume">
      <img class="button-hover" alt="resume">
    </a>
    </div>
  `,a=`
    <div  data-aos="fade-up-left" data-aos-duration="2000" class="avatar-container">
      <img class="profile img-fluid" alt="profile">
    </div>
  `,n=new d("textColumn","col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0",t),e=new d("avatarColumn","col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2",a);s.innerHTML=` 
    <div class="container text-center mt-5 pb-3 cemvh">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
    
  `;const i=s.querySelector(".row");i.appendChild(n.createColumn()),i.appendChild(e.createColumn()),window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/images/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/images/button-hover.svg"),document.querySelector(".profile").setAttribute("src","https://imgur.com/a/xLtXG4j.jpeg")}),document.querySelector("#app").appendChild(s)}function v(){const s=document.createElement("section");s.id="about";const t='<h2 class="pb-5">About me.</h2>',a='<h3 class="scroll-text">A long time ago in a galaxy far, far away... </h3>',n=`
    <p class="scroll-text">Maryane Soares began her journey in the world of programming, always seeking creative and efficient solutions. With a passion for JavaScript, React, and tools like Vite and Bootstrap, she builds immersive and dynamic experiences. She believes persistence and innovation are key to success. In addition to her technical skills, Maryane is an advocate for digital inclusion and accessibility. Ready to face new challenges, she continues her mission to transform the digital world.</p>
  `,e=`
  <div class="skills-icons text-center mt-4">

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


          
    




`;s.innerHTML=`
    <div class="container text-center mt-5">
      <div class="text-start row justify-content-center align-items-center">
        ${t}
        <div class="col-12 bg-star mb-5">
          ${a}
          ${n}
        </div>
      </div>
      ${e}
    </div>
  `,document.querySelector("#app").appendChild(s),document.addEventListener("scroll",function(){document.querySelectorAll(".scroll-text").forEach(function(o){const c=o.getBoundingClientRect().top,r=window.innerHeight/1.5;c<r&&(o.style.animation="subtleScrollEffect 2s forwards ease-out")})})}function g(){const s=document.createElement("article");s.id="work";const t=`
    <h2>Work.</h2>
  `;s.innerHTML=`
    <div class="container text-center">
      <div class="text-start mt-5 pb-5">
        ${t}
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
  `,document.querySelector("#app").appendChild(s);const a=[{url:"https://imgur.com/N1Z8bKi.jpeg",text:"DevResume",link:"https://devresume-nine.vercel.app/"},{url:"https://github.com/user-attachments/assets/80753c4e-9f3f-4c5e-82ed-9d8be2be53ce",text:"Blogeek",link:"https://github.com/MarySql/blog"},{url:"https://github.com/user-attachments/assets/85311731-d875-4e2f-9706-f28729b01b8f",text:"MedConnect",link:"https://github.com/MarySql/medconnect.web"},{url:"https://github.com/user-attachments/assets/9354fe0c-8070-48b8-9be9-d3926bafc502",text:"Todo-list",link:"https://marysql.github.io/Projetos/Weather/"},{url:"https://github.com/user-attachments/assets/f80bdc0c-88fd-4857-9de1-531a6a6ce646",text:"Cat Facts",link:"https://github.com/MarySql/cat-facts"},{url:"https://imgur.com/wia4ZLk.jpeg",text:"Last Friend",link:"https://github.com/MarySql/last-friend"}],n=document.querySelectorAll("#image-grid .col-6");a.forEach((e,i)=>{if(n[i]){const o=n[i].querySelector(".p-3");o.innerHTML="";const c=document.createElement("a");c.href=e.link,c.target="_blank";const r=document.createElement("img");r.src=e.url,r.alt=e.text,r.className="img-fluid mb-2 hover-grow work-icon",c.appendChild(r);const l=document.createElement("div");l.className="text-muted",l.innerText=e.text,o.appendChild(c),o.appendChild(l)}})}function h(){const s=document.createElement("footer");s.id="contact";const t="<h2>Contact.</h2>",a=`
    <ul class="list-unstyled">
      <li><strong>Email:</strong>&nbsp;marysql.contato@gmail.com</li>
      <li><strong>WhatsApp:</strong>&nbsp;(11) 9 6721-1169</li>
      <li><strong>LinkedIn:</strong>&nbsp;<a href="https://www.linkedin.com/in/marysql/" target="_blank">Maryane Soares</a></li>
      <li><strong>GitHub:</strong>&nbsp;<a href="https://github.com/MarySql" target="_blank">MarySql</a></li>
    </ul>
  `;s.innerHTML=`
    <div class="container text-center">
      <div class="text-start mt-5 pb-5 pt-5">
        ${t}
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
          <div class="p-3">${a}</div>
        </div>
      </div>
      <div class="text-center mt-4">
        <p class="small">&copy; 2024 Maryane Soares. Todos os direitos reservados.</p>
      </div>
    </div>
  `,document.querySelector("#app").appendChild(s);const n=document.querySelector("#image-container .p-3"),e=document.createElement("img");e.src="assets/images/profile.svg",e.alt="Descrição da imagem",e.classList.add("img-fluid"),e.classList.add("contact-img"),n.appendChild(e)}m();u();v();g();h();
