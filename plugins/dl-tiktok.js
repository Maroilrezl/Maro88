import { tiktokdl } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `*✳️ أدخـل رابــط تـيكتـوك\n\n📌 مــثال: ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`;
  if (!args[0].match(/tiktok/gi)) throw `*❎ رابط تيكتوك !!*`;

  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw;
    if (!url) throw '❎ حـدث خـطأ ما اثـناء تـنزيل الـفيديــو';

   

    conn.sendFile(m.chat, url, 'tiktok.mp4', `
*❖━━━┋ تــيك تــوك ┋━━━❖*
❒ *الأســم:* ${nickname} ${description ? `\n❒ *الــوصف:* ${description}` : ''}
`, m);
  } catch (error) {
    // Log the error
    console.error('حـدث خـطأ ما اثـناء تـنزيل الـفيديــو:', args[0], error);

    m.reply(`❎ حـدث خـطأ ما اثـناء تـنزيل الـفيديــو`);
  }
};

handler.help = ['tiktok'];
handler.tags = ['dl'];
handler.command = /^(tiktok|ttdl|تيك|تيكتوك)$/i;


export default handler;
