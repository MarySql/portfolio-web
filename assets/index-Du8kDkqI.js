(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(){const a=document.createElement("header");a.className="py-3";const s=document.createElement("div");s.className="container d-flex justify-content-between align-items-center",s.innerHTML=`
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
  `,a.appendChild(s),document.querySelector("#app").appendChild(a)}function o(){const a=document.createElement("main");a.innerHTML=`
<div class="container text-center mt-5">
  <div class="text-start row justify-content-center align-items-center">

    <!-- Coluna de texto -->
    <div id="textColumn" class="col d-flex flex-column ">
      <p>Hello, I’m Maryane</p>
      <h1>Fullstack Developer</h1>
      <p>based in Brazil.</p>
      <a class="button-container" href="#">
       <img class="button" src="/potifolio-web/assets/button.svg" alt="resume">

        <img class="button-hover" src="assets/button-hover.svg" alt="resume">
      </a>
    </div>

    <!-- Coluna de avatar -->
    <div id="avatarColumn" class="col d-flex justify-content-center align-items-center avatar">
      <div class="position-relative avatar-container">
        <img class="profile" src="assets/profile.png" alt="profile">
        <img class="contour" src="assets/contour.svg" alt="#">
        <img class="cross" src="assets/cross.svg" alt="#">
        <img class="retangles" src="assets/retangles.svg" alt="#">
      </div>
    </div>

  </div>
</div>


  `,window.addEventListener("load",()=>{document.getElementById("textColumn").classList.add("slide-in-left"),document.getElementById("avatarColumn").classList.add("slide-in-right")}),document.querySelector("#app").appendChild(a)}l();o();
