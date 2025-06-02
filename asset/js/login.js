document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if ((user === "admin" || user === "instructor") && pass === "123456") {
    localStorage.setItem("role", user);
    window.location.href = "management.html";
  } else {
    document.getElementById("loginMsg").textContent = "Invalid login. Try admin/123456 or instructor/123456";
    document.getElementById("loginMsg").style.color = "red";
  }
});
