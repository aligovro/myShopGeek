const hover = () => {
   let lockbutton = document.querySelector('.registration__button');
   let hoverlock = document.querySelector('.hoverlock');

   if( hoverlock ){
      if (lockbutton.addEventListener('mouseover', function () {
         hoverlock.classList.toggle('_lockhover')
      })) {
         
      } else if (lockbutton.addEventListener('mouseout', function () {
         hoverlock.classList.remove('_lockhover')
      })) {
         
      }
   }
   
}

export default hover
