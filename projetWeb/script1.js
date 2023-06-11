document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var selectedImage = urlParams.get('selectedImage');
    var selectedImageIndex = urlParams.get('selectedImageIndex');
  
    if (selectedImage && selectedImageIndex !== null) {
      var autoDiv = document.querySelector('.auto');
      var imageElement = document.createElement('img');
      imageElement.src = selectedImage;
      imageElement.alt = 'Selected Car ' + selectedImageIndex;
      imageElement.className = 'photos';
      autoDiv.appendChild(imageElement);
    }
  });