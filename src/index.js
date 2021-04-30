import './styles.css';
import menu from './menu.json';
import createMenu from './templates/menuTemplate.hbs';

const refs = {
  menuList: document.querySelector('.menu'),
  switchInput: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);
refs.switchInput.checked = localStorage.getItem('theme') === Theme.DARK;

refs.menuList.insertAdjacentHTML('beforeend', createMenu(menu));
refs.switchInput.addEventListener('click', handleChangeTheme);

function toggleTheme(add, rem) {
  refs.body.classList.replace(rem, add);
  localStorage.setItem('theme', add);
}

function handleChangeTheme(e) {
  if (e.target.checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT);
    return;
  }
  toggleTheme(Theme.LIGHT, Theme.DARK);
}
