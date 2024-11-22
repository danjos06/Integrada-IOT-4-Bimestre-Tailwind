function Menu(e){
    let list = document.querySelector('ul');
    
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}

// Explicação:
// Estrutura HTML: O carrossel é criado dentro de um div com um id para facilitar a manipulação via JavaScript. As imagens estão dentro de um div que permite a rolagem horizontal.

// Botões de Navegação: Dois botões são adicionados para navegar entre as imagens.

// JavaScript: O script gerencia a lógica do carrossel, alterando a posição das imagens com base no índice atual.

// Estilos: O Tailwind CSS é utilizado para estilizar o card e os botões.

const carouselImages = document.getElementById('carousel-images');
const images = carouselImages.children;
let currentIndex = 0;

document.getElementById('next').onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

document.getElementById('prev').onclick = function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function bone_mais() {
    document.getElementById('bone-content').style.display='block';
    document.getElementById('bone-mais').style.display='none';
}

function bone_menos() {
    document.getElementById('bone-content').style.display='none';
    document.getElementById('bone-mais').style.display='block';
}

function carrinho_mais() {
    document.getElementById('carrinho-content').style.display='block';
    document.getElementById('carrinho-mais').style.display='none';
}

function carrinho_menos() {
    document.getElementById('carrinho-content').style.display='none';
    document.getElementById('carrinho-mais').style.display='block';
}