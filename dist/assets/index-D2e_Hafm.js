(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();function m(){const e=document.createElement("header");e.className="py-3";const a=document.createElement("div");a.className="container d-flex justify-content-between align-items-center",a.innerHTML=`
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
  `,e.appendChild(a),document.querySelector("#app").appendChild(e)}class d{constructor(a,r,s){this.id=a,this.classes=r,this.content=s}createColumn(){const a=document.createElement("div");return a.id=this.id,a.className=`col ${this.classes}`,a.innerHTML=this.content,a}}function u(){const e=document.createElement("main"),a=`
    <p>Hello, I’m Maryane</p>
    <h1>Fullstack Developer</h1>
    <p>based in Brazil.</p>
    <a class="button-container" href="#">
      <img class="button" alt="resume">
      <img class="button-hover" alt="resume">
    </a>
  `,r=`
    <div class="avatar-container">
      <img class="profile img-fluid" alt="profile">
    </div>
  `,s=new d("textColumn","col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0",a),t=new d("avatarColumn","col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2",r);e.innerHTML=`
    <div class="container text-center mt-5 pb-3">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
  `;const n=e.querySelector(".row");n.appendChild(s.createColumn()),n.appendChild(t.createColumn()),window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/images/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/images/button-hover.svg"),document.querySelector(".profile").setAttribute("src","assets/images/profile.png"),document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(e)}function p(){const e=document.createElement("section");e.id="about";const a=`
    <h2 class="pb-3">About me.</h2>
    <p id="discribe">Hi! I'm Maryane Soares, a Computer Science student and a technology enthusiast. I'm interested in web development, especially in JavaScript and frameworks like Svelte. I like to explore new ideas and create projects that positively impact people's lives. I'm also a cat lover and always try to learn something new every day.</p>
  `;e.innerHTML=`
  <div class="container text-center mt-5">
    <div class="text-start row justify-content-center align-items-center">
      <div class="col-12">
        ${a}
      </div>
    </div>
    <canvas id="skillsChart"></canvas> 
  </div>
 `,document.querySelector("#app").appendChild(e),v()}function v(){const e=document.getElementById("skillsChart").getContext("2d");e.canvas.width=e.canvas.clientWidth,e.canvas.height=300,new Chart(e,{type:"bar",data:{labels:["React","Bootstrap","JavaScript","HTML/CSS","Sql"],datasets:[{label:"Skill levels",data:[40,60,70,90,45],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,max:100}}}})}function g(){const e=document.createElement("article");e.id="work";const a=`
    <h2>Work.</h2>
  `;e.innerHTML=`
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
      </div>
    </div>
  `,document.querySelector("#app").appendChild(e);const r=[{url:"https://i.imgur.com/dCTBloH.jpeg",text:"Snitap",link:"https://github.com/MarySql/lp_patins"},{url:"https://i.imgur.com/qSWN3Xt.jpeg",text:"Zingen",link:"https://github.com/MarySql/proj_landing_app"},{url:"https://i.imgur.com/7n1mgNz.jpeg",text:"Estrelas do amanhã",link:"https://github.com/MarySql/proj_matricula"},{url:"https://i.imgur.com/QKFWVHh.jpeg",text:"Weather",link:"https://marysql.github.io/Projetos/Weather/"}],s=document.querySelectorAll("#image-grid .col-6");r.forEach((t,n)=>{if(s[n]){const i=s[n].querySelector(".p-3");i.innerHTML="";const l=document.createElement("a");l.href=t.link,l.target="_blank";const o=document.createElement("img");o.src=t.url,o.alt=t.text,o.className="img-fluid mb-2 jobs",l.appendChild(o);const c=document.createElement("div");c.className="text-muted",c.innerText=t.text,i.appendChild(l),i.appendChild(c)}})}m();u();p();g();
