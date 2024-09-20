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

// Play sound when the button is clicked
document.getElementById('openButton').addEventListener('click', function() {
  const sound = document.getElementById('clickSound');
  sound.play(); // Play the sound
});
