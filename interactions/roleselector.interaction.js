const {Client,Intents,MessageButton,MessageActionRow, Message} = require('discord.js')
const { MAIN_ROLE, SEED_ZERO_ROLE } = require('../constants/role.constant')

const Roles = {...MAIN_ROLE,...SEED_ZERO_ROLE}

async function removeAllClass(interact){
    for(var i in Roles){
        await interact.member.roles.remove(interact.guild.roles.cache.get(Roles[i]))
    }
}

module.exports = {
    name: "roleselector",
    alias: ['roleselector'],
    execute: async function(interact,arg){
    	interact.deferUpdate()
        await removeAllClass(interact)
	await interact.member.roles.add(interact.guild.roles.cache.get(Roles[arg[1]]))
    }
}