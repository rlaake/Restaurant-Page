import '../styling/menu.css';
import '../images/griest.jpg';


const menu = () => {
  let html = '<span class="menu-bg"></span><div id="menu-credit"><p>Photo by Mitchell Griest on Unsplash</p></div><main id="menu"><h2>MENU</h2><h4>Pizza  ... $20</h4></main>';
  document.getElementById('content').innerHTML = html;

  document.getElementsByTagName('title')[0].innerHTML = 'Pizza Cat &bull; Menu';
}

export { menu }