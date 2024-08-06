let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*✦┇  اهـليـن للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✓*`;

    conn.sendFile(m.chat, 'https://whatsapp.com/channel/0029Vacc9DXEAKWIWX8nQu1T', 'image.jpg', message, m);
};

handler.customPrefix = /^(اوامر|بوت|.اوامر)$/i;
handler.command = new RegExp;

export default handler;
