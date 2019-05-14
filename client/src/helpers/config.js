// WE NEED TO GET OUR OWN URL
// environment variables are passed from host where
// docker-compose is run to container via the
// docker-compose file
export const uri =
  "https://idcs-218f7df7828041d69b1d70ba3646e13c.identity.oraclecloud.com";
export const signUpUri = process.env.IDCS_SIGNUP_URI || "";
