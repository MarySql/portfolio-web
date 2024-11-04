(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(){const a=document.createElement("header");a.className="py-3";const r=document.createElement("div");r.className="container d-flex justify-content-between align-items-center",r.innerHTML=`
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
  `,a.appendChild(r),document.querySelector("#app").appendChild(a)}function o(){const a=document.createElement("main");a.innerHTML=`
<div class="container text-center mt-5">
  <div class="text-start row justify-content-center align-items-center flex-column flex-sm-row">

    <!-- Coluna de texto -->
    <div id="textColumn" class="col-12 col-sm-6 d-flex flex-column order-1 order-sm-1 mb-4 mb-sm-0">
      <p>Hello, I’m Maryane</p>
      <h1>Fullstack Developer</h1>
      <p>based in Brazil.</p>
      <a class="button-container" href="#">
        <img class="button" alt="resume">
        <img class="button-hover" alt="resume">
      </a>
    </div>

    <!-- Coluna de avatar -->
    <div id="avatarColumn" class="col-12 col-sm-6 d-flex justify-content-center align-items-center avatar order-2 order-sm-2">
      <div class="avatar-container">
        <img class="profile img-fluid" alt="profile">
      </div>
    </div>

  </div>
</div>


  `,window.addEventListener("load",()=>{document.querySelector(".button").setAttribute("src","assets/button.svg"),document.querySelector(".button-hover").setAttribute("src","assets/button-hover.svg"),document.querySelector(".profile").setAttribute("src","assets/profile.png"),document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(a)}l();o();
