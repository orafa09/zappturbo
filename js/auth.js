// Credenciais fixas (apenas para teste local)
const adminEmail = "admin@zapturbo.com";
const adminPassword = "senha123";

// Verifica se já está logado
if (window.location.pathname.includes("dashboard.html")) {
  const isLoggedIn = localStorage.getItem("zapturbo_logged_in");

  if (!isLoggedIn) {
    alert("Você precisa estar logado para acessar o painel.");
    window.location.href = "login.html";
  }
}

// Login manual
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("zapturbo_logged_in", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("E-mail ou senha incorretos.");
    }
  });
}
