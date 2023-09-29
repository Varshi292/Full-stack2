const images = document.querySelectorAll('.slide');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}

setInterval(showNextImage, 4000); // Change image every 2 seconds (2000 milliseconds)

document.getElementById("signup").addEventListener("click", function(){
  window.location.href="login.html";
});

document.getElementById("new").addEventListener("click", function(){
  const footer = document.querySelector("footer");
  const footerPosition = footer.offsetTop;

  window.scrollTo({
    top: footerPosition,
    behaviour: "smooth"
  });
});


