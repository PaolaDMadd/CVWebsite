window.addEventListener('scroll', function(event){
    const navbar= document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero').height;
    const bodyScroll = window.scrollY;

    if (bodyScroll > heroHeight) {
       navbar.classList.add('bg-light')
        
    } else {
        navbar.classList.remove('bg-light')
    }
})




