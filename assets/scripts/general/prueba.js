document.getElementById('arrow-show').addEventListener('click', function(event) {
  document.getElementById('img1').classList.add('slider-show');
  // document.getElementById('img1').classList.remove('slider-hide');
});

document.getElementById('arrow-hide').addEventListener('click', function(event) {
  document.getElementById('img1').classList.add('slider-hide');
  document.getElementById('img1').classList.remove('slider-show');
});
