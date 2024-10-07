// script.js

// Function to show an alert when the "Start Learning!" button is clicked
function handleStartLearning() {
  alert('Starting Learning Journey!');
}

// Function to show an alert when the "Learn More" button is clicked in the Learn section
function handleLearnMore() {
  alert('Learn More About the Constitution!');
}

// Function to show an alert when the "Play Now" button is clicked in the Games section
function handlePlayNow() {
  alert('Enjoy the Games!');
}

// Function to show an alert when the "Take a Quiz" button is clicked in the Quizzes section
function handleTakeQuiz() {
  alert('Good Luck with the Quizzes!');
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', () => {
  // Buttons on the Home Page
  document.querySelector('.btn-primary').addEventListener('click', handleStartLearning);

  // Buttons in the Learn Section
  document.querySelector('#learn-section .btn-secondary').addEventListener('click', handleLearnMore);

  // Buttons in the Games Section
  document.querySelectorAll('.games-section .play-btn').forEach(button => {
      button.addEventListener('click', handlePlayNow);
  });

  // Buttons in the Quizzes Section
  document.querySelectorAll('.quizzes-section .quiz-btn').forEach(button => {
      button.addEventListener('click', handleTakeQuiz);
  });
});
