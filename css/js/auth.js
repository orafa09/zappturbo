// auth.js - Protege páginas restritas como a dashboard

(function () {
  const isLoggedIn = localStorage.getItem("zapturbo_logged_in");

  // Se não estiver logado, redireciona para login.html
  if (!isLoggedIn || isLoggedIn !== "true") {
    alert("Acesso não autorizado. Faça login primeiro.");
    window.location.href = "login.html";
  }

  // Você pode adicionar mais regras aqui no futuro, como expiração de sessão etc.
})();
