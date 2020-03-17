const MongoDB = require("./db/strategies/mongodb");
const Postgres = require("./db/strategies/postgres");
const ContextStrategy = require("./db/strategies/base/contextStrategy");

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();
