let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*nao a votacao neste grupo!*_\n\n*${usedPrefix}comecar* - comecar a votar`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.help = ['naovotar']
handler.tags = ['vote']
handler.command = /^(delete|excluir)vote$/i
handler.group = true
handler.admin = true
module.exports = handler