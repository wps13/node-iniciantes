/*
0 - obter um usuario
1 - Obter o num do telefone de um usuario a partir de seu id
2 - Obter o endereco do usuario pelo id
 */

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Aladdin",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      telefone: "1120484",
      ddd: 84
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "rua dos bobos",
      numero: 1
    });
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  if (erro) {
    console.log("erro ao recuperar usuario");
    return;
  }
  console.log("usuario", usuario);
  obterTelefone(usuario.id, (errorTelefone, telefone) => {
    if (errorTelefone) {
      console.log("erro ao recuperar telefone");
      return;
    }
    console.log("telefone", telefone);
    obterEndereco(usuario.id, (errorEndereco, endereco) => {
      if (errorEndereco) {
        console.log("erro ao recuperar endereço");
        return;
      }
      console.log("endereco", endereco);
    });
  });
}

obterUsuario(resolverUsuario);
