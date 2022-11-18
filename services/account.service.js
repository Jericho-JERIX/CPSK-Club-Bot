const { default: axios } = require("axios");
const { BACKEND_URL } = require("../constants/service.constant");

async function coreAuthentitcation(user_id,guild_id){
    return axios.get(`${BACKEND_URL}/api/accounts/${user_id}/guilds/${guild_id}`)
}

module.exports = {
    coreAuthentitcation
}