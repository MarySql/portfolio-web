
document.querySelector('#app').innerHTML = `
<header class="d-flex justify-content-around align-items-center px-4 py-3">
    <a class="navbar-brand" href="#">Maryane Soares</a>

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
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
    
    <div class="d-flex align-items-center">
        <a href="https://www.instagram.com/maryane.py/" target="blank" class="me-3 fa-2x"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/MarySql" target ="blank"   class="me-3 fa-2x"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/maryane-soares-1b4642327/" target="blank" class="me-3"><i class="fa-brands fa-linkedin fa-2x"></i></a>
    </div>
</header>
`
export default Header;