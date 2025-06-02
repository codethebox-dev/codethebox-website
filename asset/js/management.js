document.addEventListener("DOMContentLoaded", function () {
  const role = localStorage.getItem("role");
  if (!role) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("welcomeRole").textContent = role.charAt(0).toUpperCase() + role.slice(1);

  const courseTable = document.getElementById("courseTableBody");
  const form = document.getElementById("course-form");

  function loadCourses() {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    courseTable.innerHTML = "";
    courses.forEach((course, index) => {
      const row = courseTable.insertRow();
      row.innerHTML = `
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td>
          <button onclick="deleteCourse(${index})">Delete</button>
        </td>`;
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.push({ title, instructor });
    localStorage.setItem("courses", JSON.stringify(courses));
    loadCourses();
    form.reset();
  });

  window.deleteCourse = function (index) {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.splice(index, 1);
    localStorage.setItem("courses", JSON.stringify(courses));
    loadCourses();
  };

  loadCourses();
});
