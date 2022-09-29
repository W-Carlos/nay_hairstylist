// Abre e fecha o menu quando clica no icone: menu hamburguer
const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Quando clicar no item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for(const element of links) {
    element.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}