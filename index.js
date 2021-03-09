// scroll_buttons
let main = document.querySelector('.main')
let intro = document.querySelectorAll('.intro')
let about = document.querySelectorAll('.about')
let contact = document.querySelectorAll('.contact')
let about_section_scroll = document.querySelector('.about_section_scroll')
let contact_section_scroll = document.querySelector('.contact_section_scroll')



// ///////////// sections
let intro_section = document.querySelector('.intro_section')
let about_section = document.querySelector('.about_section')
let contact_section = document.querySelector('.contact_section')


// burger

let burger = document.querySelector('.burger')
let burger_nav = document.querySelector('.burger_nav')
let close_btn = document.querySelector('.close_btn')



burger.addEventListener('click', e => {
    e.preventDefault()
    burger_nav.style.display = 'block'
    burger.style.display = 'none'
})

close_btn.addEventListener('click', e => {
    e.preventDefault()
    burger_nav.style.display = 'none'
    burger.style.display = 'block'
})

main.addEventListener('click', () => {
    intro_section.scrollIntoView({ behavior: "smooth" })
})


intro.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        intro_section.scrollIntoView({ behavior: "smooth" })
    })
})


about.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        about_section.scrollIntoView({ behavior: "smooth" })
    })
})



about_section_scroll.addEventListener('click', () => {
    about_section.scrollIntoView({ behavior: "smooth" })
})

contact_section_scroll.addEventListener('click', e => {
    e.preventDefault()
    contact_section.scrollIntoView({ behavior: "smooth" })

})

contact.forEach(i => {
    i.addEventListener('click', e => {
        e.preventDefault()
        contact_section.scrollIntoView({ behavior: "smooth" })
    })
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


function initMap() {
    let office = { lat: 40.191681, lng: 44.473233 };
    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: office }
    )
    let marker = new google.maps.Marker({ position: office, map: map })
}

