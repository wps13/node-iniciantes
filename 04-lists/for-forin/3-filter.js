const { obterPessoas } = require("./service");

async function main() {
  try {
    const { results } = await obterPessoas("a");
    const familiaLars = results.filter(
      pessoa => pessoa.name.toLowerCase().indexOf("lars") !== -1
    );
    const names = familiaLars.map(pessoa => pessoa.name);
    console.log(`familia lars names: ${names}`);
  } catch (error) {
    console.error("erro", error);
  }
}

main();
