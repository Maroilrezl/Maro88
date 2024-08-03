let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '⚡️┃لم يتم الاجابة علي السؤال بعد┃⚡️ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/Kyutaka101/98d564d49cbf9b539fee19f744de7b26/raw/f2a3e68bbcdd2b06f9dbd5f30d70b9fda42fec14/guessflag')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
  ⎔↞┃الـوقـت⏱️↞ *${(timeout / 1000).toFixed(2)} ┃
  *استخدم .انسحب للأنسحاب*
  ⎔↞┃الـجـائـزة🎖↞ ${poin} نقاط┃
┃𝑬𝑹𝑬𝑵_ 𝑩𝑶𝑻┃↞⎔
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ 💧┇انتهي الوقت┇💧❯\n❐↞┇الاجـابـة✓↞ ${json.name}*┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^احزر/i

export default handler
