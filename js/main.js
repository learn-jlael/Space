/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* GSAP ANIMATION */
gsap.from('.home-points', 1.5, {opacity: 0, y: -300, delay: .2})

gsap.from('.home-rocket', 1.5, {opacity: 0, y: 300, delay: .3})

gsap.from('.home-planet-1', 1.5, {opacity: 0, x: -200, delay: .8})
gsap.from('.home-planet-2', 1.5, {opacity: 0, x: 200, delay: 1})

gsap.from('.home-cloud-1', 1.5, {opacity: 0, y: 200, delay: 1.2})
gsap.from('.home-cloud-2', 1.5, {opacity: 0, x: 200, delay: 1.3})

gsap.from('.home-content', 1.5, {opacity: 0, y: -100, delay: 1.4})

gsap.from('.home-title img', 1.5, {opacity: 0, x: 100, delay: 1.6})