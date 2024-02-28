//TROCAR RELOGIO
function trocarRelogio() {
  const imgs = document.querySelectorAll(".cards img");
  if (imgs.length) {
    imgs.forEach((img) => {
      img.addEventListener("click", pegarTarget);
    });

    function pegarTarget(event) {
      document.querySelector(".relogio-grande img").outerHTML =
        event.currentTarget.outerHTML;
    }
  }
}
trocarRelogio();

//MENU MOBILE
const btnMenuMobile = document.querySelector(".menuIcon");
const btnMenuMobileImg = document.querySelector(".menuIcon img");
const x = document.querySelector(".fecharMenu img");

function ativarMenuMobile() {
  const nav = document.querySelector(".menu-links");
  nav.classList.toggle("ativo");
}

btnMenuMobile.addEventListener("click", ativarMenuMobile);

//ANIMAÇÃO AO SCROLL
