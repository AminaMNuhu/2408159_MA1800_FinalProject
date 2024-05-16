   //the folloing JavaScript is responsible for the 'clickable' element of the google searchbar animation//
   document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.bounce');
  
    image.addEventListener('click', function() {
      // Toggle animation class to reset animation
      this.classList.remove('bounce');
      void this.offsetWidth; // Trigger reflow
      this.classList.add('bounce');
    });
  });
 