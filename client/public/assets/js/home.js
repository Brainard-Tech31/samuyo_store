
  // const message = new SpeechSynthesisUtterance();
  // message.text = "Welcome to Samuyo Store Illuminate your space with the majestic presence of our Bald Eagle Wall Light. Crafted with attention to detail, this stunning wall-mounted light fixture not only provides ambient lighting but also serves as a captivating piece of decor.";
  // speechSynthesis.speak(message);

  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const successMessage = document.getElementById('success_message');

    // Check if any field is empty
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return false; // Prevent form submission
    } else {
      successMessage.style.display = 'block'; // Display the success message
      return true; // Allow form submission
    }
  }

  // JavaScript logic for toggling dark mode
  // Example: Toggling dark mode when a button is clicked
  document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    darkModeButton.addEventListener('click', function () {
      body.classList.toggle('dark'); // Toggle the 'dark' class on the body to switch between light and dark themes
    });
  });

  function sendMessage() {
    const message = document.getElementById('userInput').value;
    if (message.trim() !== '') {
      const chatBox = document.getElementById('chatBox');
      const newMessage = document.createElement('div');
      newMessage.textContent = message;
      chatBox.appendChild(newMessage);
      document.getElementById('userInput').value = '';
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var chatToggle = document.getElementById('chatToggle');
    var chatBox = document.getElementById('chatBox');
  
    // Toggle chat box visibility when chatToggle is clicked
    chatToggle.addEventListener('click', function (event) {
      event.stopPropagation(); // Stop event propagation
      chatBox.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
  
    // Hide chat box when clicking outside of it
    document.addEventListener('click', function (event) {
      // Check if the clicked target is not a descendant of the chat box
      if (!chatBox.contains(event.target) && event.target !== chatToggle) {
        chatBox.classList.add('hidden'); // Hide the chat box
      }
    });
  });
  
  

  // Function to simulate typing effect
  function chatWriter(text, index, conversation) {
    if (index < text.length) {
      conversation.textContent += text.charAt(index);
      index++;
      setTimeout(() => {
        chatWriter(text, index, conversation);
      }, 50); // Adjust typing speed here (milliseconds)
    }
  }

  window.onscroll = function(){pageScroller()};
  function pageScroller () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progess-indicator-bar").style.width = scrolled + "%";
  }
  
  // Use setTimeout to delay execution by 2000 milliseconds (2 seconds)

  // Get references to the button and chat box
  const chatToggleBtn = document.getElementById('chatToggle');
  const chatBox = document.getElementById('chatBox');

  // Add click event listener to the button
  chatToggleBtn.addEventListener('click', () => {
    // Toggle the visibility of the chat box
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
  });

  let isScrolling = true;

  function toggleAutoscroll() {
    isScrolling = !isScrolling;
    if (isScrolling) {
      autoScroll();
    }
  }

  function autoScroll() {
    if (!isScrolling) {
      return;
    }

    const scrollStep = 1; // Adjust the scrolling speed

    // Scroll the page vertically
    window.scrollBy(0, scrollStep);

    // Repeat the scrolling
    if (window.pageYOffset < document.body.scrollHeight) {
      requestAnimationFrame(autoScroll);
    }
  }

  // Start the auto-scrolling when the page loads
  window.onload = function () {
    autoScroll();
  };

  // Toggle scrolling on click
  document.onclick = toggleAutoscroll;

  document.addEventListener("DOMContentLoaded", function () {
    var index = 0;
    var shopping_store_description = 'Illuminate your space with the majestic presence of our Bald Eagle Wall Light. Crafted with attention to detail, this stunning wall-mounted light fixture not only provides ambient lighting but also serves as a captivating piece of decor.';
    var typing_speed = 50;
    var textElement = document.getElementById("myTypewriterText");

    function typewriterEffect() {
      if (index < shopping_store_description.length) {
        textElement.textContent += shopping_store_description.charAt(index);
        index++;
        setTimeout(typewriterEffect, typing_speed);
      }
    }
    typewriterEffect();
  });