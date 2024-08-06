let handler = async (m, {command, text, conn, usedPrefix}) => {

let url = 'https://api.whatsapp.com/send?phone=';
let a7a = url + text;
await conn.reply(m.chat, a7a, m);
}
    handler.help = ['تبنيد'];
    handler.tags = ['M A R O'];
    handler.command = /^(فنش)$/i

    export default handler;
