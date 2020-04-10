const onLoad = () => {
  let content = document.getElementById('content');
  
  let tab = document.createElement('div');
  let head = document.createElement('div');
  let main = document.createElement('div');
  let img = document.createElement('div');
  let foot = document.createElement('div');
  
  tab.setAttribute('id', 'tab-container');
  head.setAttribute('id', 'head-container');
  main.setAttribute('id', 'main-container');
  img.setAttribute('id', 'img-container');
  foot.setAttribute('id', 'footer-container');

  let h1 = document.createElement('h1');
  h1.innerHTML = 'Pizza Cat';
  head.appendChild(h1);

  let p1 = document.createElement('p');
  p1.innerHTML = 'Pizza cat is the best pizza around. The original pizza cat is Louie, the best and sweetest boy. In 2019 Pizza Cat expanded to include Alfie who is okay sometimes but usually not.';
  main.appendChild(p1)

  let i1 = document.createElement('img');
  let i2 = document.createElement('img');
  i1.setAttribute('src', '../src/images/louie.jpg');
  i2.setAttribute('src', '../src/images/alfie.jpg');
  img.appendChild(i1);
  img.appendChild(i2);

  let p2 = document.createElement('p');
  p2.innerHTML = '2020 Pizza Cat';
  foot.appendChild(p2);

  content.appendChild(tab);
  tab.appendChild(head);
  tab.appendChild(main);
  tab.appendChild(img);
  tab.appendChild(foot);

};

export {onLoad}

/*
<div id="tab-1">
  <div id="head-container">
    <h1>Pizza Cat</h1>
  </div>
  <div id="main-container">
    <p>Pizza cat is the best pizza around. The original pizza cat is Louie, the best and sweetest boy. In 2019 Pizza Cat expanded to include Alfie who is okay sometimes but usually not.</p>
  </div>
  <div id="img-container">
    <img id="louie" src="../src/images/louie.jpg/">
    <img id="alfie" src="../src/images/alfie.jpg">
  </div>
  <div id="foot-container">
    <p>2020 Pizza Cat</p>
  </div>
</div>
*/