window.onload = function () {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (isLoggedIn !== "true") {
    alert("❌ يجب تسجيل الدخول أولاً");
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const welcome = document.getElementById("welcomeMessage");

  if (user && user.username) {
    welcome.innerText = `مرحبًا، ${user.username} 👋 نتمنى لك يوماً رائعاً!`;
  } else {
    welcome.innerText = "مرحبًا بك في لوحة المستخدم.";
  }
};
const courses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
const stats = document.getElementById("stats");

if (courses.length === 0) {
  stats.innerText = "❗️ لم تقم بالتسجيل في أي دورة بعد.";
  stats.className = "stats stats-warning";
} else {
  stats.innerText = `📊 عدد الدورات المسجلة: ${courses.length}`;
  stats.className = "stats stats-success";
}
// زر تسجيل الخروج
function logout() {
  localStorage.removeItem("loggedIn");
  alert("🚪 تم تسجيل الخروج بنجاح");
  window.location.href = "index.html";
}

const user = JSON.parse(localStorage.getItem("currentUser"));
if (user && user.username) {
  welcome.innerText = `مرحبًا، ${user.username} 👋`;
}