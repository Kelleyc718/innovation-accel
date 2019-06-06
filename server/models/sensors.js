var dbConnection = require('../database/connect')

module.exports.getAllSensorData = async () => {
  console.log('get all sensor data called');
  return await dbConnection('SELECT * FROM(SELECT * FROM livesensorstatus ORDER BY DATE_OF_ENTRY DESC) WHERE ROWNUM = 1');
}
