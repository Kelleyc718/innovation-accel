// var oracledb = require('oracledb');
// var dbConfig = require('./dbconfig.js');

// oracledb.getConnection(
// {
// user : dbConfig.user,
// password : dbConfig.password,
// connectString : dbConfig.connectString
// },
// function(err, connection)
// {
// if (err) {
//   console.error("There was an Error");
//   console.error(err.message);
// return;
// }
// console.log('Connection was successful!');

// connection.close(
// function(err)
// {
// if (err) {
// console.error(err.message);
// return;
// }
// });
// });

var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

async function run() {

  let connection;
  let result;

  try {
    connection = await oracledb.getConnection(  {
      user : dbConfig.user,
      password : dbConfig.password,
      connectString : dbConfig.connectString
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
