let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Ainda a votos!_\n\n*${usedPrefix}naovotar* - para deletar voto`
    }
    m.reply(`Votacao comecou!\n\n*${usedPrefix}upvote* - para sim\n*${usedPrefix}devote* - para nao\n*${usedPrefix}checkvote* - verificar votos\n*${usedPrefix}naovotar* - excluir votos`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['comecar [alassan]']
handler.tags = ['vote']
handler.command = /^(start|comecar)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler