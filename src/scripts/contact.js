import '../styling/contact.css';
import '../images/nrd.jpg';

/*form html was taken directly from https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form */

const contact = () => {
  let html = '<span class="contact-bg"></span><div id="contact-credit"><p>Photo by nrd on Unsplash</p></div><main id="contact"><h2>CONTACT</h2><div><form action="#form" method="post"><ul><li><label for="name">Name:</label><input type="text" id="name" name="user_name"></li><li><label for="mail">E-mail:</label><input type="email" id="mail" name="user_email"></li><li><label for="msg">Message:</label><textarea id="msg" name="user_message" style="width: 80%; height: 112px;"></textarea></li><li class="button"><button type="submit">Send your message</button></li></ul></form></div></main>';
  document.getElementById('content').innerHTML = html;

  document.getElementsByTagName('title')[0].innerHTML = 'Pizza Cat &bull; Contact';

}

export { contact }