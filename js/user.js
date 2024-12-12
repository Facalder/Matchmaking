const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function UserRegister() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username || !password) {
    alert("Username dan password harus diisi!");
    return;
  }

  const existingUser = localStorage.getItem("username");

  if (existingUser === username) {
    alert("Username sudah dipakai");
    window.location.href = "../register.html";
    return;
  }

  let id = 0;
  let storedId = parseInt(id++);
  localStorage.setItem("id", storedId);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  usernameInput.value = " ";
  passwordInput.value = " ";

  alert("Registrasi berhasil!");
  window.location.href = "../index.html";
}
