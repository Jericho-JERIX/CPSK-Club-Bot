const {
    ButtonStyle
} = require('discord.js')

module.exports = {
    MAIN: {
        multiple_select: false,
        style: ButtonStyle.Primary,
        roles: {
            cpe: {
                id: '980139496068763658',
                label: '💾 CPE'
            },
            ske: {
                id: '980139585055109120',
                label: '💻 SKE'
            },
        }
    },

    SEED_ZERO: {
        multiple_select: false,
        style: ButtonStyle.Success,
        roles: {
            frontend: {
                id: '1011933338631684136',
                label: "🪄 Frontend"
            },
            backend: {
                id: '1011933349876609137',
                label: "📦 Backend"
            },
            hardware: {
                id: '1011933664868827178',
                label: "🔨 Hardware"
            },
            genstaff: {
                id: '1011933659416231946',
                label: "⭐ General Staff"
            },
            pgroup: {
                id: '1011933662587142144',
                label: "👩‍👧‍👦 P'Group (พี่กลุ่ม)"
            },
            photographer: {
                id: '1011933951574691870',
                label: "📷 Photographer"
            },
            graphic: {
                id: '1011933951578865684',
                label: "✨ Graphic"
            }
        }
    },

    CPSK_SPORT: {
        multiple_select: true,
        style: ButtonStyle.Primary,
        roles: {
            valorant: {
                id: '1016286948257701908',
                label: 'Valorant',
                emoji: '938309095658762271',
            },
            rov: {
                id: '1016287011025469490',
                label: 'ROV',
                emoji: '938309119654395964',
            },
            dota2: {
                id: '1016289652287733811',
                label: 'Dota2',
                emoji: '938314996859953193',
            },
            pubg: {
                id: '1016289727260934184',
                label: 'PUBG Mobile',
                emoji: '1016991255189790750',
            },
            basketball: {
                id: '1016287011746881536',
                label: 'Basketball',
                emoji: '🏀',
            },
            football: {
                id: '1016287010685730846',
                label: 'Football',
                emoji: '⚽',
            },
            chariball: {
                id: '1016287012719968289',
                label: 'Chairball',
                emoji: '941686739066556487',
            },
        }
    },

    LET_ME_TIRED_2: {
        multiple_select: false,
        style: ButtonStyle.Primary,
        roles: {
            graphic: {
                id: '1032288467142578197',
                label: 'Graphic',
                emoji: '🎨',
            },
            pgroup: {
                id: '1032288686286585887',
                label: "P'Group",
                emoji: '🧑🏻',
            },
            generalstaff: {
                id: '1032288813348823161',
                label: 'General Staff',
                emoji: '⭐',
            },
            photographer: {
                id: '1032289857340440656',
                label: 'Photographer',
                emoji: '📷',
            },
            pythonteacher: {
                id: '1032289036804571228',
                label: 'Python Teacher',
                emoji: '🐍',
            },
            webdevteacher: {
                id: '1032289435208917062',
                label: 'WebDev Teacher',
                emoji: '💻',
            },
            hardwareteacher: {
                id: '1032289605522829332',
                label: 'Hardware Teacher',
                emoji: '🤖',
            },
            ta: {
                id: '1032288917015248956',
                label: 'TA',
                emoji: '📖',
            },
        }
    },
}
