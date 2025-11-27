const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    },1100);
    
    navLinks.forEach(link => {
        link.classList.remove('active')
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    },1100);

    sections.forEach(section => {
        section.classList.remove('active')
    });
    menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
            sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

const arrowRight = document.querySelector('.projects-box-1 .navigation .arrow-right');
const arrowLeft = document.querySelector('.projects-box-1 .navigation .arrow-left');

let index = 0;


const activeProjects = () => {
    const imgSlide = document.querySelector('.projects-carousel .img-slide');
    const projectsDetails = document.querySelectorAll('.projects-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectsDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    projectsDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activeProjects();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activeProjects();
});

