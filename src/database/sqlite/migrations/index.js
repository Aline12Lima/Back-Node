const sqliteConnection = require("../../sqlite");
const createUsers = require("./createUsers");

async function migrationsRun() {
  const schemas = [createUsers].join(""); //join juntar os parametros

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}
module.exports = migrationsRun;
