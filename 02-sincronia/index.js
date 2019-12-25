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

main();
async function main() {
  try {
    const usuario = await obterUsuario();
    const telefone = await obterTelefone(usuario.id);
    const endereco = await obterEnderecoAsync(usuario.id);
    console.log(usuario, telefone, endereco);
  } catch (error) {
    console.error("encontrou erro ao recuperar usuario", error);
  }
}
