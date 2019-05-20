var oracledb = require('oracledb');
var config = require('../config/config');

async function run() {

  let connection;
  let result;

  try {
    connection = await oracledb.getConnection(  {
      user : config.user,
      password : config.password,
      connectString : config.connectString
    });

    result = await connection.execute(
      `SELECT *
       FROM MaintenanceSchedule
       WHERE refineryid = 1`  // bind value for :id
    );
    var a = result.rows[0][1];
    console.log(typeof(a));
    console.log(result.rows[0][1]);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
  return result;
};

module.exports.run = run;