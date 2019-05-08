/*global DB_URI DB_PASS*/
// environment variables are passed from host where 
// docker-compose is run to container via the 
// docker-compose file

module.exports = {
    mongoURI: DB_URI,
    cookieKey: DB_PASS
};
