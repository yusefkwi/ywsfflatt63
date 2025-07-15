const course = {
  id: 101,
  name: "دورة تطوير الويب الكامل",
  instructor: "أ. محمد العتيبي",
  description: "دورة شاملة لتعلم HTML, CSS, JavaScript مع مشاريع عملية.",
  startDate: "1 أغسطس 2025"
};

// عرض بيانات الدورة
window.onload = function () {
  const container = document.getElementById("course-info");
  container.innerHTML = `
    <h2>${course.name}</h2>
    <p><strong>المدرب:</strong> ${course.instructor}</p>
    <p><strong>الوصف:</strong> ${course.description}</p>
    <p><strong>تاريخ البدء:</strong> ${course.startDate}</p>
  `;
};

// عند الضغط على الزر
document.getElementById("enrollBtn").addEventListener("click", () => {
  let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  // تحقق إذا الدورة مسجلة مسبقًا
  const exists = enrolled.some(c => c.id === course.id);
  if (exists) {
    alert("❗️أنت مسجل مسبقًا في هذه الدورة.");
    return;
  }

  enrolled.push(course);
  localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
  alert("✅ تم التسجيل بنجاح!");

  // توجيه المستخدم إلى صفحة دوراتي
  window.location.href = "my-courses.html";
});