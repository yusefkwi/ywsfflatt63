
function submitQuiz() {
  const form = document.getElementById("quiz-form");
  const answers = new FormData(form);

  let score = 0;
  const total = 3;

  for (let [name, value] of answers.entries()) {
    score += parseInt(value);
  }

  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizTotal", total);

  window.location.href = "result.html";
}
