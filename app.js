import './styles/global.css';
import './styles/header.css';
import './styles/main.css';
import './styles/about.css';
import './styles/article.css';
import './styles/footer.css';


import '@fortawesome/fontawesome-free/css/all.min.css';

// Routes
import { renderHeader } from './routes/header.js';
import { renderMain } from './routes/main.js';
import { renderAbout } from './routes/about.js';
import { renderArticle } from './routes/article.js';
import { renderFooter } from './routes/footer.js';

// Renderiza o conteúdo dos módulos
renderHeader();
renderMain();
renderAbout();
renderArticle();
renderFooter();





