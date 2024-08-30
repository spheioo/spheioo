/* ============================================================================================================================================================================ */
/* javascript to show the modal on page load (popup window) */
/* ============================================================================================================================================================================ */
document.addEventListener('DOMContentLoaded', function() {
  const myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
  myModal.show();
});

/* ============================================================================================================================================================================ */
/* form validation and display of user's input message */
/* ============================================================================================================================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  //initialise variables and elements
  const nameInput = document.getElementById('name-input');
  const messageInput = document.getElementById('message-input');
  const carouselMsg = document.getElementById('carousel-inner');
  const messages = [{name:'Sophie :)', message:'Look out for your message -->'}];
  const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal')); //modal for successful submission

  
  //form validation etc
  //selects all forms with the class 'needs-validation' and
  //adds a submit event listener to each.
  const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        
          event.preventDefault(); //prevent default form submission
          event.stopPropagation();
          //check form validity: if valid, process input - else, show errors
          if (form.checkValidity()) {
            const nameText = nameInput.value.trim();
            const messageText = messageInput.value.trim();
            
            //checks if message is longer than 10 characters (javascript validation)
            if (messageText.length > 10) {              
              messages.push({name:nameText,message:messageText}); // adds message to the 'messages' array
              displayMessages(messages, carouselMsg);
              confirmModal.show();
              form.reset(); //resets form, allows user to populate form again
              document.getElementById("message-input").classList.remove('is-invalid');
              form.classList.remove('was-validated') //makes the error message disappear.
            } else {
              form.classList.add('was-validated') //shows error message bat min length req
              document.getElementById("messageError").classList.add('d-none');
              document.getElementById("messageLengthError").classList.remove('d-none');
              document.getElementById("message-input").classList.add('is-invalid');
            }
            
          }
          //display validation errors
          else {
              //makes the error message appear, put this in the else loop cuz
              // udw it to stay there even after user submit a response n page has been refreshed
              //'was-validated' class uses bootstrap built-in validatn styles
              form.classList.add('was-validated') 
              document.getElementById("messageError").classList.remove('d-none');
              document.getElementById("messageLengthError").classList.add('d-none');        
          }
      }, false)
    })
  
    function displayMessages(messages, messageBoard) {
      // Clear existing (original) messages that were on the carousel
      messageBoard.innerHTML = '';
  
      // Create a document fragment to improve performance
      const fragment = document.createDocumentFragment();
  
      messages.forEach((msg, index) => {
        const messageElement = createMessageElement(msg, index);
        fragment.appendChild(messageElement);
      });
  
      // Append all messages at once
      messageBoard.appendChild(fragment);
    }
  
    function createMessageElement(msg, messageNumber) {
      
      // This function creates the following:
      //
      // <div class="carousel-item active">    
      //   <div class="carousel-caption">
      //     <p>Your well wishes will appear here!</p>
      //     <small>-- webmaster</small>
      //   </div>
      // </div>

      const messageDiv = document.createElement('div'); // create <div></div>

      if (messageNumber == 0) {
        messageDiv.className = 'carousel-item active'; // create <div class='carousel-item active'> </div>
      } else {
        messageDiv.className = 'carousel-item';
      }
      
      const messageCaption = document.createElement('div');
      messageCaption.className = 'carousel-caption';
  
      const paragraph = document.createElement('h4');
      paragraph.textContent = `${msg.message}`;
      messageCaption.appendChild(paragraph); //appends paragraph to become the child of the caorusel-caption
  
      const small = document.createElement('small');
      small.textContent = `-- ${msg.name}`;
      messageCaption.appendChild(small);
  
      messageDiv.appendChild(messageCaption); //appends carousel-caption to be the child of the caorusel-item

      return messageDiv;
    }
  }
);

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
