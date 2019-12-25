/*
0 - obter um usuario
1 - Obter o num do telefone de um usuario a partir de seu id
2 - Obter o endereco do usuario pelo id
 */

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          id: 1,
          nome: "Aladdin",
          dataNascimento: new Date()
        }),
      1000
    );
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          telefone: "1120484",
          ddd: 84
        }),
      2000
    );
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(
    () =>
      callback(null, {
        rua: "rua dos bobos",
        numero: 1
      }),
    2000
  );
}

const util = require("util");

const obterEnderecoAsync = util.promisify(obterEndereco);

obterUsuario()
  .then(usuario =>
    obterTelefone(usuario.id).then(telefone => ({
      usuario,
      telefone
    }))
  )
  .then(resultado => {
    const enderecoPromise = obterEnderecoAsync(resultado.usuario.id);
    return enderecoPromise.then(endereco => ({ ...resultado, endereco }));
  })
  .then(resultado => {
    console.log("resultado", resultado);
  })
  .catch(error => {
    console.error("encontrou erro ao recuperar usuario", error);
  });
