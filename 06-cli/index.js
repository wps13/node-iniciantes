const Commander = require("commander");
const Database = require("./database");
const Heroi = require("./heroi");

async function main() {
  Commander.version("v1")
    .option("-n, --nome [value]", "Nome do heroi")
    .option("-p, --poder [value]", "Poder do heroi")
    .option("-i, --id [value]", "Id do heroi")
    .option("-c, --cadastrar", "Cadastrar um heroi")
    .option("-l, --listar", "Listar os herois cadastrados")
    .option("-r, --remover", "remove um heroi")
    .option("-a, --atualizar [value]", "atualiza as informacoes de um heroi")
    .parse(process.argv);

  const heroi = new Heroi(Commander);

  try {
    if (Commander.cadastrar) {
      const resultado = await Database.cadastrar(heroi);
      if (!resultado) {
        console.error("heroi nao foi cadastrado");
        return;
      }
      console.log("heroi cadastrado");
    }
    if (Commander.listar) {
      const resultado = await Database.listar();
      console.log("herois cadastrados", resultado);
    }
    if (Commander.remover) {
      const resultado = await Database.remover(heroi.id);
      if (!resultado) {
        console.error("erro ao remover o heroi");
        return;
      }
      console.log("heroi removido com sucesso");
    }
    if (Commander.atualizar) {
      const idParaAtualizar = parseInt(Commander.atualizar);
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado);
      const resultado = await Database.atualizar(
        idParaAtualizar,
        heroiAtualizar
      );
      if (!resultado) {
        console.error("heroi nao foi atualizado");
        return;
      }
      console.log("heroi atualizado com sucesso");
    }
  } catch (error) {
    console.error("error", error);
  }
}

main();
