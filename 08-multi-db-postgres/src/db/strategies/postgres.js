const ICrud = require("./interfaces/interfaceCrud");
const Sequelize = require("sequelize");

class Postgres extends ICrud {
  constructor() {
    super();
    this.driver = null;
    this._herois = null;
  }
  async isConnect() {
    try {
      await this._driver.authenticate();
      return true;
    } catch (error) {
      console.log("fail to connect", error);
      return false;
    }
  }
  async defineModel() {
    this._herois = this._driver.define(
      "heroes",
      {
        id: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING,
          required: true
        },
        poder: {
          type: Sequelize.STRING,
          required: true
        }
      },
      {
        tableName: "TB_HEROIS",
        freezeTableName: false,
        timestamps: false
      }
    );
    await this._herois.sync();
  }
  async create(item) {
    const { dataValues } = await this._herois.create(item);
    return dataValues;
  }
  async update(id, item) {
    return this._herois.update(item, { where: { id: id } });
  }
  async delete(id) {
    const query = id ? { id } : {};
    return this._herois.destroy({ where: query });
  }
  async read(item = {}) {
    return this._herois.findAll({ where: item, raw: true });
  }
  async connect() {
    this.driver = new Sequelize("herois", "willane", "maca09", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false
      // operatorsAliases: false
    });
    await this.defineModel();
  }
}

module.exports = Postgres;
