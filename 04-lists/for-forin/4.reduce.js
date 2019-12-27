const { obterPessoas } = require("./service");

async function main() {
  try {
    const { results } = await obterPessoas("a");

    const pesos = results.map(pessoa =>
      pessoa.mass !== "unknown" ? parseInt(pessoa.mass) : 0
    );
    const total = pesos.reduce((anterior, proximo) => anterior + proximo);

    console.log("soma de pesos", total);
  } catch (error) {
    console.error("error", error);
  }
}

main();
