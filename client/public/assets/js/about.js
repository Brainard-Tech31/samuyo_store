document.addEventListener("DOMContentLoaded", function() {
    var index = 0;
    var About_Samuyo_store = 'Samuyo Store is an innovative online e-commerce platform dedicated to providing a seamless shopping experience for consumers seeking high-quality products across diverse categories. With a commitment to excellence, Samuyo Store curates a wide array of premium goods, ranging from electronics and gadgets to fashion, home essentials, and much more.';
    var typing_speed = 30;
    var textElement = document.getElementById("abouttypewritter");

    function typewriterEffect() {
      if (index < About_Samuyo_store.length) {
        textElement.textContent += About_Samuyo_store.charAt(index);
        index++;
        setTimeout(typewriterEffect, typing_speed);
      }
    }
    typewriterEffect();
  });