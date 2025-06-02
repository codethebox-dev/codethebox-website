const courseList = document.getElementById("courseList");

let courses = [
  { title: "HTML Tutorial", url: "html.html" },
  { title: "CSS Tutorial", url: "css.html" },
  { title: "JavaScript Tutorial", url: "js.html" },
];

function renderCourses() {
  courseList.innerHTML = "";
  courses.forEach((course, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${course.title}</td>
      <td><a href="${course.url}" target="_blank">${course.url}</a></td>
      <td>
        <button onclick="editCourse(${index})">Edit</button>
        <button onclick="deleteCourse(${index})">Delete</button>
      </td>
    `;
    courseList.appendChild(row);
  });
}

function addCourse() {
  const title = document.getElementById("courseTitle").value;
  const url = document.getElementById("courseURL").value;
  if (title && url) {
    courses.push({ title, url });
    renderCourses();
    document.getElementById("courseTitle").value = "";
    document.getElementById("courseURL").value = "";
  }
}

function editCourse(index) {
  const newTitle = prompt("Edit Course Title:", courses[index].title);
  const newURL = prompt("Edit Course URL:", courses[index].url);
  if (newTitle && newURL) {
    courses[index] = { title: newTitle, url: newURL };
    renderCourses();
  }
}

function deleteCourse(index) {
  if (confirm("Are you sure you want to delete this course?")) {
    courses.splice(index, 1);
    renderCourses();
  }
}

// Initial render
window.onload = renderCourses;
