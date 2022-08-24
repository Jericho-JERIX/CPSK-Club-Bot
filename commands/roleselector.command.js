const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')

const ClassSelector = {
    main: [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-cpe').setLabel('CPE').setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId('roleselector-ske').setLabel('SKE').setStyle(ButtonStyle.Primary),
        )
    ],
    seed_zero: [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-frontend').setLabel('Frontend').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-backend').setLabel('Backend').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-hardware').setLabel('Hardware').setStyle(ButtonStyle.Danger),
        ),
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-genstaff').setLabel('General Staff').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-pgroup').setLabel("P'Group (พี่กลุ่ม)").setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-photographer').setLabel('Photographer').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-graphic').setLabel('Graphic').setStyle(ButtonStyle.Danger),
        ),
    ]
}

module.exports = {
    name: "roleselector",
    alias : ['rst'],
    clearCommand: true,
    roleRequirement: [],
    channelRequirement: [],
    execute: function(message,arg){
        message.channel.send({content:"Main Role",components: ClassSelector.main})
        message.channel.send({content:"Seed Zero",components: ClassSelector.seed_zero})
        return 0
    }
}