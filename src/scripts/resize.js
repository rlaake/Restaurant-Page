const removeClass = () => {
  console.log('removeClass function called');
  let element = document.getElementById('link-container');
  if (window.innerWidth > 700) {
    element.classList.remove('responsive');
  }
}

export { removeClass }