//animate on scroll observers

//observer1
const observer1 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-description')

        }
        else{
            entry.target.classList.remove('show-descritpion')
        }
    })
},{threshold: 0.5})
 const descriptionContent = document.getElementById('description-content')
  observer1.observe(descriptionContent)

  //observer2
  const observer2 =  new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-about')

        }
        else{
            entry.target.classList.remove('show-about')
        }
    })
},{threshold:0.5})
const AboutUs = document.getElementById('aboutus-content')
observer2.observe(AboutUs)

//observer3
const observer3 =  new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-services')

        }
        else{
            entry.target.classList.remove('show-services')
        }
    })
},{threshold:0.5})
const services = document.getElementById('services-content')
observer3.observe(services)

//observer4
const observer4 =  new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show-picture')

        }
        else{
            entry.target.classList.remove('show-picture')
        }
    })
},{threshold:0.5})
const picture = document.querySelector('#my-picture img')
observer4.observe(picture)


//testimonials slider
let slides = document.querySelectorAll('.slider div')
slideIndex = 0
 intervalId = null
 addEventListener('DOMContentLoaded' , ()=>{
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide')
    }
    intervalId = setInterval(nextSlides , 5000)
 })
  function showSlides(index){
    if(index >= slides.length){
        slideIndex = 0
    }
    else if(index<0){
        slideIndex = slides.length-1
    }
    slides.forEach(slides=>{
        slides.classList.remove('displaySlide')
    })
    slides[slideIndex].classList.add('displaySlide')
  }
  function nextSlides(){
slideIndex++
showSlides(slideIndex)
  }
  function prevSlides(){
    clearInterval(intervalId)
slideIndex--
showSlides(slideIndex)
  }
  // navigation-links toggle button
  document.addEventListener('DOMContentLoaded', function toggledButton() {
    const toggleButton = document.getElementById('toggle-button');
    const navigationList = document.getElementById('navigation-bar-list');

    toggleButton.addEventListener('click', function toggledButton() {
        navigationList.classList.toggle('active');
   
    });
    const navLinks = document.querySelectorAll('#navigation-bar-list a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navigationList.classList.remove('active');
        });
    });
    
})


