function carregar() {
  var msg = document.getElementById("msg");
  var section = document.getElementById("page");

  // Pegando horário de Brasília corretamente
  var agora = new Date();

  var hora = 19;
  var minutos = agora.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    minute: "2-digit",
  });

  msg.innerHTML = `<h1>Agora são ${hora}:${minutos} (Brasília)</h1>`;

  if (hora >= 6 && hora <= 12) {
    msg.innerHTML += `<img src="img/manha.png"> <h1>Bom dia!</h1>`;
    document.body.style.background = "#f1d789";
    section.style.background = "#f1f590";
  } else if (hora >= 13 && hora <= 17) {
    msg.innerHTML += `<img src="img/tarde.png"> <h1>Boa tarde!</h1>`;
    document.body.style.background = "#ff8b55";
    section.style.background = "#ffb389";
  } else {
    msg.innerHTML += `<img src="img/noite.png"> <h1>Boa noite!</h1>`;
    document.body.style.background = "#334244";
  }
}
