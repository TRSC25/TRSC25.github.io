// s.w.js

// Function to register the service worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./js/service-worker.js', { scope: '/' })
        .then(function(registration) {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
          console.log('Service Worker registration failed:', error);
        });
    }
}

function createProgressElements() {
    // Create a container div for the progress bar
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.display = 'none';
  
    // Create the progress bar element
    const progressBar = document.createElement('progress');
    progressBar.max = 100;
    progressBar.value = 0;
  
    // Append the progress bar to the container
    progressBarContainer.appendChild(progressBar);
  
    // Append the container to the body of the page
    document.body.appendChild(progressBarContainer);
  }
  
  // Function to handle progress updates from the service worker
  function handleProgressUpdates() {
    navigator.serviceWorker.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'progressUpdate') {
        // Update the progress bar based on the message from the service worker
        progressBar.value = event.data.progress;
  
        // Show or hide the progress bar as needed
        if (event.data.progress === 100) {
          progressBarContainer.style.display = 'none';
        } else {
          progressBarContainer.style.display = 'block';
        }
      }
    });
  }
  
  // Call the functions to register the service worker and handle progress updates
registerServiceWorker();
document.addEventListener('DOMContentLoaded', function() {
    createProgressElements();
});
handleProgressUpdates();