document.addEventListener('DOMContentLoaded', function() {
  const quizButtons = document.querySelectorAll('.quiz-btn');
  
  quizButtons.forEach(button => {
      button.addEventListener('click', function() {
          alert('This quiz is under development!');
          // Redirect to the actual quiz page or perform specific actions
      });
  });
});
