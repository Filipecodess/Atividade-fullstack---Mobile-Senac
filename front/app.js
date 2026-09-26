/*const API_URL = "http://localhost:3000/usuarios";

const formulario = document.querySelector("#form-usuario");
const campoId = document.querySelector("#usuario-id");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoIdade = document.querySelector("#idade");
const tituloFormulario = document.querySelector("#titulo-formulario");
const botaoSalvar = document.querySelector("#botao-salvar");
const botaoCancelar = document.querySelector("#botao-cancelar");
const listaUsuarios = document.querySelector("#lista-usuarios");
const mensagem = document.querySelector("#mensagem");
const formularioBusca = document.querySelector("#form-busca");
const campoBuscaId = document.querySelector("#busca-id");

async function fazerRequisicao(url, opcoes = {}) {
  const resposta = await fetch(url, opcoes);

  if (!resposta.ok) {
    const erro = await resposta.json().catch(() => ({}));
    throw new Error(erro.mensagem || "Não foi possível concluir a operação");
  }

  if (resposta.status === 204) {
    return null;
  }

  return resposta.json();
}

function mostrarMensagem(texto, erro = false) {
  mensagem.textContent = texto;
  mensagem.classList.toggle("erro", erro);
}

function criarCartaoUsuario(usuario) {
  const cartao = document.createElement("article");
  cartao.className = "usuario";

  const nome = document.createElement("h3");
  nome.textContent = usuario.nome;

  const email = document.createElement("p");
  email.textContent = `E-mail: ${usuario.email}`;

  const idade = document.createElement("p");
  idade.textContent = `Idade: ${usuario.idade ?? "Não informada"}`;

  const id = document.createElement("p");
  id.textContent = `ID: ${usuario._id}`;

  const acoes = document.createElement("div");
  acoes.className = "acoes-usuario";

  const botaoEditar = document.createElement("button");
  botaoEditar.type = "button";
  botaoEditar.textContent = "Editar";
  botaoEditar.addEventListener("click", () => carregarUsuarioParaEdicao(usuario._id));

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.className = "perigo";
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.addEventListener("click", () => excluirUsuario(usuario._id));

  acoes.append(botaoEditar, botaoExcluir);
  cartao.append(nome, email, idade, id, acoes);

  return cartao;
}

function exibirUsuarios(usuarios) {
  listaUsuarios.innerHTML = "";

  if (usuarios.length === 0) {
    mostrarMensagem("Nenhum usuário cadastrado");
    return;
  }

  usuarios.forEach((usuario) => {
    listaUsuarios.appendChild(criarCartaoUsuario(usuario));
  });

  mostrarMensagem(`${usuarios.length} usuário(s) encontrado(s)`);
}

async function listarUsuarios() {
  try {
    mostrarMensagem("Carregando usuários...");
    const usuarios = await fazerRequisicao(API_URL);
    exibirUsuarios(usuarios);
  } catch (erro) {
    listaUsuarios.innerHTML = "";
    mostrarMensagem(erro.message, true);
  }
}

async function buscarUsuarioPorId(id) {
  const usuario = await fazerRequisicao(`${API_URL}/${id}`);
  exibirUsuarios([usuario]);
  return usuario;
}

async function salvarUsuario(evento) {
  evento.preventDefault();

  const usuario = {
    nome: campoNome.value.trim(),
    email: campoEmail.value.trim()
  };

  if (campoIdade.value !== "") {
    usuario.idade = Number(campoIdade.value);
  }

  const id = campoId.value;
  const estaEditando = Boolean(id);
  const url = estaEditando ? `${API_URL}/${id}` : API_URL;
  const metodo = estaEditando ? "PUT" : "POST";

  try {
    await fazerRequisicao(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    });

    limparFormulario();
    mostrarMensagem(estaEditando ? "Usuário atualizado" : "Usuário cadastrado");
    await listarUsuarios();
  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}

async function carregarUsuarioParaEdicao(id) {
  try {
    const usuario = await fazerRequisicao(`${API_URL}/${id}`);

    campoId.value = usuario._id;
    campoNome.value = usuario.nome;
    campoEmail.value = usuario.email;
    campoIdade.value = usuario.idade ?? "";
    tituloFormulario.textContent = "Editar usuário";
    botaoSalvar.textContent = "Salvar alterações";
    botaoCancelar.classList.remove("oculto");
    campoNome.focus();
  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}

async function excluirUsuario(id) {
  const confirmou = window.confirm("Deseja excluir este usuário?");

  if (!confirmou) {
    return;
  }

  try {
    await fazerRequisicao(`${API_URL}/${id}`, { method: "DELETE" });
    limparFormulario();
    mostrarMensagem("Usuário excluído");
    await listarUsuarios();
  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}

function limparFormulario() {
  formulario.reset();
  campoId.value = "";
  tituloFormulario.textContent = "Novo usuário";
  botaoSalvar.textContent = "Cadastrar";
  botaoCancelar.classList.add("oculto");
}

formulario.addEventListener("submit", salvarUsuario);
botaoCancelar.addEventListener("click", limparFormulario);
document.querySelector("#botao-atualizar").addEventListener("click", listarUsuarios);
document.querySelector("#botao-limpar-busca").addEventListener("click", () => {
  campoBuscaId.value = "";
  listarUsuarios();
});

formularioBusca.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const id = campoBuscaId.value.trim();

  if (!id) {
    mostrarMensagem("Informe um ID para realizar a busca", true);
    return;
  }

  try {
    await buscarUsuarioPorId(id);
  } catch (erro) {
    listaUsuarios.innerHTML = "";
    mostrarMensagem(erro.message, true);
  }
});

if ("serviceWordirker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

listarUsuarios();*/
const API_URL = "http://localhost:3000/livros";

// Elementos do formulário
const formulario = document.querySelector("#form-livro");
const campoId = document.querySelector("#livro-id");
const campoTitulo = document.querySelector("#titulo");
const campoAutor = document.querySelector("#autor");
const campoGenero = document.querySelector("#genero");
const campoAnoPublicacao = document.querySelector("#anoPublicacao");
const campoDisponivel = document.querySelector("#disponivel");

// Elementos da interface
const tituloFormulario = document.querySelector("#titulo-formulario");
const botaoSalvar = document.querySelector("#botao-salvar");
const botaoCancelar = document.querySelector("#botao-cancelar");
const listaLivros = document.querySelector("#lista-livros");
const mensagem = document.querySelector("#mensagem");

// Elementos da busca
const formularioBusca = document.querySelector("#form-busca");
const campoBuscaId = document.querySelector("#busca-id");


async function fazerRequisicao(url, opcoes = {}) {
  const resposta = await fetch(url, opcoes);

  if (!resposta.ok) {
    const erro = await resposta.json().catch(() => ({}));

    throw new Error(
      erro.mensagem || "Não foi possível concluir a operação"
    );
  }

  if (resposta.status === 204) {
    return null;
  }

  return resposta.json();
}


function mostrarMensagem(texto, erro = false) {
  mensagem.textContent = texto;
  mensagem.classList.toggle("erro", erro);
}


function criarCartaoLivro(livro) {
  const cartao = document.createElement("article");
  cartao.className = "usuario";

  const titulo = document.createElement("h3");
  titulo.textContent = livro.titulo;

  const autor = document.createElement("p");
  autor.textContent = `Autor: ${livro.autor}`;

  const genero = document.createElement("p");
  genero.textContent = `Gênero: ${livro.genero}`;

  const anoPublicacao = document.createElement("p");
  anoPublicacao.textContent =
    `Ano de publicação: ${livro.anoPublicacao}`;

  const disponivel = document.createElement("p");
  disponivel.textContent =
    `Disponível: ${livro.disponivel ? "Sim" : "Não"}`;

  const id = document.createElement("p");
  id.textContent = `ID: ${livro._id}`;

  const acoes = document.createElement("div");
  acoes.className = "acoes-usuario";

  const botaoEditar = document.createElement("button");
  botaoEditar.type = "button";
  botaoEditar.textContent = "Editar";

  botaoEditar.addEventListener("click", () => {
    carregarLivroParaEdicao(livro._id);
  });

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.className = "perigo";
  botaoExcluir.textContent = "Excluir";

  botaoExcluir.addEventListener("click", () => {
    excluirLivro(livro._id);
  });

  acoes.append(botaoEditar, botaoExcluir);

  cartao.append(
    titulo,
    autor,
    genero,
    anoPublicacao,
    disponivel,
    id,
    acoes
  );

  return cartao;
}


function exibirLivros(livros) {
  listaLivros.innerHTML = "";

  if (livros.length === 0) {
    mostrarMensagem("Nenhum livro cadastrado");
    return;
  }

  livros.forEach((livro) => {
    listaLivros.appendChild(criarCartaoLivro(livro));
  });

  mostrarMensagem(
    `${livros.length} livro(s) encontrado(s)`
  );
}


async function listarLivros() {
  try {
    mostrarMensagem("Carregando livros...");

    const livros = await fazerRequisicao(API_URL);

    exibirLivros(livros);

  } catch (erro) {
    listaLivros.innerHTML = "";
    mostrarMensagem(erro.message, true);
  }
}


async function buscarLivroPorId(id) {
  const livro = await fazerRequisicao(
    `${API_URL}/${id}`
  );

  exibirLivros([livro]);

  return livro;
}


async function salvarLivro(evento) {
  evento.preventDefault();

  const livro = {
    titulo: campoTitulo.value.trim(),
    autor: campoAutor.value.trim(),
    genero: campoGenero.value.trim(),
    anoPublicacao: Number(campoAnoPublicacao.value),
    disponivel: campoDisponivel.checked
  };

  const id = campoId.value;

  const estaEditando = Boolean(id);

  const url = estaEditando
    ? `${API_URL}/${id}`
    : API_URL;

  const metodo = estaEditando
    ? "PUT"
    : "POST";

  try {
    await fazerRequisicao(url, {
      method: metodo,

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(livro)
    });

    limparFormulario();

    mostrarMensagem(
      estaEditando
        ? "Livro atualizado"
        : "Livro cadastrado"
    );

    await listarLivros();

  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}


async function carregarLivroParaEdicao(id) {
  try {
    const livro = await fazerRequisicao(
      `${API_URL}/${id}`
    );

    campoId.value = livro._id;
    campoTitulo.value = livro.titulo;
    campoAutor.value = livro.autor;
    campoGenero.value = livro.genero;
    campoAnoPublicacao.value = livro.anoPublicacao;
    campoDisponivel.checked = livro.disponivel;

    tituloFormulario.textContent = "Editar livro";
    botaoSalvar.textContent = "Salvar alterações";

    botaoCancelar.classList.remove("oculto");

    campoTitulo.focus();

  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}


async function excluirLivro(id) {
  const confirmou = window.confirm(
    "Deseja excluir este livro?"
  );

  if (!confirmou) {
    return;
  }

  try {
    await fazerRequisicao(
      `${API_URL}/${id}`,
      {
        method: "DELETE"
      }
    );

    limparFormulario();

    mostrarMensagem("Livro excluído");

    await listarLivros();

  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}


function limparFormulario() {
  formulario.reset();

  campoId.value = "";

  // O padrão do nosso formulário é livro disponível.
  campoDisponivel.checked = true;

  tituloFormulario.textContent = "Novo livro";
  botaoSalvar.textContent = "Cadastrar Livro";

  botaoCancelar.classList.add("oculto");
}


// Eventos do formulário
formulario.addEventListener(
  "submit",
  salvarLivro
);

botaoCancelar.addEventListener(
  "click",
  limparFormulario
);

document
  .querySelector("#botao-atualizar")
  .addEventListener(
    "click",
    listarLivros
  );

document
  .querySelector("#botao-limpar-busca")
  .addEventListener("click", () => {
    campoBuscaId.value = "";
    listarLivros();
  });


// Busca por ID
formularioBusca.addEventListener(
  "submit",
  async (evento) => {

    evento.preventDefault();

    const id = campoBuscaId.value.trim();

    if (!id) {
      mostrarMensagem(
        "Informe um ID para realizar a busca",
        true
      );

      return;
    }

    try {
      await buscarLivroPorId(id);

    } catch (erro) {
      listaLivros.innerHTML = "";

      mostrarMensagem(
        erro.message,
        true
      );
    }
  }
);


// Service Worker da PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}


// Carrega os livros quando a página abre
listarLivros();
