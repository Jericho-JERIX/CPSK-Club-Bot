const {Client,GatewayIntentBits,Partials} = require('discord.js')
const {getAllCommands,getAllInteractions} = require('./utils/generate')
const { PREFIX } = require('./constants/setting.constant')
const fs = require('fs')

const dotenv = require('dotenv')
const LoginEvent = require('./modules/login.module')
const JoinEvent = require('./modules/join.module')
dotenv.config()

const Command = getAllCommands()
const Interaction = getAllInteractions()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.Channel]
})

client.on('ready',async ()=>{
    LoginEvent.execute(client)
})
client.login(process.env.TOKEN)

//TODO--- User Command ---

client.on('messageCreate',(message)=>{
    let arg = message.content.split(' ')
    if(arg[0].slice(0,PREFIX.length) == PREFIX){
        let command = arg[0].slice(PREFIX.length)
        let result = -1
        for(var i in Command){
            if(Command[i].name == command || Command[i].alias.includes(command)){
                
                if(Command[i].clearCommand){
                    message.channel.bulkDelete(parseInt(1))
                }

                if(Command[i].roleRequirement != 0 && Command[i].roleRequirement.filter((value) => message.member._roles.includes(value)).length == 0){
                    result = 2
                }
                else if(Command[i].channelRequirement.length != 0 && !Command[i].channelRequirement.includes(message.channelId)){
                    result = 3
                }
                else{
                    result = Command[i].execute(message,arg)
                }
                break
            }
        }

        /* Command Result / Special Execute
           -1 - No Command Found
            0 - Success
            1 - Error(Bad Input)
            2 - Permission Required
            3 - Restrict Channel
        */

        if     (result == -1 || result == 0) {}
        else if(result == 1) message.channel.send("Something went Wrong! Please try again")
        else if(result == 2) message.channel.send("You need Permission!")
        else if(result == 3) message.channel.send("That command cannot be use in this channel!")
    }
})

// Active Interaction(Button)
client.on('interactionCreate',async (interact)=>{
    if(interact.isButton()){
        var arg = interact.customId.split('-')
        Interaction[arg[0]].execute(interact,arg)
    }
})

client.on('guildMemberAdd',(member) => {
    JoinEvent.execute(member)
})