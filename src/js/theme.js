const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

defaultTheme();
checkboxPosition();


refs.checkbox.addEventListener('change', changeTheme);

function changeTheme(evt) {

  if (evt.target.checked) { 
    localStorage.setItem('Theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function defaultTheme() {
  const checkThem = localStorage.getItem('Theme');
  if (!checkThem) {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(checkThem);
  }
}

function checkboxPosition() {
  const checkThem = localStorage.getItem('Theme');
  if (checkThem === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}


