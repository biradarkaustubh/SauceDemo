import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';

console.log("Loading Env File");

dotenv.config( 
        { path : `./env/${envName}.env` , override: true}
    );

export default 
{
    BASE_URL : process.env.BASE_URL,
    USERNAME : process.env.USERNAME,
    PASSWORD : process.env.PASSWORD,
    DB_URL : process.env.DB_URL,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,
    CARD_HOLDER_NAME : process.env.CARD_HOLDER_NAME,
    CARD_NUMBER : process.env.CARD_NUMBER,
    CVV : process.env.CVV,
    OTP : process.env.OTP
}  

