document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#element", {
    strings: ["On va se marier!", "Papa el mama ne font rien dans l'ordre!!", "Ils m'ont eu, el puis ils décident de me faire baptiser!! Ah désolé, je me suis pas présenté :)", "Je m'appelle Lorenzo le plus petit de la famille...", "Et bien moi je vais reprendre les rennes de leur vie et le jour de mon baptême, j'ai décidé qu'ils se marieraient aussi", "Annulez tout ce que vous avez de prévu et rejoignez-nous pour celle journée spéciale..."],
    speed: 50,
    cursor: false,
    loop: false,
  })
  .go()
});


let audio = document.getElementsByTagName('audio');

var play =function() {
  audio[0].play();
};