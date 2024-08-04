gsap.fromTo('.loading-page' , {opacity:1},{
    opacity:0,
    duration:1,
    delay:1,
});

window.addEventListener('load', function() {
    console.log("Página carregada, aguardando antes de remover tela de carregamento.");
    setTimeout(function() {
        const loadingPage = document.querySelector('.loading-page');
        loadingPage.style.display = 'none';

        const container = document.querySelector('.container');
        container.style.display = 'block';
    }, 2000); // 2000 milissegundos = 2 segundos
});
