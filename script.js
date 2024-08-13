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
