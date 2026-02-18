const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark_mode');
  document.querySelector('#theme_toggler img').src = 'sun.svg';
  document.querySelector('#theme_toggler img').alt = 'Light Mode';
}

theme_toggler.addEventListener('click', function(){
  document.body.classList.toggle('dark_mode');
  
  const img = this.querySelector('img');
  const isDarkMode = document.body.classList.contains('dark_mode');
  
  if (isDarkMode) {
    img.src = 'sun.svg';
    img.alt = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    img.src = 'moon.svg';
    img.alt = 'Dark Icon';
    localStorage.setItem('theme', 'light');
  }
});

// theme_toggler.addEventListener('click', function(){
//   document.body.classList.toggle('dark_mode');
  

//   if (document.body.classList.contains('dark_mode')) {
//     console.log('dark mode is on change SVG!!')
//   } else {
//     console.log('its not')
//   }

// });