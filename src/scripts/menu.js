import '../styling/menu.css';
import '../images/duran.jpg';


const menu = () => {
  let html = '<span class="menu-bg"></span><div id="menu-credit"><p>Photo by Hemant Latawa on Unsplash</p></div><main id="menu"><h2>MENU</h2><h4></h4></main>';
  document.getElementById('content').innerHTML = html;
}

export { menu }