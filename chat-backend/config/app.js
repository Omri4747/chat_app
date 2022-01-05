require("dotenv").config({path:__dirname+'/../.env'})

module.exports = {
    appKey: process.env.APP_KEY,
    appUrl: process.env.APP_URL,
    appPort: process.env.APP_PORT,
}