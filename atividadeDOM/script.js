const tabelaNome = document.getElementById("tableNome");


tabelaNome.addEventListener(
  "mouseover",
  (event) => {
  
    event.target.style.color = "red";

  });
  tabelaNome.addEventListener("mouseout",
  (event) =>{
    event.target.style.color ="black";
  })


  const tabelaidade = document.getElementById("tableIdade");


  tabelaidade.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.color = "blue";

   
  });
  tabelaidade.addEventListener("mouseout",
  (event) =>{
    event.target.style.color ="black";
  })

const tabelaProfissao = document.getElementById("tableProfissao");


tabelaProfissao.addEventListener(
"mouseover",
(event) => {
  event.target.style.color = "yellow
  
  ";

 
});
tabelaProfissao.addEventListener("mouseout",
(event) =>{
  event.target.style.color ="black";

})
