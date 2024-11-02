// Array of image paths
const images = [
  "\\Gallery\\image1.jpg",
  "\\Gallery\\image2.jpg",
  "\\Gallery\\image3.jpg",
  "\\Gallery\\image4.jpg",
  "\\Gallery\\image5.jpg",
  "\\Gallery\\image6.jpg",
  "\\Gallery\\image7.jpg",
  "\\Gallery\\image8.jpg",
  "\\Gallery\\image9.jpeg",
  "\\Gallery\\image10.jpeg",
  "\\Gallery\\image11.jpeg",
  "\\Gallery\\image12.jpeg",
  "\\Gallery\\image13.jpeg",
  "\\Gallery\\image14.jpeg",
  "\\Gallery\\image15.jpeg",
  "\\Gallery\\image16.jpeg",
  "\\Gallery\\image17.jpeg",
  "\\Gallery\\image18.jpeg",
  "\\Gallery\\image19.jpeg",
  "\\Gallery\\image20.jpeg",
  "\\Gallery\\image21.jpeg",
  "\\Gallery\\image22.jpeg",
  "\\Gallery\\image23.jpeg",
  "\\Gallery\\image24.jpeg",
  "\\Gallery\\image25.jpeg",
  "\\Gallery\\image26.jpeg",
  "\\Gallery\\image27.jpeg",
  "\\Gallery\\image28.jpeg",
  "\\Gallery\\image29.jpeg",
  "\\Gallery\\image30.jpeg"
];

// Index of the current image
let currentIndex = 0;

// Get the image element in the slider
const slideImage = document.querySelector('.slide-image');

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image if at the end
  updateImage();
}

// Function to show the previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image if at the beginning
  updateImage();
}

// Function to update the displayed image
function updateImage() {
  slideImage.src = images[currentIndex];
}
