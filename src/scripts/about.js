import '../styling/about.css';
import '../images/latawa.jpg';


const about = () => {
  let html = '<span class="about-bg"></span><div id="about-credit"><p>Photo by Hemant Latawa on Unsplash</p></div><main id="about"><h2>A LABOR OF LOVE</h2><h4>Pizza Cat was conceived of during multiple escapes to the Catskills around 2016 and named after a sweet cat who loved mozzarella (but later lost his taste for it). We at Pizza Cat believe all pizza is delicious in its own way, fresh from the oven, cold from the fridge, party pizza, even microwave pizza, we\'re just all about pizza. Stop in to try it and we guarantee you will love our pizza as much as we do.</h4></main>';
  document.getElementById('content').innerHTML = html;
}

export { about }