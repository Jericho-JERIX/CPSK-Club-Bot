const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')
const { MAIN, SEED_ZERO, CPSK_SPORT } = require('../constants/role.constant')

const Button = {
    MAIN : [
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('roleselector-MAIN-cpe').setLabel(MAIN.roles.cpe.label).setStyle(MAIN.style),
            new ButtonBuilder().setCustomId('roleselector-MAIN-ske').setLabel(MAIN.roles.ske.label).setStyle(MAIN.style),
        )
    ],
    SEED_ZERO : [
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-frontend').setLabel(SEED_ZERO.roles.frontend.label).setStyle(SEED_ZERO.style),
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-backend').setLabel(SEED_ZERO.roles.backend.label).setStyle(SEED_ZERO.style),
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-hardware').setLabel(SEED_ZERO.roles.hardware.label).setStyle(SEED_ZERO.style),
        ),
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-genstaff').setLabel(SEED_ZERO.roles.genstaff.label).setStyle(SEED_ZERO.style),
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-pgroup').setLabel(SEED_ZERO.roles.pgroup.label).setStyle(SEED_ZERO.style),
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-photographer').setLabel(SEED_ZERO.roles.photographer.label).setStyle(SEED_ZERO.style),
            new ButtonBuilder().setCustomId('roleselector-SEED_ZERO-graphic').setLabel(SEED_ZERO.roles.graphic.label).setStyle(SEED_ZERO.style),
        ),
    ],
    CPSK_SPORT: [
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-valorant').setLabel(CPSK_SPORT.roles.valorant.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.valorant.emoji),
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-rov').setLabel(CPSK_SPORT.roles.rov.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.rov.emoji),
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-dota2').setLabel(CPSK_SPORT.roles.dota2.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.dota2.emoji),
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-pubg').setLabel(CPSK_SPORT.roles.pubg.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.pubg.emoji),
        ),
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-basketball').setLabel(CPSK_SPORT.roles.basketball.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.basketball.emoji),
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-football').setLabel(CPSK_SPORT.roles.football.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.football.emoji),
            new ButtonBuilder().setCustomId('roleselector-CPSK_SPORT-chariball').setLabel(CPSK_SPORT.roles.chariball.label).setStyle(CPSK_SPORT.style).setEmoji(CPSK_SPORT.roles.chariball.emoji),
        )
    ]
}

module.exports = {
    name: "roleselector",
    alias : ['rst'],
    clearCommand: true,
    roleRequirement: [],
    channelRequirement: [],
    execute: function(message,arg){
        switch(arg[1]){
            case 'main': message.channel.send({content:"📌 เลือกภาควิชาของตัวเอง",components: Button.MAIN}); break
            case 'seed-zero': message.channel.send({content:"🌱 เลือก Role สำหรับกิจกรรม  **Seed: Zero**\nทุกคนสามารถดูตำแหน่งของตัวเองที่รูปด้านล่างนี้ 👇",components: Button.SEED_ZERO,files: ["./img/staff_result.png"]}); break
            case 'cpsk-sport': message.channel.send({content:"🌟 เลือกกีฬาที่ลงแข่ง 🌟",components: Button.CPSK_SPORT}); break
            default: message.channel.send("Not found")
        }
        return 0
    }
}