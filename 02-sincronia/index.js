/*
0 - obter um usuario
1 - Obter o num do telefone de um usuario a partir de seu id
2 - Obter o endereco do usuario pelo id
 */

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: "Aladdin",
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        telefone: "1120484",
        ddd: 84
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "rua dos bobos",
      numero: 1
    });
  }, 2000);
}

const util = require("util");

const obterEnderecoAsync = util.promisify(obterEndereco);

obterUsuario()
  .then(function(usuario) {
    return obterTelefone(usuario.id).then(function(telefone) {
      return {
        usuario,
        telefone
      };
    });
  })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      };
    });
  })
  .then(function(resultado) {
    console.log("resultado", resultado);
  })
  .catch(function(error) {
    console.error("encontrou erro ao recuperar usuario");
  });
