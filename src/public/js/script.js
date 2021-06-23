const shopScript = () => {
  let userClick = document.getElementsByClassName('store__burger--menu');  
  let burgerClick = document.querySelector('#store');
  let storeMenu = document.querySelector('#menu');

    for (let i = 0; i < userClick.length; i++) {
      userClick[i].addEventListener('click', function () {
      burgerClick.classList.toggle('_active');
      storeMenu.classList.toggle('_lock');
      });
    }


  let headerBurger = document.querySelectorAll('#burgeropen');
  let headerMeny = document.querySelector('.header__menu');
  let headerCross = document.querySelector('.clouse__img');

  document.body.addEventListener('click', (e) => {
    let parentId = e.target.parentElement.id;
    if ( parentId !== 'burgeropen' )  {
      if (e.target.id != headerMeny.id && headerMeny.classList.contains('_open') )  {
        headerMeny.classList.remove("_open");
      }
    }
  });

  for (let i = 0; i < headerBurger.length; i++) {
    headerBurger[i].addEventListener('click', function () {
      headerMeny.classList.toggle('_open')  
    });
  }

  headerCross.onclick = function () {
    headerMeny.classList.remove('_open')
  }




  let sizeClick = document.querySelectorAll('#sizelock');
  let sizeMenu = document.querySelector('.size__menu');

  for (let i = 0; i < sizeClick.length; i++) {
    sizeClick[i].addEventListener('click', function () {
      sizeMenu.classList.toggle('_sizelock')  
    });
  }

  // search

  let headerSearh = document.querySelector('.header__serach--img');
  let lockSearch = document.querySelector('.header__search--srtong');
  headerSearh.addEventListener('click', function () {
    lockSearch.classList.toggle('_searchactive');
  });
}


export default shopScript






