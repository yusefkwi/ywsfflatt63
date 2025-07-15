document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
const emailExists = users.some(user => user.email === email);
if (emailExists) {
  // البريد موجود بالفعل
} else {
  users.push({ username, email, password });
  localStorage.setItem("registeredUsers", JSON.stringify(users));
}

  // حفظ المستخدم مؤقتًا في localStorage
  localStorage.setItem("registeredUser", JSON.stringify(user));

  document.getElementById("message").innerText = "✅ تم إنشاء الحساب بنجاح!";

  // إعادة التوجيه بعد 2 ثانية
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  // قراءة المستخدمين المسجلين مسبقًا (كمصفوفة)
  let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // التحقق هل البريد مسجل مسبقًا
  const emailExists = users.some(user => user.email === email);

  if (emailExists) {
    document.getElementById("message").innerText = "❌ هذا البريد مسجل من قبل.";
    return;
  }

  // إضافة المستخدم الجديد للمصفوفة
  const newUser = { username, email, password };
  users.push(newUser);

  // حفظ المصفوفة الجديدة
  localStorage.setItem("registeredUsers", JSON.stringify(users));

  document.getElementById("message").innerText = "✅ تم إنشاء الحساب بنجاح!";

  // إعادة التوجيه بعد قليل
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});