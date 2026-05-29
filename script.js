document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainContent = document.getElementById("main-content");
  const bgMusic = document.getElementById("bg-music");

  startBtn.addEventListener("click", () => {
    // 1. Intentar reproducir el audio de fondo
    bgMusic.play().catch((error) => {
      console.log(
        "La reproducción automática fue prevenida por el navegador:",
        error,
      );
    });

    // 2. Transición de desvanecimiento suave para la pantalla de bienvenida
    welcomeScreen.style.transition = "opacity 0.5s ease";
    welcomeScreen.style.opacity = 0;

    // 3. Ocultar el Splash y mostrar la invitación tras terminar la animación
    setTimeout(() => {
      welcomeScreen.classList.add("hidden");
      document.getElementById("page").classList.remove("hidden"); // <-- Cambiado a 'page'
    }, 500);
  });
});
