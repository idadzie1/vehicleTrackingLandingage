document.addEventListener('DOMContentLoaded', ()=>{


    window.addEventListener('scroll', ()=>{
        document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 0);
    });
    
    const menuLinks = document.querySelectorAll('nav .container .pwr ul a');    
    menuLinks.forEach(menuLink =>{        
        menuLink.addEventListener('click', ()=>{
            menuLinks.forEach(link => link.classList.remove('active'));
            menuLink.classList.add('active');            
        });
    });

    const hamburgerIcon = document.querySelector('.humburherIcon');
    const menuItems = document.querySelector('nav .container .pwr ul');
    hamburgerIcon.addEventListener('click', ()=>{        
        menuItems.classList.toggle('showOnClick');        
    });

    menuItems.addEventListener('click', ()=>{
        menuItems.classList.toggle('showOnClick');
    });    
  

    // ========= FQA ===========
    const faqcards = document.querySelectorAll('.faq');
    faqcards.forEach(faqcard =>{
        faqcard.addEventListener('click', ()=>{            
            faqcard.nextElementSibling.classList.toggle('hide');            
            faqcard.firstElementChild.firstElementChild.classList.toggle('hide');
            faqcard.firstElementChild.lastElementChild.classList.toggle('hide');
            
        });
    });
});