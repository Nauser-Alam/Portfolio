var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove active classes from all tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-links");
    }
    // Remove active classes from all tab contents
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab link
    document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`).classList.add("active-links");
    // Add active class to the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
// *************************************  My Works/Projects********
// script.js

function openPopup(videoId) {
  const popup = document.getElementById('video-popup');
  const videos = document.querySelectorAll('.video-container video');

  // Hide all videos
  videos.forEach(video => {
      video.style.display = 'none';
      video.pause();
      video.currentTime = 0;
  });

  // Show the selected video
  const selectedVideo = document.getElementById(videoId);
  if (selectedVideo) {
      selectedVideo.style.display = 'block';
  }

  // Show the popup
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('video-popup');
  const videos = document.querySelectorAll('.video-container video');

  // Hide the popup and pause all videos
  popup.style.display = 'none';
  videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
  });
}
// ******************** Achievement and certificate section****************
// script.js

// script.js

let slideIndex = 0;
const slideInterval = 4000; // 2 seconds

function showSlides() {
    const slides = document.querySelector('.certificate-track');
    const items = document.querySelectorAll('.certificate-item');
    const totalItems = items.length;
    const indicators = document.querySelectorAll('.indicator');

    slideIndex++;
    if (slideIndex >= totalItems) { slideIndex = 0; }
    
    slides.style.transform = `translateX(-${slideIndex * 320}px)`; // 320px = item width + margin

    // Update the indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });

    setTimeout(showSlides, slideInterval);
}

function openModal(certId) {
    const modal = document.getElementById('certificate-modal');
    const certificates = document.querySelectorAll('.modal-content img');

    // Hide all certificates
    certificates.forEach(cert => {
        cert.style.display = 'none';
    });

    // Show the selected certificate
    const selectedCert = document.getElementById(certId);
    if (selectedCert) {
        selectedCert.style.display = 'block';
    }

    // Show the modal
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('certificate-modal');
    const certificates = document.querySelectorAll('.modal-content img');

    // Hide the modal
    modal.style.display = 'none';

    // Hide all certificates
    certificates.forEach(cert => {
        cert.style.display = 'none';
    });
}

// Initialize the sliding effect and indicators
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.certificate-item');
    const indicatorContainer = document.querySelector('.indicator-container');

    // Create indicators
    items.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        indicatorContainer.appendChild(indicator);
    });

    showSlides();
});
// slide menu******************************************************

var sidemenu= document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}
// ************************* for contact form**********************
const scriptURL = 'https://script.google.com/macros/s/AKfycbxU9RcrB4vdPinBp4JjDVau_bMAIGUeODbhnWTHLuxnXbzjlXkR-hk71zt_-ieveUaZ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
          msg.innerHTML=""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })