(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function i(){const a=document.createElement("header");a.className="py-3";const t=document.createElement("div");t.className="container d-flex justify-content-between align-items-center",t.innerHTML=`
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
  `,a.appendChild(t),document.querySelector("#app").appendChild(a)}class l{constructor(t,s,r){this.id=t,this.classes=s,this.content=r}createColumn(){const t=document.createElement("div");return t.id=this.id,t.className=`col ${this.classes}`,t.innerHTML=this.content,t}}function c(){const a=document.createElement("main"),t=`
    <p>Hello, I’m Maryane</p>
    <h1>Fullstack Developer</h1>
    <p>based in Brazil.</p>
    <a class="button-container" href="#">
      <img class="button" alt="resume">
      <img class="button-hover" alt="resume">
    </a>
  `,s=`
    <div class="avatar-container">
      <img class="profile img-fluid" alt="profile">
    </div>
  `,r=new l("textColumn","col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0",t),e=new l("avatarColumn","col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2",s);a.innerHTML=`
    <div class="container text-center mt-5">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
  `;const n=a.querySelector(".row");n.appendChild(r.createColumn()),n.appendChild(e.createColumn()),window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/button-hover.svg"),document.querySelector(".profile").setAttribute("src","assets/profile.png"),document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(a)}i();c();
