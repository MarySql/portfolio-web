import '../portifolio-web/styles/global.css';
import '../portifolio-web/styles/header.css';
import '../portifolio-web/styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Routes
import { renderHeader } from '../portifolio-web/routes/header.js';
import { renderMain } from '../portifolio-web/routes/main.js';

// Renderiza o conteúdo dos módulos
renderHeader();
renderMain();





