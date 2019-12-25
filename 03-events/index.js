const EventEmitter = require("events");

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";

meuEmissor.on(nomeEvento, function(click) {
  console.log("ocorreu click", click);
});

meuEmissor.emit(nomeEvento, "barra de rolagem");

meuEmissor.emit(nomeEvento, "ok");

const stdin = process.openStdin();

stdin.addListener("data", function(value) {
  console.log(value.toString().trim());
});
