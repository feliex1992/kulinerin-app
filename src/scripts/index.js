import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.scss';

import './views/components/NavBar';
import './views/components/HeroElement';
import './views/components/RatingItem';

import './views/components/ListBlog';
import './views/components/BlogItem';

import './views/components/ListRestaurant';
import './views/components/RestaurantItem';
import './views/components/Map';

import './views/components/DetailItem';
import './views/components/DetailDescription';
import './views/components/DetailMenu';
import './views/components/DetailMenuList';

import './utils/map-helper';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
