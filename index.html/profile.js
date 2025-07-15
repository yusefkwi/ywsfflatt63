/*تعديل الملف*/
window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) return;

  document.getElementById("username").value = currentUser.username;
  document.getElementById("email").value = currentUser.email;
};

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const newUsername = document.getElementById("username").value;
  const newPassword = document.getElementById("password").value;

  const updatedUsers = users.map(user => {
    if (user.email === currentUser.email) {
      return {
        ...user,
        username: newUsername,
        password: newPassword || user.password,
      };
    }
    return user;
  });

  // حفظ التحديثات
  localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
  localStorage.setItem("currentUser", JSON.stringify({
    ...currentUser,
    username: newUsername,
    password: newPassword || currentUser.password,
  }));

  document.getElementById("message").innerText = "✅ تم تحديث الملف الشخصي.";
});