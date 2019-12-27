const service = require("./service");

Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for (let i in this) {
    const resultado = callback(this[i]);
    novoArrayMapeado.push(resultado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const result = await service.obterPessoas("a");

    // const names = [];

    // result.results.forEach(element => {
    //   names.push(element.name);
    // });
    // const names = result.results.map(pessoa => pessoa.name);
    const names = result.results.meuMap(pessoa => pessoa.name);
    console.log(`names: ${names}`);
  } catch (error) {
    console.error("erro", error);
  }
}

main();
