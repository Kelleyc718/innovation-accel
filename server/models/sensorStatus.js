var dbConnection = require('../database/connect')

module.exports.getSensorStatus = async () => {
  console.log('get sensor status called');
  let statusResponse = await dbConnection(
    'SELECT * FROM(\
      SELECT * FROM livesensorstatus ORDER BY DATE_OF_ENTRY DESC\
    ) \
    WHERE ROWNUM = 1'
  );
  return statusResponse;
}
