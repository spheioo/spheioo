/* ============================================================================================================================================================================ */
/* Execute the funtion to run and display the anniversary countdown clock */
/* ============================================================================================================================================================================ */

// Set the date we're counting down to
const countDownDate = new Date("Oct 27, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
  + minutes + "m " + seconds + "s ";

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

/* ============================================================================================================================================================================ */
/* SP70 Commemorative Events' card's Read More Read Less button*/
/* ============================================================================================================================================================================ */
document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded = on page load
    /* select all elements with the class '.card' */
    const cards = document.querySelectorAll('.card'); //selects all elements w class 'card' and stores in 'cards' variable; querySelectorAll returns a list of all matching elements

    /*iterates over each card using 'forEach'; 
     for each card it finds the relevant elements(button, content, icon)
     within that specific card; 
     adds the click event listener to the button in each card;
     ensures function() works independently for each card, regardless of how many cards r on the page
     */
  cards.forEach(card => {   //array of "cards", gores thru each card one by one
    const readMoreBtn = card.querySelector('.read-more-btn'); //finds specific elemnts within each card
    const content = card.querySelector('.content');
    const readMoreContent = content.querySelector('.read-more-content');
    const icon = readMoreBtn.querySelector('i');

    //adding click event listener to the button
    readMoreBtn.addEventListener('click', function() { //adds click event listener to read more button
      //if else statement checks if the content is currently visible or not
      // checks if the display style property of the readMoreContent element is set to 'none'
      // ('none' means that the element is currently hidden)
      if (readMoreContent.style.display === 'none' || readMoreContent.style.display === '') { 
        //show more content
        readMoreContent.style.display = 'inline';
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-x');
        readMoreBtn.setAttribute('aria-label', 'Collapse text');
      } else {
        //hide content
        readMoreContent.style.display = 'none';
        icon.classList.remove('bi-x');
        icon.classList.add('bi-plus');
        readMoreBtn.setAttribute('aria-label', 'Expand text');
      }
    });
  });
});

/* ============================================================================================================================================================================ */
/* Our History */
/* ============================================================================================================================================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var dynamicModal = document.getElementById('dynamicModal');
  dynamicModal.addEventListener('show.bs.modal', function (event) { //triggered when user clicks button that triggers modal
    var button = event.relatedTarget; // get the Button that triggered the modal
    var contentId = button.getAttribute('data-content-id'); //get the content ID
    var content = document.getElementById(contentId).innerHTML; //get the content to display in modal

    // Update the modal's body (content)
    var modalBody = dynamicModal.querySelector('.modal-body'); //getElementByID is for id but query selector is fr class
    modalBody.innerHTML = content;

    // Update the modal title
    var modalTitle = dynamicModal.querySelector('.modal-title');
    modalTitle.textContent = contentId;
  });
});


/* ============================================================================================================================================================================ */
/* Jumba Mascot Button */
/* ============================================================================================================================================================================ */
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function updateLabel(label) {
  // getElement change innerHTML to label
}