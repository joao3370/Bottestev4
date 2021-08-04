check vote

let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*sem votação neste grupo*_\n\n*${usedPrefix}comecar* - para começar a votar`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*「 VOTE 」*

*Alasan:* ${reason}

*UPVOTE*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}}

*${usedPrefix}hapusvote* - para deletar votos

_by keyy_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['checkvote']
handler.tags = ['vote']
handler.command = /^verificar voto$/i
handler.group = true
module.exports = handler
