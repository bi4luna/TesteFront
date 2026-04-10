// Scroll suave para seções
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Atualiza ano do rodapé
document.addEventListener("DOMContentLoaded", () => {
  const anoRodape = document.getElementById("ano-rodape");
  if (anoRodape) {
    anoRodape.textContent = new Date().getFullYear();
  }

  // Galeria: troca de imagem principal ao clicar na miniatura
  const heroMainImage = document.getElementById("hero-main-image");
  const thumbs = document.querySelectorAll(".gallery-thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const src = thumb.getAttribute("data-src");
      if (src && heroMainImage) {
        heroMainImage.src = src;
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      }
    });
  });

  // Validação simples do formulário de check-in
  const checkinForm = document.getElementById("checkin-form");
  const checkinStatus = document.getElementById("checkin-status");

  if (checkinForm && checkinStatus) {
    checkinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const requiredFields = checkinForm.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach((field) => {
        if (
          !field.value.trim() ||
          (field.type === "checkbox" && !field.checked)
        ) {
          field.style.borderColor = "#c62828";
          valid = false;
        } else {
          field.style.borderColor = "rgba(15, 23, 42, 0.16)";
        }
      });

      if (!valid) {
        checkinStatus.textContent =
          "Por favor, preencha todos os campos obrigatórios marcados com *.";
        checkinStatus.className = "form-status error";
        return;
      }

      const nome = document.getElementById("nome").value;
      checkinStatus.textContent =
        "Obrigado, " +
        nome +
        "! Seu pré check-in foi registrado. Em breve entraremos em contato para confirmar sua reserva.";
      checkinStatus.className = "form-status success";

      checkinForm.reset();
    });
  }

  // Validação simples do formulário de contato
  const contatoForm = document.getElementById("contato-form");
  const contatoStatus = document.getElementById("contato-status");

  if (contatoForm && contatoStatus) {
    contatoForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const requiredFields = contatoForm.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = "#c62828";
          valid = false;
        } else {
          field.style.borderColor = "rgba(15, 23, 42, 0.16)";
        }
      });

      if (!valid) {
        contatoStatus.textContent =
          "Por favor, preencha todos os campos obrigatórios.";
        contatoStatus.className = "form-status error";
        return;
      }

      contatoStatus.textContent =
        "Mensagem enviada com sucesso! Nossa equipe retornará em breve.";
      contatoStatus.className = "form-status success";

      contatoForm.reset();
    });
  }
});