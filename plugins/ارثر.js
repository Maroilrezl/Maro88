let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⨂┇ الـامــر خـطـأ ســوي نـقـطـة وبـدون فـواصـل ┇〄*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/e4fb5b98cb6ab7255c722.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(امر 7|امر 2|.امر 1|.امر|.امر 3|.امر 4|.امر 5|.امر 6.|امر)$/i;
handler.command = new RegExp;

export default handler;
