const slider = () => {
  let next = document.getElementById('next-btn'),
  prev = document.getElementById('prev-btn'),
  slider = document.getElementsByClassName('img__slider'),
  sliderIndex = 1;

  if( slider.length ){
    showSlider(sliderIndex);
  }

  function showSlider(n) {
  if (n < 1) {
    sliderIndex = slider.length;
  } else if (n > slider.length) {
    sliderIndex = 1;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  slider[sliderIndex - 1].style.display = 'block';
  }

  if( slider.length ){
    function plusSlider(n) {
      showSlider(sliderIndex += n)
      }
      next.onclick = function () {
        plusSlider(1);
      }
      prev.onclick = function () {
        plusSlider(-1);
      }
  }
  
}

export default slider
 