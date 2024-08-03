import _0xc5dcb2 from "node-fetch";
const handler = async (_0x5321d9, {
  conn: _0x35ee5f,
  args: _0x3a87c3,
  usedPrefix: _0x1587d5,
  command: _0x5403c9
}) => {
  let _0x206172 = _0x3a87c3.join(" ").split("|");
  if (!_0x3a87c3[0]) {
    throw "يمكنك انشاء شعار لــــ  تصميم6 باسمك مثال :\n\n*.تصميم6* mego|bot";
  }
  _0x35ee5f.sendMessage(_0x5321d9.chat, {
    react: {
      text: "🕐",
      key: _0x5321d9.key
    }
  });
  let _0x361d0f = "https://api.betabotz.eu.org/api/photooxy/pubg?text1=" + _0x206172[0] + "&text2=" + _0x206172[1] + "&apikey=6wy2KEG8";
  _0x35ee5f.sendFile(_0x5321d9.chat, _0x361d0f, "pubg.jpg", "تفضل طلبك ببجي", _0x5321d9, false);
};
handler.help = ["pubg"];
handler.tags = ["logo"];
handler.command = /^(شعار)$/i;
handler.limit = false;
export default handler;
