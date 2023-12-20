document.addEventListener("DOMContentLoaded", function () {
    // Hide the splash screen after the content is loaded
    setTimeout(function () {
      var splashScreen = document.querySelector(".splash-screen");
      var content = document.querySelector(".content");
  
      splashScreen.style.display = "none";
      content.style.display = "block";
    },1000); // Adjust the delay as needed
  });
 
  (() => { 

   const cursor = document.querySelector('.cursor');

   document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
   });

   document.addEventListener('click', () => { 
      console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");

      cursor.classList.add('cursor--expand');
      console.log(cursor.classList);
   
      setTimeout(() => {
         cursor.classList.remove('cursor--expand');
      }, 500);
   });
})();



growing.onclick = function() {
  this.style.fontSize = '36px';
  this.style.color = 'red';
};

  document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("carCanvas");
    const ctx = canvas.getContext("2d");
  
    // Car properties
    const carWidth = 80;
    const carHeight = 40;
    let carPositionX = -carWidth;
    let carPositionY = 0;
    let scale = 1;
    let direction = 1; // 1 for right, -1 for left
    let zooming = true;
    let fullScreenZoom = false;
  
    // Car image
    const carImage = new Image();
    carImage.src = "car.png"; // Replace with the path to your car image
  
    function drawCar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(carImage, carPositionX, carPositionY, carWidth * scale, carHeight * scale);
    }
  
    function animateCar() {
      if (zooming) {
        // Zoom in while moving to the right
        scale += 0.01;
        carPositionX += 5 * direction;
  
        // When reaching the right corner, reset position and scale for the next phase
        if (carPositionX > canvas.width) {
          carPositionX = -carWidth;
          scale = 1;
          zooming = true;
        }
      } else {
        // Move to the left corner
        carPositionX += 5 * direction;
  
        // When reaching the left corner, start zooming into full screen
        if (carPositionX < 0 && !fullScreenZoom) {
          carPositionX = 0;
          zooming = true;
          fullScreenZoom = true;
        }
      }
  
      // Zoom in to full screen
      if (fullScreenZoom) {
        scale += 0.01;
  
        // When fully zoomed in, stop the animation
        if (scale > 10) {
          scale = 10; // Set a maximum scale value
          drawCar();
          return;
        }
      }
  
      drawCar();
      requestAnimationFrame(animateCar);
    }
  
    // Wait for the image to load before starting the animation
    carImage.onload = function () {
      animateCar();
    };
  });

  