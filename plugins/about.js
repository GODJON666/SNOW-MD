const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👨‍💻",
    desc: "get jon snow desc",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `> ╭──☆ *SNOW MD* ☆──╮
> │ ᴄʀᴇᴀᴛᴇᴅ ʙʏ snow ᴛᴇᴄʜ   
> │ ʀᴇᴀʟ ɴᴀᴍᴇ ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ 
> │ ɴɪᴄᴋɴᴀᴍᴇ ➮ lord jon snow 
> │ ᴀɢᴇ ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ   
> │ ᴄɪᴛʏ ➭ ɴᴏᴛ ᴅᴇғɪɴᴇᴅ 
> │ ᴅᴇᴠɪᴄᴇ ➭ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 
> ╰──────────────╯

> ╭──☆ *dev jon snow* ☆──╮
> │ ᴄᴏᴏʟ ᴅᴇᴠᴇʟᴏᴘᴇʀ ➭ ɢᴀᴀʀᴀ ᴛᴇᴄʜ 
> │ ᴏɴʟʏ ᴏɴᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ 
> │ ʙᴏᴛ ➭ ᴏᴇᴍᴀ ᴅᴇᴠ 
> │ ᴏᴡɴᴇʀ ➭ +50949100359, +50955217986
> ╰───────────────╯

> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ jon ᴛᴇᴄʜ*
> ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

`
await conn.sendMessage(from, {
    image: { url: 'https://iili.io/KX0B4nI.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363401605001369@newsletter', // ou ton JID actuel
            newsletterName: 'snow-ᴍᴅ',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
DEVAAA
