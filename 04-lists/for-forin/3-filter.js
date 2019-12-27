const { obterPessoas } = require("./service");

Array.prototype.meuFilter = function(callback) {
  const finalResult = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, finalResult);
    if (!result) continue;
    finalResult.push(item);
  }
  return finalResult;
};

async function main() {
  try {
    const { results } = await obterPessoas("a");
    // const familiaLars = results.filter(
    //   pessoa => pessoa.name.toLowerCase().indexOf("lars") !== -1
    // );
    const familiaLars = results.meuFilter(
      pessoa => pessoa.name.toLowerCase().indexOf("lars") !== -1
    );
    const names = familiaLars.map(pessoa => pessoa.name);
    console.log(`familia lars names: ${names}`);
  } catch (error) {
    console.error("erro", error);
  }
}

main();
