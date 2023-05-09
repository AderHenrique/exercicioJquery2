$(document).ready(function () {
  $("#cpf").mask("000-000-000-00");
  $("#telefone").mask("(00) 00000-0000)");
  $("#cep").mask("00000-000");
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      cpf: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor , insira seu nome!",
      cpf: "Por favor , insira seu cpf!",
      email: "Por favor , insira seu e-mail!",
      telefone: "Por favor , insira seu telefone!",
      endereco: "Por favor , insira seu endereço!",
      cep: "Por favor , insira seu cep",
    },
    submitHandler: function (form) {
      alert("Cadastro realizado com sucesso");
      $("#nome").val("");
      $("#cpf").val("");
      $("#email").val("");
      $("#telefone").val("");
      $("#endereco").val("");
      $("#cep").val("");
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
