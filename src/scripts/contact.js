import '../styling/contact.css';
import '../images/nrd.jpg';


const contact = () => {
  let html = '<span class="contact-bg"></span><div id="contact-credit"><p>Photo by Hemant Latawa on Unsplash</p></div><main id="contact"><h2>C"ONTACT</h2><h4></h4></main>';
  document.getElementById('content').innerHTML = html;
}

export { contact }