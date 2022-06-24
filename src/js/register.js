function registerUser() {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  password = window.btoa(password);

  var user = {
    email: email,
    password: password,
  };

  localStorage.setItem(email, JSON.stringify(user));

  window.location.assign("/src/page/login.html");
}
function deleteUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let user = localStorage.getItem(email);

  if (user) {
    user = JSON.parse(user);
    user.password = window.atob(user.password);
    if (email == user.email && password == user.password) {
      localStorage.removeItem(email);
      alert("User successfully deleted");
      window.location.assign("/src/page/login.html");
    } else {
      alert("Incorrect email or password");
    }
  } else {
    alert("User not found");
    window.location.assign("/src/page/delete.html");
  }
}
function deleteAll() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.assign("/src/page/login.html");
}
