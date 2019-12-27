const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const names = [];
    console.time("tempo for");
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.timeEnd("tempo for");

    console.time("tempo forin");
    for (let i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.timeEnd("tempo forin");

    console.time("tempo for of");
    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.timeEnd("tempo for of");

    console.log("names", names);
  } catch (error) {
    console.error("erro", error);
  }
}

main();
