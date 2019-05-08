/*global IDCS_URI IDCS_SIGNUP_URI*/

// WE NEED TO GET OUR OWN URL
// environment variables are passed from host where 
// docker-compose is run to container via the 
// docker-compose file
export const uri = IDCS_URI;
export const signUpUri = IDCS_SIGNUP_URI;