//navBar

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


//modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//image sliding

const slider = document.querySelectorAll(".slide");
console.log(slider);
var counter = 0;
slider.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%` 
    }
)
const goNext = () => {
    counter++;
    if(counter >=3) {
        counter = 0;
    }
    slideImage()
}


const goPrev = () => {
    if(counter <1) {
        counter = 3;
    }
    counter--;
    slideImage()
}

const slideImage = () => {
    slider.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}