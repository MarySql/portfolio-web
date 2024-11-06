(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();function m(){const t=document.createElement("header");t.className="py-3";const a=document.createElement("div");a.className="container d-flex justify-content-between align-items-center",a.innerHTML=`
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
  `,t.appendChild(a),document.querySelector("#app").appendChild(t)}class d{constructor(a,i,s){this.id=a,this.classes=i,this.content=s}createColumn(){const a=document.createElement("div");return a.id=this.id,a.className=`col ${this.classes}`,a.innerHTML=this.content,a}}function u(){const t=document.createElement("main"),a=`
    <p>Hello, I’m Maryane</p>
    <h1>Fullstack Developer</h1>
    <p>based in Brazil.</p>
    <a class="button-container" href="#contact">
      <img class="button" alt="resume">
      <img class="button-hover" alt="resume">
    </a>
  `,i=`
    <div class="avatar-container">
      <img class="profile img-fluid" alt="profile">
    </div>
  `,s=new d("textColumn","col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0",a),e=new d("avatarColumn","col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2",i);t.innerHTML=`
    <div class="container text-center mt-5 pb-3 cemvh">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
  `;const n=t.querySelector(".row");n.appendChild(s.createColumn()),n.appendChild(e.createColumn()),window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/images/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/images/button-hover.svg"),document.querySelector(".profile").setAttribute("src","assets/images/profile.svg"),document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(t)}function p(){const t=document.createElement("section");t.id="about";const a='<h2 class="pb-5">About me.</h2>',i='<h3 class="scroll-text">A long time ago in a galaxy far, far away... </h3>',s=`
    <p class="scroll-text">Hi! I'm Maryane Soares, a Computer Science student and a technology enthusiast. I'm interested in web development, especially in JavaScript and frameworks like Svelte. I like to explore new ideas and create projects that positively impact people's lives. I'm also a cat lover and always try to learn something new every day.</p>
  `;t.innerHTML=`
  <div class="container text-center mt-5">
     <div class="text-start row    justify-content-center align-items-center">
       ${a}
      <div class="col-12 bg-star mb-5">
        ${i}
        ${s}
      </div>
    </div>
    <canvas id="skillsChart"></canvas> 
  </div>
 `,document.querySelector("#app").appendChild(t),g(),document.addEventListener("scroll",function(){document.querySelectorAll(".scroll-text").forEach(function(n){const r=n.getBoundingClientRect().top,o=window.innerHeight/1.5;r<o&&(n.style.animation="subtleScrollEffect 2s forwards ease-out")})})}function g(){const t=document.getElementById("skillsChart").getContext("2d");t.canvas.width=t.canvas.clientWidth,t.canvas.height=300,new Chart(t,{type:"bar",data:{labels:["React","Bootstrap","JavaScript","HTML/CSS","Sql"],datasets:[{label:"Skill levels",data:[40,60,70,90,45],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,max:100}}}})}function v(){const t=document.createElement("article");t.id="work";const a=`
    <h2>Work.</h2>
  `;t.innerHTML=`
    <div class="container text-center">
      <div class="text-start mt-5 pb-5">
        ${a}
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
  `,document.querySelector("#app").appendChild(t);const i=[{url:"https://i.imgur.com/VduM5Fr.jpeg",text:"Render",link:"https://github.com/MarySql/proj_reemb/tree/main"},{url:"https://i.imgur.com/qSWN3Xt.jpeg",text:"Zingen",link:"https://github.com/MarySql/proj_landing_app"},{url:"https://i.imgur.com/7n1mgNz.jpeg",text:"Estrelas do amanhã",link:"https://github.com/MarySql/proj_matricula"},{url:"https://i.imgur.com/QKFWVHh.jpeg",text:"Weather",link:"https://marysql.github.io/Projetos/Weather/"},{url:"https://i.imgur.com/8D9I1od.jpeg",text:"Budget Buddy",link:"https://github.com/MarySql/budget-buddy"}],s=document.querySelectorAll("#image-grid .col-6");i.forEach((e,n)=>{if(s[n]){const r=s[n].querySelector(".p-3");r.innerHTML="";const o=document.createElement("a");o.href=e.link,o.target="_blank";const l=document.createElement("img");l.src=e.url,l.alt=e.text,l.className="img-fluid mb-2 hover-grow",o.appendChild(l);const c=document.createElement("div");c.className="text-muted",c.innerText=e.text,r.appendChild(o),r.appendChild(c)}})}function h(){const t=document.createElement("footer");t.id="contact";const a="<h2>Contact.</h2>",i=`
    <ul class="list-unstyled">
      <li><strong>Email:</strong>&nbsp;mary.mitsuri250@gmail.com</li>
      <li><strong>Telefone:</strong>&nbsp;(11) 9 4893-8423</li>
      <li><strong>LinkedIn:</strong>&nbsp;<a href="https://www.linkedin.com/in/maryane-soares-1b4642327/" target="_blank">Maryane Soares</a></li>
      <li><strong>GitHub:</strong>&nbsp;<a href="https://github.com/MarySql" target="_blank">MarySql</a></li>
    </ul>
  `;t.innerHTML=`
    <div class="container text-center">
      <div class="text-start mt-5 pb-5 pt-5">
        ${a}
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
          <div class="p-3">${i}</div>
        </div>
      </div>
      <div class="text-center mt-4">
        <p class="small">&copy; 2024 Maryane Soares. Todos os direitos reservados.</p>
      </div>
    </div>
  `,document.querySelector("#app").appendChild(t);const s=document.querySelector("#image-container .p-3"),e=document.createElement("img");e.src="assets/images/contact.svg",e.alt="Descrição da imagem",e.classList.add("img-fluid"),s.appendChild(e)}m();u();p();v();h();
