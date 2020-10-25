import './styles.css';
import menu from './js/menu.json';
import galleryCardItem from './tamplate/gallery-cards.hbs'
import themeCheckbox from './js/theme.js'

const galleryRender = document.querySelector('.js-menu');



const galleryCardMarkup = galleryCardItem(menu);
galleryRender.insertAdjacentHTML('beforeend', galleryCardMarkup)





