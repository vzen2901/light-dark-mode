const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav          = document.getElementById('nav');
const toggleIcon   = document.getElementById('toggle-icon');
const image1       = document.getElementById('image1');
const image2       = document.getElementById('image2');
const image3       = document.getElementById('image3');
const textBox      = document.getElementById('text-box');

/* Dark Mode Toggle */
function imgMode(color){
    image1.src = `./img/undraw_proud_coder_${color}.svg`;
    image2.src = `./img/undraw_feeling_proud_${color}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`;
}
function dorkLightMode(islight){
    nav.style.backgroundColor = islight ? 'rgb(225 225 225 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = islight ? 'rgb(0 0 0 / 50%)' : 'rgb(225 225 225 / 50%)';
    toggleIcon.children[0].textContent = islight ? 'Light Mode' : 'Dark Mode';
    islight ? toggleIcon.children[1].classList.replace('fa-moon','fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imgMode(islight ? 'light' : 'dark');
}

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
        dorkLightMode(false);
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        dorkLightMode(true);
    }

}
toggleSwitch.addEventListener('change', switchTheme);
//check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        dorkLightMode(false);
    }
}