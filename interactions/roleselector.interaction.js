const { MAIN_ROLE, SEED_ZERO_ROLE } = require('../constants/role.constant')

const Roles = {
    main: MAIN_ROLE,
    seedzero: SEED_ZERO_ROLE,
}

async function removeAllClass(interact,arg){
    for(var i in Roles[arg[1]]){
        await interact.member.roles.remove(interact.guild.roles.cache.get(Roles[arg[1]][i].id))
    }
}

module.exports = {
    name: "roleselector",
    alias: ['roleselector'],
    execute: async function(interact,arg){
    	interact.deferUpdate()
        await removeAllClass(interact,arg)
	    await interact.member.roles.add(interact.guild.roles.cache.get(Roles[arg[1]][arg[2]].id))
    }
}