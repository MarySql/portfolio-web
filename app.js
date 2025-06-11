import './styles/global.css';
import './styles/header.css';
import './styles/main.css';
import './styles/about.css';
import './styles/article.css';
import './styles/footer.css';

import './particles.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


// components
import { renderHeader } from './components/header.js';
import { renderMain } from './components/main.js';
import { renderAbout } from './components/about.js';
import { renderArticle } from './components/article.js';
import { renderFooter } from './components/footer.js';

// Renderiza o conteúdo dos módulos
renderHeader();
renderMain();
renderAbout();
renderArticle();
renderFooter();





