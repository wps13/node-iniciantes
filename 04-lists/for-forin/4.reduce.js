const { obterPessoas } = require("./service");

Array.prototype.meuReduce = function(callback, initialValue) {
  let acumulador = initialValue || this[0];

  for (item of this) {
    acumulador = callback(acumulador, item);
  }
  return acumulador;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");

    const pesos = results.map(pessoa =>
      pessoa.mass !== "unknown" ? parseInt(pessoa.mass) : 0
    );
    // const total = pesos.reduce((anterior, proximo) => anterior + proximo);
    const total = pesos.meuReduce((anterior, proximo) => anterior + proximo);
    console.log("soma de pesos", total);
  } catch (error) {
    console.error("error", error);
  }
}

main();
