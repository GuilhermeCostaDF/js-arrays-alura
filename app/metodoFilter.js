const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  console.log(elementoBtn);
  const categoria = elementoBtn.value;
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  exibirOsLivrosNaTela(livrosFiltrados);
}
