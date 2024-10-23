document.addEventListener("DOMContentLoaded", () => {
    const test4Section = document.querySelector(".Test4");

    document.addEventListener("mousemove", (e) => {
        createBubble(e.pageX, e.pageY);
    });

    function createBubble(x, y) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const size = Math.random() * 60 + 20; // Bubble size between 20px and 80px
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.left = x - size / 2 + "px";
        bubble.style.top = y - size / 2 + "px";

        test4Section.appendChild(bubble);

        bubble.style.animationDuration = Math.random() * 2 + 3 + "s"; // Float animation duration between 3s and 5s

        setTimeout(() => {
            bubble.remove();
        }, 5000); // Remove bubble after 5 seconds
    }
});








/*  button style 10*/
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("Button10");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }