//Mudar foto Home
const imgs = document.querySelectorAll(".cards img");

imgs.forEach((img) => {
  img.addEventListener("click", pegarTarget);
});

function pegarTarget(event) {
  document.querySelector("#galeria img").outerHTML =
    event.currentTarget.outerHTML;
}
