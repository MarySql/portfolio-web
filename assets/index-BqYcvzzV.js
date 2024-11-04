(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();function l(){const e=document.createElement("header");e.className="py-3";const t=document.createElement("div");t.className="container d-flex justify-content-between align-items-center",t.innerHTML=`
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
  `,e.appendChild(t),document.querySelector("#app").appendChild(e)}class i{constructor(t,r,s){this.id=t,this.classes=r,this.content=s}createColumn(){const t=document.createElement("div");return t.id=this.id,t.className=`col ${this.classes}`,t.innerHTML=this.content,t}}function c(){const e=document.createElement("main"),t=`
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
  `,s=new i("textColumn","col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0",t),a=new i("avatarColumn","col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2",r);e.innerHTML=`
    <div class="container text-center mt-5 pb-3">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
  `;const n=e.querySelector(".row");n.appendChild(s.createColumn()),n.appendChild(a.createColumn()),window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/images/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/images/button-hover.svg"),document.querySelector(".profile").setAttribute("src","assets/images/profile.png"),document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(e)}function d(){const e=document.createElement("section");e.id="about";const t=`
    <h2 class="pb-3">About me.</h2>
    <p id="discribe">Hi! I'm Maryane Soares, a Computer Science student and a technology enthusiast. I'm interested in web development, especially in JavaScript and frameworks like Svelte. I like to explore new ideas and create projects that positively impact people's lives. I'm also a cat lover and always try to learn something new every day. <i class="fa-solid fa-book-open" style="color: #744f78;"></i> <i class="fa-solid fa-heart" style="color: #744f78;"></i> </p>
  `;e.innerHTML=`
  <div class="container text-center mt-5">
    <div class="text-start row justify-content-center align-items-center">
      <div class="col-12">
        ${t}
      </div>
    </div>
    <canvas id="skillsChart"></canvas> 
  </div>
`,document.querySelector("#app").appendChild(e),m()}function m(){const e=document.getElementById("skillsChart").getContext("2d");e.canvas.width=e.canvas.clientWidth,e.canvas.height=300,new Chart(e,{type:"bar",data:{labels:["React","Bootstrap","JavaScript","HTML/CSS","Sql"],datasets:[{label:"Skill levels",data:[40,60,70,90,45],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,max:100}}}})}l();c();d();
