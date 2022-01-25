const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const { Miminnya, SesionName, oNumber} = require('./setting.json')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./kaido.js')
nocache('./kaido.js', module => console.log(`${module} telah di update !!`))

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'GoodNigh🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'GooodEvening🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'GoodEvening🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'GoodAfternoon🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'GoodMoorning🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'GoodNight🏙'
}

const starts = async (Kaido = new WAConnection()) => {
  Kaido.logger.level = 'warn'
  Kaido.version = [2, 2142, 12]
  Kaido.browserDescription = [ 'KaidoBotz', 'Safari', '3.0' ]
  Kaido.sendMessage(`6282122365620@s.whatsapp.net`, `「 BOT CONNECT 」\n\n*Hallo Kak!!* Saya *${Miminnya}* Izin Menggunakan Bot Ini!! \n\n*BOT TERSAMBUNG PADA*\n${time2}\n\nPROFILE\n*Nama* : ${Miminnya}\n*Nomor* : ${oNumber}\n*Status* : Online\n\n*TERIMAKASIH KAK HERMAWAN!!*`, MessageType.extendedText)
  Kaido.on('qr', () => {
      console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan Qrnya Kak Waktu Cuma 20 Detik !!'))
  })
    const sendButImage = async (from, context, fotext, img, but) => {
  gam = img
  jadinya = await Kaido.prepareMessage(from, gam, MessageType.image)
  buttonMessagesI = {
    imageMessage: jadinya.message.imageMessage,
    contentText: context,
    footerText: fotext,
    buttons: but,
    headerType: 4
  }
  Kaido.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
}

  fs.existsSync('./newbase.json') && Kaido.loadAuthInfo('./newbase.json')
  Kaido.on('connecting', () => {
      start('2', 'MENGHUBUNGKAN BRO !!...')
  })
  Kaido.on('open', () => {
      success('2', 'TERHUBUNG BRO !!')
      console.log(color('','aqua'), color(`||================================================||`, "cyan"))
      console.log(color(' ||> ','cyan'), color(`     Hallo Kak ${Miminnya} ${ucapanWaktu}`, 'cyan'))
      console.log(color(' ||> ','cyan'), color('    Jangan Lupa Subscrib Yt KaidoBotz😝', 'cyan'))
      console.log(color(' ||> ','cyan'), color('        Script Ori By Hermawan🛐', 'cyan'))
      console.log(color('','aqua'), color(`||================================================||`, "cyan"))
  })
  await Kaido.connect({timeoutMs: 30*1000})
      fs.writeFileSync('./newbase.json', JSON.stringify(Kaido.base64EncodedAuthInfo(), null, '\t'))

  Kaido.on('chat-update', async (message) => {
      require('./kaido.js')(Kaido, message, _welkom)
  })
Kaido.on("group-participants-update", async (anu) => {

  const isWelkom = _welkom.includes(anu.jid)
  try {
    groupMet = await Kaido.groupMetadata(anu.jid)
    groupMembers = groupMet.participants
    groupAdmins = getGroupAdmins(groupMembers)
    mem = anu.participants[0]

    console.log(anu)
    try {
      pp_user = await Kaido.getProfilePicture(mem)
    } catch (e) {
      pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
    }
    try {
      pp_grup = await Kaido.getProfilePicture(anu.jid)
    } catch (e) {
      pp_grup =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
    }
    if (!isWelkom) return
    if (anu.action == 'add') {
  num = anu.participants[0]
  mdata = await Kaido.groupMetadata(anu.jid)
    memeg = mdata.participants.length
    let v = Kaido.contacts[num] || { notify: num.replace(/@.+/, "") }
    anu_user = v.vname || v.notify || num.split("@")[0]
    time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
  try {
  ppimg = await Kaido.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
  } catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  image = await getBuffer(
    `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
     }&memcount=${memeg}&gcname=${encodeURI(
     mdata.subject
     )}&pp=${pp_user}&bg=https://telegra.ph/file/a3cec6902ea32d08a6db4.jpg`
     )
  teks = `𝙃𝘼𝙇𝙇𝙊 𝙆𝘼𝙆  *@${num.split('@')[0]}*
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙂𝙍𝙐𝙋 *${mdata.subject}*

𝙅𝘼𝙉𝙂𝘼𝙉 𝙇𝙐𝙋𝘼 𝙄𝙉𝙏𝙍𝙊 :

⊛ *ɴᴀᴍᴀ :*
⊛ *ᴜᴍᴜʀ :*
⊛ *ʜᴏʙʙʏ :*
⊛ *ɢᴇɴᴅᴇʀ :*
⊛ *ᴀꜱᴀʟ ᴋᴏᴛᴀ :*


𝙎𝙀𝙈𝙊𝙂𝘼 𝙆𝘼𝙆𝘼𝙆 𝘽𝙀𝙏𝘼𝙃 𝙔𝘼 
𝘿𝙄 𝙂𝙍𝙐𝙋 𝙄𝙉𝙄`
  let buff = await getBuffer(ppimg)
  Kaido.sendMessage(mdata.id, image, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    } else if (anu.action == 'remove') {
  num = anu.participants[0]
  mdata = await Kaido.groupMetadata(anu.jid)
    memeg = mdata.participants.length
    let w = Kaido.contacts[num] || { notify: num.replace(/@.+/, "") }
    anu_user = w.vname || w.notify || num.split("@")[0]
    time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
  try {
  ppimg = await Kaido.getProfilePicture(`${num.split('@')[0]}@c.us`)
  } catch {
  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  image = await getBuffer(
    `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
    }&memcount=${memeg}&gcname=${encodeURI(
    mdata.subject
    )}&pp=${pp_user}&bg=https://telegra.ph/file/a3cec6902ea32d08a6db4.jpg`
    )
  teks = `𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝙏𝙄𝙉𝙂𝙂𝘼𝙇 @${num.split('@')[0]}\n𝘽𝙏𝙒 𝙅𝘼𝙉𝙂𝘼𝙉 𝘽𝘼𝙇𝙄𝙆 𝙇𝘼𝙂𝙄 𝙔𝘼𝙆`
  let buff = await getBuffer(ppimg)
  Kaido.sendMessage(mdata.id, image, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    }
  } catch (e) {
    console.log("Error : %s", color(e, "red"))
  }

})
}

/**
* Uncache if there is file change
* @param {string} module Module name or path
* @param {function} cb <optional> 
*/
function nocache(module, cb = () => { }) {
  console.log('Module', `'${module}'`, 'Sekarang Sedang Di Awasi Oleh KaidoBotz !!')
  fs.watchFile(require.resolve(module), async () => {
      await uncache(require.resolve(module))
      cb(module)
  })
}

/**
* Uncache a module
* @param {string} module Module name or path
*/
function uncache(module = '.') {
  return new Promise((resolve, reject) => {
      try {
          delete require.cache[require.resolve(module)]
          resolve()
      } catch (e) {
          reject(e)
      }
  })
}

starts()
