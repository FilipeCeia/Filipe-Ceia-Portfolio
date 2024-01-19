// Função para verificar se a largura da tela é menor que a largura do Nest Hub Max
function isSmallScreen() {
    return window.innerWidth < 1280; 
}

// Lógica para exibir o portfólio adequado com base na largura da tela
function togglePortfolios() {
    const largeScreenPortfolio = document.getElementById('large-screen-portfolio');
    const smallScreenPortfolio = document.getElementById('small-screen-portfolio');

    if (isSmallScreen()) {
        largeScreenPortfolio.style.display = 'none';
        smallScreenPortfolio.style.display = 'block';
    } else {
        largeScreenPortfolio.style.display = 'block';
        smallScreenPortfolio.style.display = 'none';
    }
}

// Adicione o seguinte código para ativar a lógica acima quando a página carrega
window.onload = togglePortfolios;

// Adicione também um ouvinte de redimensionamento para atualizar quando a tela for redimensionada
window.addEventListener('resize', togglePortfolios);

/********************************************/
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }

    }
})

//contacte-me botao quando clicado

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
contactMeBtn.onclick = () => {

    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//create reverse index function

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;

    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//opening animation

const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//abrindo animacao (cover right animation)

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)


setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//abrindo animacao (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)
//abrindo animacao (all page right animation)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})





/********************************************/
    //nav scrool inicio
    let nav = document.querySelector('nav');

    window.addEventListener('scroll',()=>{
        nav.classList.toggle('nav-scroll', window.scroll > 0);
    });



    //active Togle

    let AllNavLinkA =document.querySelectorAll('.nav-links li a');

    //active add

    AllNavLinkA.forEach(item=>{
        item.addEventListener('click' ,()=>{
            removeActive();
            item.classList.add('acitive');
        })
    });


    const removeActive =()=> AllNavLinkA.forEach(itme=>{
        itme.classList.remove('acitive');
    });

    //active remove

      //Nav links TOggler
    let menuBars = document.querySelector('nav button');

    let navlinks = document.querySelector('.nav-links')

    menuBars.addEventListener('click',()=>{
            navlinks.classList.toggle('nav-link-block');
        });

    //NAv link TOGGLEER