// Existing title animation code
const title = document.querySelector('.title');
const text = 'I Have Something'.split('');
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`;
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Generate a random delay between 0 and 3 seconds
  element.style.animationDelay = `${randomDelay}s`;
});

// Play sound when the button is clicked and save the current sound state before navigating
document.getElementById('openButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent immediate navigation
  const sound = document.getElementById('clickSound');
  sound.play(); // Play the sound

  // Store the current sound time in sessionStorage
  sessionStorage.setItem('soundTime', sound.currentTime);

  // Redirect to the next page after a slight delay
  setTimeout(function() {
    window.location.href = "flower.html"; // Navigate to flower.html
  }, 500); // Delay of 500ms to ensure sound starts playing
});
