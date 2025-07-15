document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      id: 1,
      title: "مقدمة في البرمجة",
      description: "تعلم أساسيات البرمجة باستخدام بايثون.",
    },
    {
      id: 2,
      title: "تصميم الواجهات",
      description: "تعلم HTML و CSS و JavaScript.",
    },
    {
      id: 3,
      title: "مبادئ الذكاء الاصطناعي",
      description: "مقدمة مبسطة حول الذكاء الاصطناعي.",
    }
  ];

  const list = document.getElementById("courses-list");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button onclick="viewDetails(${course.id})">👁️ مشاهدة التفاصيل</button>
    `;

    list.appendChild(card);
  });
});

function viewDetails(courseId) {
  localStorage.setItem("selectedCourseId", courseId);
  window.location.href = "course-details.html";
}

function goBack() {
  window.location.href = "dashboard.html";
}

//إذا المستخدم سجل الدخول → يشوف اسمه في الصفحة

//إذا المستخدم سجل الدخول → يشوف اسمه في الصفحة

//إذا لم يسجل → يتم توجيهه تلقائيًا إلى login.html

//د زر تسجيل الخروج ينقله إلى index.html