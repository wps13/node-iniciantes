const ICrud = require("./interfaces/interfaceCrud");

class MongoDB extends ICrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("item salvo no mongoDB");
  }
}

module.exports = MongoDB;
