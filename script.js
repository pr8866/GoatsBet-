document.addEventListener("DOMContentLoaded", function () {
  const rangeSlider = document.getElementById("profitRange");
  const rangeValue = document.getElementById("rangeValue");

  rangeSlider.addEventListener("input", function () {
    rangeValue.textContent = rangeSlider.value;
  });

  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();

    if (!/^\d{11}$/.test(cpf)) {
      alert("CPF inválido. Deve conter 11 dígitos numéricos.");
      return;
    }

    if (!/^\d{11}$/.test(telefone)) {
      alert("Telefone inválido. Deve conter 11 dígitos com DDD.");
      return;
    }

    alert("Cadastro enviado com sucesso!"); // Simula envio
  });
});
