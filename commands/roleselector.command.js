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
                new ButtonBuilder().setCustomId('roleselector-main-frontend').setLabel('Frontend').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-main-backend').setLabel('Backend').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-main-hardware').setLabel('Hardware').setStyle(ButtonStyle.Danger),
        ),
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-seedzero-genstaff').setLabel('General Staff').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-seedzero-pgroup').setLabel("P'Group (พี่กลุ่ม)").setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-seedzero-photographer').setLabel('Photographer').setStyle(ButtonStyle.Danger),
                new ButtonBuilder().setCustomId('roleselector-seedzero-graphic').setLabel('Graphic').setStyle(ButtonStyle.Danger),
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