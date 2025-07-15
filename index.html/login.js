document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (!storedUser) {
    document.getElementById("loginMessage").innerText = "⚠️ لا يوجد حساب مسجل.";
    return;
  }

  if (emailInput === storedUser.email && passwordInput === storedUser.password) {
    document.getElementById("loginMessage").innerText = "✅ تم تسجيل الدخول بنجاح!";
    localStorage.setItem("loggedIn", "true");

    // ⛳️ تحويل مباشر إلى الصفحة المطلوبة
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMessage").innerText = "❌ بيانات الدخول غير صحيحة.";
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value;

  // جلب جميع المستخدمين
  const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // البحث عن المستخدم المطابق
  const user = users.find(user => user.email === emailInput && user.password === passwordInput);

  if (user) {
    document.getElementById("loginMessage").innerText = "✅ تم تسجيل الدخول بنجاح!";
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    // تحويل للوحة التحكم
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMessage").innerText = "❌ بيانات الدخول غير صحيحة.";
  }
});