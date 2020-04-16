import { myFunction } from './tab.js';
import { home } from './home.js';
import { about } from './about.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import '../styling/index.css';

//create link element for font-awesome
let iconSheet = document.createElement('link');
iconSheet.setAttribute('rel', 'stylesheet');
iconSheet.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

//create header element
let header = document.createElement('header');
header.innerHTML = '<header class="page-header"><a href= "#home"><h2 class="logo">Pizza Cat</h2></a><div class="nav" id="link-container"><a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a><a href="#About">About</a><a href="#Menu">Menu</a><a href="#Contact">Contact</a></div></header>';

//create footer element
let footer = document.createElement('footer');
footer.innerHTML = '<footer class="page-footer"><p>&copy; 2020 Pizza Cat &bull; 123 New York St, New York, NY 10011 (212)-212-2112</p></footer>';

//get head, body, & content references
let head = document.getElementsByTagName('head')[0];
let body = document.getElementsByTagName('body')[0];
let content = document.getElementById('content')[0];

//attached created elements to head & body
head.appendChild(iconSheet);
body.insertBefore(header, content);
body.appendChild(footer);

//get anchor tag elements and attached listeners to load html to content div
let navLinks = document.getElementsByTagName('a');

navLinks[0].addEventListener('click', home);
navLinks[2].addEventListener('click', about);
navLinks[3].addEventListener('click', menu);
navLinks[4].addEventListener('click', contact);

//get reference to nav drop down icon & attach function
let icon = document.getElementsByClassName('icon')[0];
icon.addEventListener('click', myFunction);

//on initial page load, home content is loaded
home();

