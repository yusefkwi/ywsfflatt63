const course = {
  id: 201,
  name: "أساسيات تطوير الواجهات",
  instructor: "أ. هند القحطاني",
  description: "دورة عملية لتعلم تصميم واجهات المستخدم باستخدام HTML وCSS وJavaScript.",
  startDate: "10 أغسطس 2025"
};

// عرض تفاصيل الدورة داخل العنصر
window.onload = function () {
  const container = document.getElementById("course-details");

  container.innerHTML = `
    <h2>${course.name}</h2>
    <p><strong>المدرب:</strong> ${course.instructor}</p>
    <p><strong>الوصف:</strong> ${course.description}</p>
    <p><strong>تاريخ البدء:</strong> ${course.startDate}</p>
  `;

  // حفظ الدورة مؤقتًا في localStorage
  localStorage.setItem("currentCourse", JSON.stringify(course));
};

// زر التسجيل
function confirmEnrollment() {
  const course = JSON.parse(localStorage.getItem("currentCourse"));
  let enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const already = enrolled.some(c => c.id === course.id);
  if (already) {
    alert("أنت مسجل مسبقًا في هذه الدورة.");
    return;
  }

  enrolled.push(course);
  localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
  alert("✅ تم التسجيل في الدورة!");

  // يمكن تحويله تلقائيًا إلى صفحة "دوراتي"
  window.location.href = "my-courses.html";
}