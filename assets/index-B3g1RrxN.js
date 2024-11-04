(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function i(){const n=document.createElement("header");n.className="py-3";const t=document.createElement("div");t.className="container d-flex justify-content-between align-items-center",t.innerHTML=`
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
  `,n.appendChild(t),document.querySelector("#app").appendChild(n)}class l{constructor(t,r,s){this.id=t,this.classes=r,this.content=s}createColumn(){const t=document.createElement("div");return t.id=this.id,t.className=`col ${this.classes}`,t.innerHTML=this.content,t}}function c(){const n=document.createElement("main"),t=`
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
  `,s=new l("textColumn","col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0",t),e=new l("avatarColumn","col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2",r);n.innerHTML=`
    <div class="container text-center mt-5">
      <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">
      </div>
    </div>
  `;const a=n.querySelector(".row");a.appendChild(s.createColumn()),a.appendChild(e.createColumn()),window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/images/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/images/button-hover.svg"),document.querySelector(".profile").setAttribute("src","assets/images/profile.png"),document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(n)}i();c();
