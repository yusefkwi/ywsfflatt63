function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();
  const confirm = document.getElementById("reg-confirm").value.trim();
  const message = document.getElementById("register-message");

  if (password !== confirm) {
    message.style.color = "red";
    message.textContent = "كلمة المرور غير متطابقة!";
    return false;
  }

  // تخزين البيانات في localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  message.style.color = "green";
  message.textContent = "تم إنشاء الحساب بنجاح!";
  
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);

  return false;}


function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("login-message");

  // جلب البيانات من localStorage
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    message.style.color = "green";
    message.textContent = "تم تسجيل الدخول بنجاح!";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // نجهزها لاحقًا
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "بيانات الدخول غير صحيحة!";
  }

  return false;
}

//courses.js

//تفاصيل الدورات


//الاختبارات

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

  // الانتقال إلى صفحة النتيجة
  window.location.href = "result.html";
}