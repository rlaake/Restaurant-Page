import { onLoad } from './onLoad';

var content = document.getElementById('content')

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('hello from index.js');
  onLoad();
});