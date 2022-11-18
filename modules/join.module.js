const { coreAuthentitcation } = require("../services/account.service")

const Events = {
    coreAuth: function(member){
        coreAuthentitcation(member.user.id,member.guild.id).then(response => {
            const result = response.data
            if(result.account.is_active && result.account.is_core){
                const target = member.guild.roles.cache.get(result.guild.role_core_id)
                member.roles.add(target)
            }
        }).catch(err => {
            console.log("Not Found")
        })
    }
}

module.exports = {
    execute: function(member){
        for(var i in Events){
            Events[i](member)
        }
    }
}