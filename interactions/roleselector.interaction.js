const ROLES = require('../constants/role.constant')

async function removeAllClass(interact,arg){
    for(var i in ROLES[arg[1]].roles){
        await interact.member.roles.remove(interact.guild.roles.cache.get(ROLES[arg[1]].roles[i].id))
    }
}

module.exports = {
    name: "roleselector",
    alias: ['roleselector'],
    execute: async function(interact,arg){
    	
	interact.deferUpdate(),5000

        let role_id = ROLES[arg[1]].roles[arg[2]].id
        let target_role = interact.guild.roles.cache.get(role_id)
        
        // If already has the role, remove it
        if(interact.member.roles.cache.has(role_id)){
            interact.member.roles.remove(target_role)
        }
        else{
            // If roles set can be choose only one, Remove all roles
            if(!ROLES[arg[1]].multiple_select){
                await removeAllClass(interact,arg)
            }
            interact.member.roles.add(target_role)
        }
	    
    }
}
