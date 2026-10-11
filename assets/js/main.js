// Myrmutation · portfolio de Gutix

(() => {
  // ── Hormiga que baja (o sube) por el túnel al hacer scroll ──
  const hormiga = document.querySelector(".hormiga-guia");
  const subsuelo = document.querySelector(".subsuelo");
  const pie = document.querySelector(".pie");

  if (hormiga && subsuelo) {
    let ultimoY = window.scrollY;
    let parar;

    const actualizar = () => {
      const y = window.scrollY;
      const centro = window.innerHeight * 0.55;
      const inicio = subsuelo.getBoundingClientRect().top;
      const fin = pie ? pie.getBoundingClientRect().top : Infinity;
      hormiga.classList.toggle("visible", inicio < centro && fin > centro + 40);

      if (y !== ultimoY) {
        hormiga.classList.toggle("subiendo", y < ultimoY);
        hormiga.classList.add("andando");
        clearTimeout(parar);
        parar = setTimeout(() => hormiga.classList.remove("andando"), 160);
      }
      ultimoY = y;
    };

    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    actualizar();
  }

  // ── Visor de la galería de salas ──
  const visor = document.querySelector(".visor");
  if (visor && typeof visor.showModal === "function") {
    const img = visor.querySelector(".visor__img");
    const titulo = visor.querySelector(".visor__titulo");
    const texto = visor.querySelector(".visor__texto");

    document.querySelectorAll(".galeria__boton").forEach((boton) => {
      boton.addEventListener("click", () => {
        img.src = boton.dataset.grande;
        img.alt = "Ilustración de la sala: " + boton.dataset.titulo;
        titulo.textContent = boton.dataset.titulo;
        texto.textContent = boton.dataset.texto;
        visor.showModal();
      });
    });

    // cerrar al tocar fuera
    visor.addEventListener("click", (ev) => {
      if (ev.target === visor) visor.close();
    });
  }
})();
