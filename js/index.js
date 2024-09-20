// Existing animation code
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

// Sound and navigation logic
document.getElementById('openButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent immediate navigation

  const sound = document.getElementById('clickSound');
  sound.play(); // Play the sound

  // Wait for the sound to finish before navigating (47 seconds)
  sound.onended = function() {
    window.location.href = 'flower.html'; // Redirect to the new page after sound ends
  };
});
