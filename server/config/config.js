/*global DB_URI DB_PASS*/
// environment variables are passed from host where 
// docker-compose is run to container via the 
// docker-compose file

module.exports = {
    mongoURI: process.env.DB_URI || '',
    cookieKey: process.env.DB_PASS || ''
};
