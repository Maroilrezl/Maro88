let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*✦┇  اهـليـن للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✓*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/e4fb5b98cb6ab7255c722.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(اوامر|بوت|.اوامر)$/i;
handler.command = new RegExp;

export default handler;
