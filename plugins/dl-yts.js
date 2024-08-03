
import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '✳️ What do you want me to search for on YouTube?'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
❒ *العنوان :* ${v.title}
❒ *الرابط* : ${v.url}
❒ *المده* : ${v.timestamp}
❒ *اعلن :* ${v.ago}
❒ *المشاهدات:* ${v.views}

   `.trim()
      case 'canal': return `
❒ *${v.name}* (${v.url})
❒ ${v.subCountLabel} (${v.subCount}) مشتركين
❒ ${v.videoCount} فيديوهات
`.trim()
    }
  }).filter(v => v).join('\n\n❍━━━━〈 ⇊ ⇊ ⇊ ⇊ 〉━━━━❍\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['بحث', 'yts'] 

export default handler
