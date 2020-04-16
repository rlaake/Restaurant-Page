import '../styling/home.css';
import '../images/austin-ellis.jpg';
import '../images/hunt.jpg';
import '../images/owens.jpg';


const home = () => {
  let html = '<ul class="cb-slideshow"><li><span class="bg"></span><div><p>Photo by Wade Austin Ellis on Unsplash</p></div></li><li><span class="bg"></span><div><p>Photo by LuAnn Hunt on Unsplash</p></div></li><li><span class="bg"></span><div><p>Photo by Nik Owens on Unsplash</p></div></li></ul>';
  document.getElementById('content').innerHTML = html;
}

export { home }