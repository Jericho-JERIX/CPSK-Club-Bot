const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')
const { SEED_ZERO_ROLE, MAIN_ROLE } = require('../constants/role.constant')

const ClassSelector = {
    main: [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-main-cpe').setLabel(MAIN_ROLE.cpe.label).setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId('roleselector-main-ske').setLabel(MAIN_ROLE.ske.label).setStyle(ButtonStyle.Primary),
        )
    ],
    seed_zero: [
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-seedzero-frontend').setLabel(SEED_ZERO_ROLE.frontend.label).setStyle(ButtonStyle.Success),
                new ButtonBuilder().setCustomId('roleselector-seedzero-backend').setLabel(SEED_ZERO_ROLE.backend.label).setStyle(ButtonStyle.Success),
                new ButtonBuilder().setCustomId('roleselector-seedzero-hardware').setLabel(SEED_ZERO_ROLE.hardware.label).setStyle(ButtonStyle.Success),
        ),
        new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder().setCustomId('roleselector-seedzero-genstaff').setLabel(SEED_ZERO_ROLE.genstaff.label).setStyle(ButtonStyle.Success),
                new ButtonBuilder().setCustomId('roleselector-seedzero-pgroup').setLabel(SEED_ZERO_ROLE.pgroup.label).setStyle(ButtonStyle.Success),
                new ButtonBuilder().setCustomId('roleselector-seedzero-photographer').setLabel(SEED_ZERO_ROLE.photographer.label).setStyle(ButtonStyle.Success),
                new ButtonBuilder().setCustomId('roleselector-seedzero-graphic').setLabel(SEED_ZERO_ROLE.graphic.label).setStyle(ButtonStyle.Success),
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
        message.channel.send({content:"📌 เลือกภาควิชาของตัวเอง",components: ClassSelector.main})
        message.channel.send({content:"🌱 เลือก Role สำหรับกิจกรรม  **Seed: Zero**\nทุกคนสามารถดูตำแหน่งของตัวเองที่รูปด้านล่างนี้ 👇",components: ClassSelector.seed_zero,files: ["./img/staff_result.png"]})
        return 0
    }
}