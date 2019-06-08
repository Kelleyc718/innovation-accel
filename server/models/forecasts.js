var dbConnection = require('../database/connect')

module.exports.getForecasts = async () => {
  console.log('get forecasts called');
  return await dbConnection.performQuery('SELECT * FROM PREDICTED_DATA');
}

