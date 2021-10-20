const questions = document.querySelectorAll('.faq-card');

questions.forEach(question => {
  console.log(question);
  question.addEventListener('click', function () {
    console.log(question);
    question.classList.toggle('active');
  });
});
