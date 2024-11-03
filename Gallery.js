// Array of image paths
const images = [
  "public\\Gallery\\image1.jpg",
  "public\\Gallery\\image2.jpg",
  "public\\Gallery\\image3.jpg",
  "public\\Gallery\\image4.jpg",
  "public\\Gallery\\image5.jpg",
  "public\\Gallery\\image6.jpg",
  "public\\Gallery\\image7.jpg",
  "public\\Gallery\\image8.jpg",
  "public\\Gallery\\image9.jpeg",
  "public\\Gallery\\image10.jpeg",
  "public\\Gallery\\image11.jpeg",
  "public\\Gallery\\image12.jpeg",
  "public\\Gallery\\image13.jpeg",
  "public\\Gallery\\image14.jpeg",
  "public\\Gallery\\image15.jpeg",
  "public\\Gallery\\image16.jpeg",
  "public\\Gallery\\image17.jpeg",
  "public\\Gallery\\image18.jpeg",
  "public\\Gallery\\image19.jpeg",
  "public\\Gallery\\image20.jpeg",
  "public\\Gallery\\image21.jpeg",
  "public\\Gallery\\image22.jpeg",
  "public\\Gallery\\image23.jpeg",
  "public\\Gallery\\image24.jpeg",
  "public\\Gallery\\image25.jpeg",
  "public\\Gallery\\image26.jpeg",
  "public\\Gallery\\image27.jpeg",
  "public\\Gallery\\image28.jpeg",
  "public\\Gallery\\image29.jpeg",
  "public\\Gallery\\image30.jpeg"
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
