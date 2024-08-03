const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response =
    `✦•━━━━ ∘⊰🔥⊱∘ ━━━━•✦\n` +
    `${text}😂♥️ وينك عيوشه لساتك زعلانه ` +
    `\n✦•━━━━ ∘⊰🔥⊱∘ ━━━━•✦` +
    ``    

  async function loading() {
var hawemod = [
"⌯ هلا يا رمانه ",
"⌯هلا يا رمانه ",
"⌯ عيوشه زعلانه",
"⌯ عيووشه زعلانههه",
"⌯ مين يراضيها",
"⌯ هلا مين بيراضيها",
"⌯ انا براضيها",
"⌯ عيوشه الزعلانه",
"⌯ ما تزعلي يا حلوه ",
"⌯ خليكي فرحانه",
"⌯ بابا اخد عبود",
"⌯ مشوار وما خدني",
"⌯ خلي جلبه مسرور ",
"⌯ وخلاني زعلانه",
"⌯ وخلاني زعلانهههه",
"⌯ يا عيوش يا حلوه",
"⌯ ليكي هاي الغنوه",
"⌯ ما ضلي زعلانه"
]
   let { key } = await conn.sendMessage(m.chat, {text: `⌯ زعلانه عيوشه`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(عيوشه)$/i;
export default handler;
