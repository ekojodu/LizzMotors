//  header js
// start
const menu = document.querySelector('.menu')
const openMenuBtn = document.querySelector('.open-menu-btn')
const closeMenuBtn = document.querySelector('.close-menu-btn')

// Check if menu, openMenuBtn, and closeMenuBtn are selected correctly
console.log(menu);
console.log(openMenuBtn);
console.log(closeMenuBtn);

// Add event listeners to open and close menu buttons
[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
        menu.style.transition = 'transform 0.5s ease'
    });
});

menu.addEventListener('transitionend', function(){
    this.removeAttribute('style')
})

menu.querySelectorAll('.dropdown > i').forEach((arrow) =>{
    arrow.addEventListener('click', function(){
        this.closest('.dropdown').classList.toggle('active')
    })
})
 
//  finish
 
 // footer js
// start
 const date = new Date()
 const year = date.getFullYear()
 let footerParagraph = document.getElementById('footerParagraph')

 footerParagraph.innerHTML = `&copy; ${year} Blaise. All Right Reserved.`
//  finish

// toogle button
const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('show');
      });
    });

    
    //   toogle

    document.addEventListener("DOMContentLoaded", function () {
        const customCarousel = document.querySelector('.custom-carousel');
        const items = customCarousel.querySelectorAll('.item');

        items.forEach(item => {
            item.addEventListener('click', function () {
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        });

        $('.custom-carousel').owlCarousel({
            autoWidth: true,
            loop: true
        });
    });

    // scroll reveal

    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
      });
 
      ScrollReveal().reveal('.hero-text p', { origin: 'top' });
      ScrollReveal().reveal('.dealership a, .hero-text a, .hardware a, .product a, ', { origin: 'bottom' });
      ScrollReveal().reveal('.prd-heading, .faq, .product h3, .dealership h1, .about-dealership h1, .#products-dealership h1, .overwiew h1, .overview h2, #design h1, .material h1, .internalresearch h1, #internal-research h2, .specs h1, .motor-specs h2, .product-sales h2, .product-sale h3, .about-sales h2, .head h1, .machinery h2, .machine h3, .process h2, .hardware h1, .prd-heading h1, .about-image img', { origin: 'left' });
      ScrollReveal().reveal(' .product p, .dealership p, .about-dealership p, #overview p, #design p, #internal-research p, .product-sale p, .product-sale img, .about-sales p, .overview p, .machine p, .about-us', { origin: 'right' });
