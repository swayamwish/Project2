document.addEventListener('DOMContentLoaded', function() {
  const playButtons = document.querySelectorAll('.play-btn');

  playButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
          if (index === 0) {
              // Redirect or load the Snake and Ladder game for the first button
              window.location.href = 'snake-ladder.html'; // Change this to the actual game URL or logic
          } else {
              alert('This game is under development!');
          }
      });
  });
});
