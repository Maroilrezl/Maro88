let handler = async (m, { conn, command, text }) => {
let love = `*✨💜 نسبه الحب 💜✨*
*نسبة الحب ${text} ليك ✨💜* *${Math.floor(Math.random() * 100)}%* *من 100%*
*اطلب منه/ا ان ي/تكون صديق/ه لك/ي ؟*

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(الحب|حب)$/i
export default handler
