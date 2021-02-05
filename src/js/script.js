window.addEventListener('DOMContentLoaded', function () {
    // Modal
    let btnMenu = document.querySelectorAll('.js-btn'),
        overlayMenu = document.querySelector('.js-overlay'),
        closeMenu = document.querySelector('.js-close');

    btnMenu.forEach(item=>{
        item.addEventListener('click', () =>{
            overlayMenu.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    function closeModalWindow (){
        overlayMenu.style.display = 'none';
        document.body.style.overflow = 'auto';


    }
    closeMenu.addEventListener('click', ()=> {
      
        closeModalWindow();
    });
    overlayMenu.addEventListener('click', ()=>{
        closeModalWindow();
    });

    // Slider
    let descrText = document.querySelectorAll('.js-descr'),
        tab = document.querySelectorAll('.js-marc'),
        descrMarc = document.querySelectorAll('.js-marcs');

        function hideTabContent(a) {
            for ( let i=a; i<descrText.length; i++ ) {
                descrText[i].style.display = 'none';
                
            }
        }
    
        hideTabContent(1);
        function showTabContent(b) {
            if (descrText[b].style.display = 'none') {
                descrText[b].style.display = 'block';
            }

        }
        descrMarc.forEach(item=> {
            item.addEventListener('click', function(e) {
                let target = e.target;
                if (target && target.classList.contains('js-marc')){
                    for ( let i=0; i<tab.length; i++ ) {
                        if (target == tab[i]) {
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
            });
        });
    
 
    // PageUp
    let pageUp = document.querySelector('.js-pageup');

    window.addEventListener('scroll', showPageUp);
    
        function showPageUp(){
            let scrolled = window.pageYOffset,
                coords = document.documentElement.clientHeight;
            
                if (scrolled > coords) {
                    pageUp.style.display = 'block';
                  }
                  if (scrolled < coords) {
                    pageUp.style.display = '';
                  }
        }
        showPageUp();

    //  Humburger   

    const menu = document.querySelector('.js-menu'),
          hamburgerActive = document.querySelector('.js-hamburger_active'),
          hamburger = document.querySelector('.js-hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
        hamburger.style.display = 'none';
        hamburgerActive.style.display = 'block';
    });

    hamburgerActive.addEventListener('click',() => {
        menu.classList.remove('header__nav_active');
        hamburger.style.display = 'block';
        hamburgerActive.style.display = 'none';
    });

});