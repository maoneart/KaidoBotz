// THANKSTO
// ABIL BOTZ
// DHANI BOTZ
// ALL MY SUBSCRIBER
// UWNXEIGFLALWJDBABDKE
// JANGAN SOK DEWASA KALAU DIRILU AJA BLUM BISA LU CONTROL
//--
// CAPEK ? ISTIRAHAT LAH
// JANGAN LUPA NAFAS YOOO
//________________________________________________________________________________________________________________________

const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const axios = require("axios");
const speed = require("performance-now");
const util = require("util");
const crypto = require("crypto");
const request = require("request");
const { exec, spawn } = require("child_process");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
const ffmpeg = require("fluent-ffmpeg");
const { removeBackgroundFromImageFile } = require("remove.bg");
const hx = require("hxz-api");
const ggs = require("google-it");
const ig = require("insta-fetcher");

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require("./lib/fetcher");
const { color, bgcolor } = require("./lib/color");
const {
  wait,
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { wikiSearch } = require("./lib/wiki.js");
const { lirikLagu } = require("./lib/lirik.js");

//══════════[ Setting ]══════════//

autoread = true;
autocomposing = false;
autorecording = false;
//----

const {
  Miminnya,
  NameStore,
  BotName,
  fake,
  oNumber,
  IG,
  BMKG,
  lolkey,
  Gopay,
  Dana,
  Pulsa,
} = require("./setting.json");
const setting = JSON.parse(fs.readFileSync("./setting.json"));
gambar = fs.readFileSync("./media/logo.jpg");
tamnel = fs.readFileSync("./media/logotoko.jpg");
td = fs.readFileSync("./media/masjid.jpg");

//══════════[ SPI Key ]══════════//
ZeksApi = setting.ZeksApi;

//══════════[ Music ]══════════//
kaido = fs.readFileSync("./media/audio/kaido.mp3");

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
const _antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));

//══════════[ Module Export ]══════════//

module.exports = Kaido = async (Kaido, mek, _welkom) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      contactsArray,
      groupInviteMessage,
      listMessage,
      buttonsMessage,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
      quotedMsg,
    } = MessageType;
    const tanggal =
      moment.tz("Asia/Jakarta").format("dddd") +
      ", " +
      moment.tz("Asia/Jakarta").format("LL");
    const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const timeMak = moment().tz("Asia/Makassar").format("HH:mm:ss");
    const timeJay = moment().tz("Asia/Jayapura").format("HH:mm:ss");
    const type = Object.keys(mek.message)[0];
    const cmd =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : "".slice(1).trim().split(/ +/).shift().toLowerCase();
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd)
      ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi)
      : "#";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" && mek.message[type].caption.startsWith(prefix)
        ? mek.message[type].caption
        : type == "videoMessage" && mek.message[type].caption.startsWith(prefix)
        ? mek.message[type].caption
        : type == "extendedTextMessage" &&
          mek.message[type].text.startsWith(prefix)
        ? mek.message[type].text
        : type == "listResponseMessage" &&
          mek.message[type].singleSelectReply.selectedRowId
        ? mek.message[type].singleSelectReply.selectedRowId
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const arg = budy.slice(command.length + 2, budy.length);
    const c = args.join(" ");
    const isCmd = body.startsWith(prefix);
    const q = args.join(" ");
    const Verived = "0@s.whatsapp.net";
    const txt = mek.message.conversation;
    const botNumber = Kaido.user.jid;
    const ownerNumber = [`${oNumber}@s.whatsapp.net`]; //, `6281333603591@s.whatsapp.net`]
    const isGroup = from.endsWith("@g.us");
    let sender = isGroup ? mek.participant : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? Kaido.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const groupMetadata = isGroup
      ? await Kaido.groupMetadata(from)
      : "".toString;
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const senderNumber = sender.split("@")[0];
    const hour_now = moment().format("HH:mm:ss");
    const conts = mek.key.fromMe
      ? Kaido.user.jid
      : Kaido.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? Kaido.user.name
      : conts.notify || conts.vname || conts.name || "-";

    const isAntiLink = isGroup ? _antilink.includes(from) : false;
    const isWelkom = isGroup ? _welkom.includes(from) : false;
    const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false;
    const isOwner = ownerNumber.includes(sender);
    const isMybot = isOwner || mek.key.fromMe;
    let bio_nya = await Kaido.getStatus(sender);
    try {
      bio_user = `${bio_nya.status}`;
    } catch {
      bio_user = "-";
    }

    //══════════[ Mess Dll ]══════════//

    mess = {
      wait: "𝙋𝙍𝙊𝙎𝙀𝙎 ....",
      eror: "𝙈𝘼𝘼𝙁 𝙏𝙀𝙍𝙅𝘼𝘿𝙄 𝙆𝙀𝙎𝘼𝙇𝘼𝙃𝘼𝙉 !!",
      success: "𝙎𝙐𝙆𝙎𝙀𝙎 ✅️",
      error: {
        stick: "𝙈𝘼𝘼𝙁 𝙄𝙏𝙐 𝘽𝙐𝙆𝘼𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 !!",
        Iv: "𝙇𝙄𝙉𝙆 𝙄𝙉𝙑𝘼𝙇𝙄𝘿 !!",
      },
      only: {
        group: "𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝘿𝙄 𝘿𝘼𝙇𝘼𝙈 𝙂𝙍𝙐𝙋 !!",
        owner: "𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙊𝙇𝙀𝙃 𝙊𝙒𝙉𝙀𝙍 𝘽𝙊𝙏 !!",
        admin: "𝙁𝙄𝙏𝙐𝙍 𝙃𝘼𝙉𝙔𝘼 𝘿𝘼𝙋𝘼𝙏 𝘿𝙄 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙊𝙇𝙀𝙃 𝘼𝘿𝙈𝙄𝙉 𝙂𝙍𝙐𝙋 !!",
        Badmin: "𝙅𝘼𝘿𝙄𝙆𝘼𝙉 𝘼𝘿𝙈𝙄𝙉 𝙅𝙄𝙆𝘼 𝙈𝘼𝙐 𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙁𝙄𝙏𝙐𝙍  𝙄𝙏𝙐 !!",
      },
    };

    //══════════[ BUTTON ]══════════//

    const sendButton = async (from, context, fortext, but, mek) => {
      buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1,
      };
      Kaido.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: mek,
      });
    };
    //BUTTON TEXT//
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Kaido.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };
    //BUTTON IMAGE//
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Kaido.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Kaido.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    //BUTTON VIDEO//
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await Kaido.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      Kaido.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    //BUTTON LOCATION//
    const sendButLocation = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      them = gam1;
      mediaxxaa = await Kaido.prepareMessage(id, them, MessageType.location, {
        thumbnail: them,
      });
      locmhan = mediaxxaa.message["ephemeralMessage"]
        ? mediaxxaa.message.ephemeralMessage
        : mediaxxaa;
      const buttonMessages = {
        locationMessage: locmhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6,
      };
      Kaido.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };

    //══════════[ Fake ]══════════//

    const listmsg = (from, title, desc, list) => {
      // ngeread nya pake rowsId, jadi command nya ga keliatan
      let po = Kaido.prepareMessageFromContent(
        from,
        {
          listMessage: {
            title: title,
            description: desc,
            buttonText: "𝐌𝐄𝐍𝐔",
            footerText: `${tanggal}`,
            listType: "SINGLE_SELECT",
            sections: list,
          },
        },
        {}
      );
      return Kaido.relayWAMessage(po, { waitForAck: true });
    };
    const reply = (teks) => {
      Kaido.sendMessage(from, teks, text, { quoted: mek });
    };
    const sendMess = (hehe, teks) => {
      Kaido.sendMessage(hehe, teks, text);
    };
    const fakeyt = (teks) => {
      Kaido.sendMessage(from, teks, text, {
        contextInfo: {
          text: "hi",
          forwardingScore: 1000000000,
          isForwarded: false,
          sendEphemeral: false,
          externalAdReply: {
            title: `${tanggal}`,
            body: `${BotName}`,
            mediaType: "10",
            mediaUrl: `${IG}`,
            //"thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
            thumbnail: gambar,
            sourceUrl: `${IG}`,
          },
          mentionedJid: [sender],
        },
        quoted: mek,
      });
    };
    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? Kaido.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : Kaido.sendMessage(from, teks.trim(), extendedText, {
            quoted: ftrol,
            contextInfo: { mentionedJid: memberr },
          });
    };
    const costum = (pesan, tipe, target, target2) => {
      Kaido.sendMessage(from, pesan, tipe, {
        quoted: {
          key: {
            fromMe: false,
            participant: `${target}`,
            ...(from ? { remoteJid: from } : {}),
          },
          message: { conversation: `${target2}` },
        },
      });
    };
    const fakestatus = (teks) => {
      Kaido.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./media/kaido.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakegroup = (teks) => {
      Kaido.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./media/kaido.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const ftrol = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 123,
          status: 1,
          surface: 1,
          message: `${tanggal}`,
          orderTitle: `${BotName}`,
          thumbnail: gambar, //Gambarnye
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };
    const troli = {
      key: {
        fromMe: false,
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 2022,
          status: 200,
          thumbnail: gambar,
          surface: 200,
          message: `➥ Made By ${Miminnya}\n➥ Hallo ${pushname}`,
          orderTitle: "K A I D O",
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };

    const fkontak = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}),
      },
      message: {
        contactMessage: {
          displayName: `Hallo ${pushname}\n${ucapanWaktu}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${
            sender.split("@")[0]
          }:${sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          jpegThumbnail: gambar,
        },
      },
    };
    //══════════[ Storage ]══════════//

    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./sticker" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./sticker" + names + ".png";
        let asw = "./sticker" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            Kaido.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        Kaido.sendMessage(to, media, type, {
          quoted: ftrol,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendFileFromUrl = async (link, type, options) => {
      hasil = await getBuffer(link);
      Kaido.sendMessage(from, hasil, type, options).catch((e) => {
        fetch(link).then((hasil) => {
          Kaido.sendMessage(from, hasil, type, options).catch((e) => {
            Kaido.sendMessage(
              from,
              {
                url: link,
              },
              type,
              options
            ).catch((e) => {
              reply;
              console.log(e);
            });
          });
        });
      });
    };
    //=================( STICKER )=================//
    const sticOwner = (hehe) => {
      ano = fs.readFileSync("./media/sticker/owner.webp");
      Kaido.sendMessage(hehe, ano, sticker, { quoted: mek });
    };
    const sticWait = (hehe) => {
      ano = fs.readFileSync("./media/sticker/wait.webp");
      Kaido.sendMessage(hehe, ano, sticker, { quoted: mek });
    };
    const sticLoad = (hehe) => {
      ano = fs.readFileSync("./media/sticker/loading.webp");
      Kaido.sendMessage(hehe, ano, sticker, { quoted: mek });
    };
    const sticAdmin = (hehe) => {
      ano = fs.readFileSync("./media/sticker/admin.webp");
      Kaido.sendMessage(hehe, ano, sticker, { quoted: mek });
    };
    const sticBotAdmin = (hehe) => {
      ano = fs.readFileSync("./media/sticker/botadmin.webp");
      Kaido.sendMessage(hehe, ano, sticker, { quoted: mek });
    };
    //══════════[ Grup ]══════════//

    const hideTag = async function (from, text) {
      let anu = await Kaido.groupMetadata(from);
      let members = anu.participants;
      let ane = [];
      for (let i of members) {
        ane.push(i.jid);
      }
      Kaido.sendMessage(
        from,
        { text: text, jpegThumbnail: fs.readFileSync("media/kaido.jpg") },
        "extendedTextMessage",
        { contextInfo: { mentionedJid: ane } }
      );
    };

    //══════════[ Antilink & Antivirtex ]══════════//

    if (budy.includes("https://chat.whatsapp.com/")) {
      if (!isGroup) return;
      if (!isAntiLink) return;
      if (isGroupAdmins) return;
      var kic = `${sender.split("@")[0]}@s.whatsapp.net`;
      fakeyt(
        ` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`
      );
      setTimeout(() => {
        Kaido.groupRemove(from, [kic]).catch((e) => {
          fakeyt(`BOT HARUS JADI ADMIN`);
        });
      }, 0);
    }

    if (budy.length > 3500) {
      if (!isGroup) return;
      if (!isAntiVirtex) return;
      if (isGroupAdmins) return;
      fakeyt("Tandai telah dibaca\n".repeat(300));
      fakeyt(
        `「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`
      );
      console.log(
        color("[KICK]", "red"),
        color("Received a virus text!", "yellow")
      );
      Kaido.groupRemove(from, [sender]);
    }

    //══════════[ Waktu Dll ]══════════//

    if (autoread) {
      Kaido.chatRead(from, "read");
    } else if (autocomposing) {
      Kaido.updatePresence(from, Presence.composing);
    } else if (autorecording) {
      Kaido.updatePresence(from, Presence.recording);
    }

    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "23:59:00") {
      var ucapanWaktu = "Selamat Malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat Petang";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat Sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat Siang️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat Pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat Malam";
    }

    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && isCmd)
      console.log(
        "\x1b[1;31m[ PC\x1b[1;37m ]",
        "[\x1b[1;32m PRIBADI \x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup)
      console.log(
        "\x1b[1;31m[ GC\x1b[1;37m ]",
        "[\x1b[1;32m GROUP \x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    switch (command) {
      //══════════[ FITUR FITUR OY ]══════════//
      case "menu":
      case "menu":
      case "help":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},

Selamat Datang di *MaoneArt Electronic*. Saya Kaido asisten khusus yang di buat
oleh *Hermawan* Untuk Membantu Anda
        
Ada yang bisa Kaido Bantu?`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "About MaoneArt Electronic",
                  rowId: `${prefix}about`,
                },
                {
                  title: "Cek Harga Barang",
                  rowId: `${prefix}store`,
                },
                {
                  title: "Menu Master",
                  rowId: `${prefix}menucatalog`,
                },
                {
                  title: "Media Audio",
                  rowId: `${prefix}audiomenu`,
                },
                {
                  title: "Informasi",
                  rowId: `${prefix}info`,
                },
                {
                  title: "Donate Bot",
                  rowId: `${prefix}`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //══════════[ Menu Master ]══════════//
      case "menucatalog":
        menunya = `${ucapanWaktu} ${pushname}
            
『 *MEDIA MENU* 』
々 _${prefix}smeme <replyimg>_
々 _${prefix}textstic <addtext>_
々 _${prefix}toimg <replysticker>_
々 _${prefix}sticker <send/replyimg>_
々 _${prefix}pmeme <replyimg+text|txt>_

『 *FUN TIME* 』
々 _${prefix}truth_
々 _${prefix}dare_
々 _${prefix}darkjokes_

『 *DOWLOADER* 』
々 _${prefix}play <query>_
々 _${prefix}ytmp3 <link>_
々 _${prefix}ytaudio <link>_
々 _${prefix}ytmp4 <link>_
々 _${prefix}tiktok <link>_
々 _${prefix}pinterest <search>_

『 *GAME MENU* 』
々 _${prefix}next_

『 *SEARCH MENU* 』
々 _${prefix}next_

『 *OWNER MENU* 』
々 _${prefix}welcome <on/off>_
々 _${prefix}closegc
々 _${prefix}opengc
々 _${prefix}BC <Text>`;
        var imgs = await Kaido.prepareMessage("0@c.us", gambar, image, {
          thumbnail: tamnel,
        });
        var imgCatalog = imgs.message.imageMessage;
        var ctlg = await Kaido.prepareMessageFromContent(
          from,
          {
            productMessage: {
              product: {
                productImage: imgCatalog,
                productId: "6730388940368865",
                title: `MENU MASTER`,
                description: menunya,
                footerText: `メKAIDOBOT`,
                currencyCode: "USD",
                priceAmount1000: "0",
                productImageCount: 1,
                firstImageId: 1,
                salePriceAmount1000: "0",
                retailerId: `Please Use prefix+command Example : ${prefix}sticker`,
                url: "https://www.instagram.com/maone_art/",
              },
              businessOwnerJid: `${oNumber}@s.whatsapp.net`,
            },
          },
          { quoted: fkontak, mimetype: "image/jpeg" }
        );
        Kaido.relayWAMessage(ctlg);
        break;
      //══════════[ ABOUT ]══════════//
      case "about":
        menunya = `Hallo *${pushname}* Selamat datang di MaoneArt Electronic kami menyediakan berbagai macam barang elektronik seperti:

- Handphone
- Mesin Cuci
- Televisi
- Laptop
- AC`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}store`,
            buttonText: { displayText: "Store" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "Owner" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, tamnel, but);
        break;

      //══════════[ STORE ]══════════//

      case "store":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Silahkan cari barang yang anda butuhkan`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Mesin Cuci",
                  rowId: `${prefix}mc`,
                },
                {
                  title: "Hand Phone",
                  rowId: `${prefix}hp`,
                },
                {
                  title: "AC",
                  rowId: `${prefix}ac`,
                },
                {
                  title: "Laptop",
                  rowId: `${prefix}laptop`,
                },
                {
                  title: "Televisi",
                  rowId: `${prefix}tv`,
                },
                {
                  title: "Kulkas",
                  rowId: `${prefix}kulkas`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;
      //══════════[ INFORMASI ]══════════//

      case "info":
      case "informasi":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Disini Pusat Layanan Informasi, Informasi apa yang anda butuhkan saat ini`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Informasi Gempa",
                  rowId: `${prefix}gempa`,
                },
                {
                  title: "Informasi Covid",
                  rowId: `${prefix}covid`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //══════════[ MESIN CUCI ]══════════//
      case "mc":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Ini Daftar *Mesin Cuci* yang Ready`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Sharp",
                  rowId: `${prefix}mcs`,
                },
                {
                  title: "Samsung",
                  rowId: `${prefix}mcsam`,
                },
                {
                  title: "Polytron",
                  rowId: `${prefix}mcpol`,
                },
                {
                  title: "Aqua",
                  rowId: `${prefix}mcaq`,
                },
                {
                  title: "Sanken",
                  rowId: `${prefix}mcsan`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //══════════[ HAND PHONE ]══════════//
      case "hp":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Ini Daftar *Hand Phone* yang Ready`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Samsung",
                  rowId: `${prefix}samsung`,
                },
                {
                  title: "Xiaomi",
                  rowId: `${prefix}xiaomi`,
                },
                {
                  title: "Oppo",
                  rowId: `${prefix}oppo`,
                },
                {
                  title: "Realme",
                  rowId: `${prefix}realme`,
                },
                {
                  title: "Vivo",
                  rowId: `${prefix}vivo`,
                },
                {
                  title: "Infinix",
                  rowId: `${prefix}infinix`,
                },
                {
                  title: "Advan",
                  rowId: `${prefix}advan`,
                },
                {
                  title: "Iphone",
                  rowId: `${prefix}iphone`,
                },
                {
                  title: "Nokia",
                  rowId: `${prefix}nokia`,
                },
                {
                  title: "Huawei",
                  rowId: `${prefix}huawei`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;
      //══════════[ LIST SAMSUNG ]══════════//
      case "samsung":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: tanggal,
          description: `Halo Kak @${sender.split("@")[0]},
Ini list harga Hp Samsung yang Ready Stock`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Samsung Galaxy M13 3GB/32GB",
                  rowId: `${prefix}sgm13`,
                },
                {
                  title: "Samsung Galaxy Tab A7 Lite 3GB/32GB",
                  rowId: `${prefix}sgta7l`,
                },
                {
                  title: "Samsung Galaxy A12 6GB/128GB",
                  rowId: `${prefix}sga12`,
                },
                {
                  title: "Samsung Galaxy M22 6GB/128GB",
                  rowId: `${prefix}sgm22`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        break;

      //══════════[ SAMSUNG ]══════════//

      case "sgm13":
        menu = `*SAMSUNG GALAXY M13 3GB/32GB*

PILIH METODE CICILAN
Rp. 700.000 /Bulan
_Cicilan 3 Bulan_
Rp. 400.000 /Bulan
_Cicilan 6 Bulan_`;

        sgm13 = fs.readFileSync("./media/catalog/sgm13.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, sgm13, but);
        break;

      case "sgta7l":
        menu = `*SAMSUNG GALAXY TAB A7 LITE 3GB/32GB*

PILIH METODE CICILAN
Rp. 1.000.000 /Bulan
_Cicilan 3 Bulan_
Rp. 550.000 /Bulan
_Cicilan 6 Bulan_`;

        sgta7l = fs.readFileSync("./media/catalog/sgta7l.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, sgta7l, but);
        break;

      case "sga12":
        menu = `*SAMSUNG GALAXY A12 6/128GB*

PILIH METODE CICILAN
Rp. 1.000.000 /Bulan
_Cicilan 3 Bulan_
Rp. 550.000 /Bulan
_Cicilan 6 Bulan_`;

        sga12 = fs.readFileSync("./media/catalog/sga12.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, sga12, but);
        break;

      case "sgm22":
        menu = `*SAMSUNG  GALAXY M22 6GB/128GB*

PILIH METODE CICILAN
Rp. 1.200.000 /Bulan
_Cicilan 3 Bulan_
Rp. 610.000 /Bulan
_Cicilan 6 Bulan_`;

        sgm22 = fs.readFileSync("./media/catalog/sgm22.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, sgm22, but);
        break;

      //══════════[ XIAOMI ]══════════//
      //══════════[ LIST OPPO ]══════════//
      case "oppo":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: tanggal,
          description: `Halo Kak @${sender.split("@")[0]},
Ini list harga Hp OPPO yang Ready Stock`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Oppo A16 3GB/32GB",
                  rowId: `${prefix}oa16`,
                },
                {
                  title: "Oppo A16 4GB/64GB",
                  rowId: `${prefix}oa164`,
                },
                {
                  title: "Oppo A53 4GB/128GB",
                  rowId: `${prefix}oa53`,
                },
                {
                  title: "Oppo A54 4GB/64GB",
                  rowId: `${prefix}oa54`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        break;

      //══════════[ OPPO ]══════════//

      case "oa16":
        menu = `*OPPO A16 3GB/32GB*

PILIH METODE CICILAN
Rp. 840.000 /Bulan
_Cicilan 3 Bulan_
Rp. 470.000 /Bulan
_Cicilan 6 Bulan_`;

        oa16 = fs.readFileSync("./media/catalog/oa16.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, oa16, but);
        break;

      case "oa164":
        menu = `*OPPO A16 4GB/64GB*

PILIH METODE CICILAN
Rp. 1.100.000 /Bulan
_Cicilan 3 Bulan_
Rp. 570.000 /Bulan
_Cicilan 6 Bulan_`;

        oa164 = fs.readFileSync("./media/catalog/oa164.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, oa164, but);
        break;

      case "oa54":
        menu = `*OPPO A54 4GB/64GB*

PILIH METODE CICILAN
Rp. 1.100.000 /Bulan
_Cicilan 3 Bulan_
Rp. 570.000 /Bulan
_Cicilan 6 Bulan_`;

        oa54 = fs.readFileSync("./media/catalog/oa54.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, oa54, but);
        break;

      case "oa53":
        menu = `*OPPO A53 4GB1284GB*

PILIH METODE CICILAN
Rp. 1.300.000 /Bulan
_Cicilan 3 Bulan_
Rp. 600.000 /Bulan
_Cicilan 6 Bulan_`;

        oa53 = fs.readFileSync("./media/catalog/oa53.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, oa53, but);
        break;
      //══════════[ REALME ]══════════//
      //══════════[ LIST VIVO ]══════════//
      case "vivo":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: tanggal,
          description: `Halo Kak @${sender.split("@")[0]},
Ini list harga Hp VIVO yang Ready Stock`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Vivo Y33s 8GB/128GB",
                  rowId: `${prefix}vy33s`,
                },
                {
                  title: "Vivo 15s 3GB/32GB",
                  rowId: `${prefix}vy15s`,
                },
                {
                  title: "Vivo Y12s 3GB/32GB",
                  rowId: `${prefix}vy12s`,
                },
                {
                  title: "Vivo Y21 4GB/64GB",
                  rowId: `${prefix}vy21`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        break;

      //══════════[ VIVO  ]══════════//

      case "vy33s":
        menu = `*VIVO Y33s 8GB/128GB*

PILIH METODE CICILAN
Rp. 1.320.000 /Bulan
_Cicilan 3 Bulan_
Rp. 740.000 /Bulan
_Cicilan 6 Bulan_`;

        vy33s = fs.readFileSync("./media/catalog/vy33s.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, vy33s, but);
        break;

      case "vy15s":
        menu = `*VIVO Y15s 3GB/32GB*

PILIH METODE CICILAN
Rp. 830.000 /Bulan
_Cicilan 3 Bulan_
Rp. 460.000 /Bulan
_Cicilan 6 Bulan_`;

        vy15s = fs.readFileSync("./media/catalog/vy15s.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, vy15s, but);
        break;

      case "vy12s":
        menu = `*VIVO Y12s 3GB/32GB*

PILIH METODE CICILAN
Rp. 780.000 /Bulan
_Cicilan 3 Bulan_
Rp. 450.000 /Bulan
_Cicilan 6 Bulan_`;

        vy12s = fs.readFileSync("./media/catalog/vy12s.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, vy12s, but);
        break;

      case "vy21":
        menu = `*VIVO 21 4GB/64GB*

PILIH METODE CICILAN
Rp. 970.000 /Bulan
_Cicilan 3 Bulan_
Rp. 540.000 /Bulan
_Cicilan 6 Bulan_`;

        vy21 = fs.readFileSync("./media/catalog/vy21.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, vy21, but);
        break;

      //══════════[ LIST INFINIX ]══════════//

      case "infinix":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: tanggal,
          description: `Halo Kak @${sender.split("@")[0]},
Ini list harga Hp Infinix yang Ready Stock`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Infinix Hot 10 Play 3GB/32GB",
                  rowId: `${prefix}ih10p`,
                },
                {
                  title: "Infinix Note 10 6GB/64GB",
                  rowId: `${prefix}in10`,
                },
                {
                  title: "Infinix Hot 11 Play 4GB/64GB",
                  rowId: `${prefix}ih11p`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        break;

      //══════════[ INFINIX ]══════════//

      case "ih10p":
        menu = `*INFINIX HOT 10 PLAY 3GB/32GB*

PILIH METODE CICILAN
Rp. 630.000 /Bulan
_Cicilan 3 Bulan_
Rp. 370.000 /Bulan
_Cicilan 6 Bulan_`;

        ih10p = fs.readFileSync("./media/catalog/ih10p.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, ih10p, but);
        break;

      case "in10":
        menu = `*INFINIX NOTE 10 6GB/64GB NFC*

PILIH METODE CICILAN
Rp. 1.080.000 /Bulan
_Cicilan 3 Bulan_
Rp. 600.000 /Bulan
_Cicilan 6 Bulan_`;

        in10 = fs.readFileSync("./media/catalog/in10.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, in10, but);
        break;

      case "ih11p":
        menu = `*INFINIX HOT 11 PLAY 4GB/64GB*

PILIH METODE CICILAN
Rp. 710.000 /Bulan
_Cicilan 3 Bulan_
Rp. 3900.000 /Bulan
_Cicilan 6 Bulan_`;

        ih11p = fs.readFileSync("./media/catalog/ih11p.jpg");
        but = [
          {
            buttonId: `${prefix}order`,
            buttonText: { displayText: "ORDER" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, ih11p, but);
        break;

      //══════════[ ADVAN ]══════════//
      //══════════[ IPHONE ]══════════//
      //══════════[ NOKIA]══════════//
      //══════════[ HUAWEI  ]══════════//

      //══════════[ AC ]══════════//
      case "ac":
        listMsg = {
          buttonText: "𝗟𝗜𝗦?? 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Ini Daftar *AC* yang Ready`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Daikin",
                  rowId: `${prefix}acdaikin`,
                },
                {
                  title: "Sharp",
                  rowId: `${prefix}acs`,
                },
                {
                  title: "Panasonic",
                  rowId: `${prefix}acpan`,
                },
                {
                  title: "LG",
                  rowId: `${prefix}aclg`,
                },
                {
                  title: "Samsung",
                  rowId: `${prefix}acsam`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //══════════[ LAPTOP ]══════════//
      case "laptop":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Ini Daftar *Laptop* yang Ready`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Asus",
                  rowId: `${prefix}la`,
                },
                {
                  title: "Lenovo",
                  rowId: `${prefix}ll`,
                },
                {
                  title: "Dell",
                  rowId: `${prefix}ld`,
                },
                {
                  title: "Acer",
                  rowId: `${prefix}lac`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //══════════[ KULKAS ]══════════//
      case "kulkas":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Ini Daftar *Kulkas* yang Ready`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Sharp",
                  rowId: `${prefix}ks`,
                },
                {
                  title: "Samsung",
                  rowId: `${prefix}ksam`,
                },
                {
                  title: "LG",
                  rowId: `${prefix}klg`,
                },
                {
                  title: "Aqua",
                  rowId: `${prefix}kaq`,
                },
                {
                  title: "Polytron",
                  rowId: `${prefix}kpol`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //══════════[ TELEVISI ]══════════//
      case "tv":
        listMsg = {
          buttonText: "𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨",
          footerText: `\n「 ${BotName} 」\n*${tanggal}*`,
          description: `Halo Kak @${sender.split("@")[0]},
Selamat datang di *${NameStore}*
Ini Daftar *Televisi* yang Ready`,
          sections: [
            {
              title: `${time} - ${ucapanWaktu} - ${pushname}`,
              rows: [
                {
                  title: "Sharp",
                  rowId: `${prefix}tvs`,
                },
                {
                  title: "Samsung",
                  rowId: `${prefix}tvsam`,
                },
                {
                  title: "LG",
                  rowId: `${prefix}tvlg`,
                },
                {
                  title: "Panasonic",
                  rowId: `${prefix}tvpan`,
                },
                {
                  title: "Polytron",
                  rowId: `${prefix}tvpol`,
                },
              ],
            },
          ],
          listType: 1,
        };
        Kaido.sendMessage(from, listMsg, MessageType.listMessage, {
          contextInfo: { mentionedJid: [sender] },
          quoted: troli,
        });
        Kaido.sendMessage(from, kaido, MessageType.audio, {
          quoted: mek,
          mimetype: "audio/mp4",
          ptt: true,
        });
        break;

      //=========
      case "order":
        menu = `_Orderan Sedang Di Proses Silakan Di Tunggu_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_

_Pesanan Sedang Di Proses Harap Di Tunggu Ya Kak !!_`;

        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}bayar`,
            buttonText: { displayText: "BAYAR" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        sendButImage(from, menu, teks, tamnel, but);
        break;

      case "done":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins) return reply(mess.only.admin);
        menu = `_Done Kak Orderan Telah Di Terima_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_


_All Trx No Reff Jadi Barang Tidak Bisa  Di Kembalikan Karna Sudah Bilang Done !!_`;
        reply(menu);
        break;

      case "masukandata":
        menu = `*${ucapanWaktu} @${sender.split("@")[0]}*
*Sebelum lanjut, Mohon diisi dulu !!*


*𖣘 ɴᴀᴍᴀ :*
*𖣘 ɪᴅ :*
*𖣘 ɴᴏᴍɪɴᴀʟ :*
*𖣘 ʜᴀʀɢᴀ ᴅɪᴀᴍᴏɴᴅ :*`;
        teks = `*Pastikan Format Benar !!*
*Jika Salah Isi Format Maka Diamond Gak Masuk*
*Kami tidak akan bertanggung jawab !!*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !!*
*Terima kasih*

${tanggal}`;
        Kaido.sendMessage(
          from,
          {
            contentText: `${menu}`,
            footerText: `${teks}`,
            buttons: [
              {
                buttonId: `${prefix}payment`,
                buttonText: { displayText: "ʙᴀʏᴀʀ" },
                type: 1,
              },
              {
                buttonId: `${prefix}owner`,
                buttonText: { displayText: "ᴏᴡɴᴇʀ" },
                type: 1,
              },
            ],
            headerType: "LOCATION",
            locationMessage: {
              degreesLatitude: "",
              degreesLongitude: "",
              jpegThumbnail: gambar,
              contextInfo: { mentionedJid: [sender] },
            },
          },
          "buttonsMessage"
        );
        break;

      case "dmff":
      case "diamondfreefire":
        gambar = fs.readFileSync("./media/qr.jpg");
        menunya = `*「 DIAMOND FREEFIRE 」*

• *12 DIAMOND = 2.000*
• *20 DIAMOND = 3.000*
• *50 DIAMOND = 7.000*
• *70 DIAMOND = 10.000*
• *100 DIAMOND = 14.000*
• *140 DIAMOND = 19.000*
• *150 DIAMOND = 20.000*
• *210 DIAMOND = 28.000*
• *280 DIAMOND = 37.000*
• *355 DIAMOND = 47.000*
• *425 DIAMOND = 56.000*
• *500 DIAMOND = 65.000*
• *635 DIAMOND = 83.000*
• *720 DIAMOND = 92.000*
• *1.075 DIAMOND = 138.000*
• *2.000 DIAMOND = 251.000*
• *3.440 DIAMOND = 434.000*
• *4.000 DIAMOND = 500.000*
• *6.000 DIAMOND = 750.000*
• *7.290 DIAMOND = 918.000*
• *8.010 DIAMOND = 1.167.600*

*「 Member Ship 」*

• *MM = Rp 29.000*
• *MB = Rp 140.000*`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}payment`,
            buttonText: { displayText: "ᴘᴀʏᴍᴇɴᴛ" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "ᴏᴡɴᴇʀ" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, gambar, but);
        break;

      case "dmml":
      case "diamondmobilelegend":
        gambar = fs.readFileSync("./media/qr.jpg");
        menunya = `*「 DIAMOND MOBA 」*

• *5 DIAMOND = 2.000*
• *12 DIAMOND = 4.000*
• *19 DIAMOND = 6.000*
• *28 DIAMOND = 9.000*
• *36 DIAMOND = 11.000*
• *86 DIAMOND = 21.000*
• *172 DIAMOND = 41.000*
• *257 DIAMOND = 61.000*
• *343 DIAMOND = 81.000*
• *429 DIAMOND = 102.000*
• *514 DIAMOND = 122.000*
• *600 DIAMOND = 142.000*
• *706 DIAMOND = 163.000*
• *878 DIAMOND = 204.000*
• *963 DIAMOND = 224.000*
• *1.049 DIAMOND = 244.000*

*「 Starlight Member 」*

• *SM = 134.000*
• *TP = 134.000*
• *SMP = 305.000*`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}payment`,
            buttonText: { displayText: "ᴘᴀʏᴍᴇɴᴛ" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "ᴏᴡɴᴇʀ" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, gambar, but);
        break;

      case "ucpubg":
        gambar = fs.readFileSync("./media/qr.jpg");
        menunya = `*「 UC PUBG 」*

• *35 UC = 8.000*
• *50 UC = 4.000*
• *70 UC = 6.000*
• *150 UC = 9.000*
• *250 UC = 11.000*
• *500 UC = 21.000*
• *700 UC = 41.000*
• *1.000 UC = 61.000*
• *1.250 UC = 81.000*
• *1.750 UC = 102.000*
• *2.500 UC = 122.000*`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}payment`,
            buttonText: { displayText: "ᴘᴀʏᴍᴇɴᴛ" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "ᴏᴡɴᴇʀ" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, gambar, but);
        break;

      case "callofdutymobile":
      case "codm":
      case "cod":
        gambar = fs.readFileSync("./media/qr.jpg");
        menunya = `*「 Call of Duty Mobile 」*

• *62 CP = 10.000*
• *127 CP = 20.000*
• *317 CP = 49.000*
• *634 CP = 97.000*
• *1.373 CP = 193.000*
• *2.059 CP = 290.000*
• *3.564 CP = 483.000*
• *7.656 UC = 964.000*`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}payment`,
            buttonText: { displayText: "ᴘᴀʏᴍᴇɴᴛ" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "ᴏᴡɴᴇʀ" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, gambar, but);
        break;

      case "sausageman":
        gambar = fs.readFileSync("./media/qr.jpg");
        menunya = `*「 SAUSAGE MAN 」*

• *60 Candy = 8.000*
• *180 Candy = 4.000*
• *300 + 16 Candy = 6.000*
• *680 + 38 Candy = 9.000*
• *1.280 + 88 Candy = 11.000*
• *1.980 + 138 Candy = 21.000*`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}payment`,
            buttonText: { displayText: "ᴘᴀʏᴍᴇɴᴛ" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "ᴏᴡɴᴇʀ" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, gambar, but);
        break;

      case "jasasher":
      case "jasher":
        gambar = fs.readFileSync("./media/qr.jpg");
        menunya = `🇯‌‌🇦‌‌🇸‌‌🇦‌•‌🇸‌‌🇭‌‌🇦‌‌🇷‌‌🇪‌

┏━━━━━━━━━━━━━━━━━━
┃  *⎙ MENYEDIAKAN ⎙*
┃     *JASA SHARE*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      *50 GRUP*
┃• *1X SHARE : 300P*
┃• *3X SHARE : 700P*
┃• *4X SHARE : 900P*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      *100 GRUP*
┃• *1X SHARE : 1000*
┃• *2X SHARE : 1.400*
┃• *3X SHARE : 1.900*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃      *200 GRUP*
┃• *1X SHARE : 2.200*
┃• *2X SHARE : 2.300*
┃• *3X SHARE : 2.500*
┃• *5X SHARE : 2.700*
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃     *300 GRUP*
┃• *1X SHARE : 2.500*
┃• *2X SHARE : 2.900*
┃• *3X SHARE : 3.100*
┗━━━━━━━━━━━━━━━━━━━


*DIJAMIN NGALIRRRR POLL🤖*
🗣️ : *ADA TESTI GK BG*
👤 : *TESTI JIBUN POKOKNYA  DIJAMIN NGALIRR*🤑
*▰▰▰▰▰▰▰▰▰▰▰▰▰*


*⎙ PAKET PERJAM ⎙*
*[ 2JAM 6K 200GRUB ]*
*[ 3JAM 13K 330 GRUB ]*
*[ 5JAM 20K 450 GRUB ]*

*JEDA UNTUK PERJAM HANYA 5MENIT 4×SHARE UNTUK 1JAM*


*PAKET PERHARI*

*1HARI = 10K*
*2HARI = 18K*
*3HARI = 25K*
*4HARI = 34K*
*5HARI = 40K*`;
        teks = `「 ${BotName} 」\n*${tanggal}*`;
        but = [
          {
            buttonId: `${prefix}payment`,
            buttonText: { displayText: "ᴘᴀʏᴍᴇɴᴛ" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "ᴏᴡɴᴇʀ" },
            type: 1,
          },
        ];
        sendButImage(from, menunya, teks, gambar, but);
        break;

      case "bayar":
        menu = `*「 PAYMENT 」*

• *Gopay : 082122365620*
• *Dana : 082122365620*
• *Ovo : 082122365620*
• *Scan Qris Di Atas !!*`;

        dana = fs.readFileSync("./media/catalog/dana.jpg");
        but = [
          {
            buttonId: `${prefix}menu`,
            buttonText: { displayText: "MENU" },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: { displayText: "OWNER" },
            type: 1,
          },
        ];
        //  sendButLocation(from, menu, fake, tamnel, but, {quoted: mek})
        sendButImage(from, menu, fake, dana, but);
        break;

      //══════════[ Sticker ]══════════//

      case "sticker":
      case "stiker":
      case "stickergif":
      case "stikergif":
      case "sgif":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await Kaido.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".webp");
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("Eror");
            })
            .on("end", function () {
              console.log("Finish");
              Kaido.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await Kaido.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".webp");
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`âŒ Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              Kaido.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`
          );
        }
        break;

      //══════════[ Photo Meme ]══════════//
      case "potomeme":
      case "pmeme":
        if (args.length < 1)
          return reply(
            `Kirim perintah *${prefix + command}* teks atas|teks bawah`
          );
        if (!q.includes("|"))
          return reply(
            `Kirim perintah *${prefix + command}* teks atas|teks bawah`
          );
        try {
          if (!isQuotedImage && !isQuotedSticker)
            return reply(`REPLY GAMBAR ATAU STICKER!!`);
          reply(mess.wait);
          var teks1 = q.split("|")[0] ? q.split("|")[0] : "";
          var teks2 = q.split("|")[1] ? q.split("|")[1] : "";
          var imgbb = require("imgbb-uploader");
          var enmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          var media = await Kaido.downloadAndSaveMediaMessage(enmedia);
          var njay = await imgbb("520bd6f6209077d1777c2a4f20c509c2", media);
          var resu = await getBuffer(
            `https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`
          );
          Kaido.sendMessage(from, resu, image, { quoted: troli });
          fs.unlinkSync(media);
        } catch (e) {
          return reply(`${e}`);
          console.log(e);
        }
        break;

      case "smeme":
      case "stickmeme":
      case "sm":
        {
          var top = q.split("|")[0] ? q.split("|")[0] : "";
          var bottom = q.split("|")[1] ? q.split("|")[1] : "";
          var imgbb = require("imgbb-uploader");
          if (
            ((isMedia && !mek.message.videoMessage) ||
              isQuotedImage ||
              isQuotedSticker) &&
            args.length > 0
          ) {
            ger =
              isQuotedImage || isQuotedSticker
                ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
                    .message.extendedTextMessage.contextInfo
                : mek;
            owgi = await Kaido.downloadAndSaveMediaMessage(ger);
            anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi);
            tekks = `${anu.display_url}`;
            ranp = getRandom(".gif");
            rano = getRandom(".webp");
            anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`;
            sendStickerFromUrl(from, `${anu1}`);
          } else {
            reply("Gunakan foto!");
          }
        }
        break;

      //══════════[ Pinterest ]══════════//
      case "pinterest":
        sticWait(from);
        if (!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`);
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        //sticWait(from)
        //    await Kaido.sendMessage(from, di, image, { quoted: mek })
        yt1 = `Kelik Next Untuk Gambar Selanjutnya`;
        yt2 = `${BotName}`;
        but = [
          {
            buttonId: `.pinterest ${q}`,
            buttonText: { displayText: "️Next" },
            type: 1,
          },
        ];
        sendButImage(from, yt1, yt2, di, but);
        break;

      //══════════[ Downloader ]══════════//
      case "play":
      case "ytplay":
        //if (!isPremier)return reply(mess.premier)
        //if (isBanned)return sticBanned(from)
        if (args.length == 0) return reply("Judul nya Mana Kak?");
        bo = args.join(" ");
        sticWait(from);
        gett = await fetchJson(
          `https://api-alphabot.herokuapp.com/api/downloader/youtube/search?query=${bo}&apikey=Alphabot`
        );
        yt1 = `*Judul :* ${gett.results.all[0].title}\n\n*Author :* ${gett.results.all[0].author.name}\n*Dipublikasikan :* ${gett.results.all[0].ago}\n*Views :* ${gett.results.all[0].views}`;
        yt2 = `${BotName}`;
        buff = await getBuffer(gett.results.all[0].image);
        //ytg = fs.readFileSync('./media/logo.jpg')
        but = [
          {
            buttonId: `${prefix}ply4 ${args.join(" ")}`,
            buttonText: { displayText: "𝘷𝘪𝘥𝘦𝘰" },
            type: 1,
          },
          {
            buttonId: `${prefix}ply3 ${args.join(" ")}`,
            buttonText: { displayText: "️𝘮𝘶𝘴𝘪𝘬" },
            type: 1,
          },
        ];
        sendButImage(from, yt1, yt2, buff, but);
        break;

      case "ply4":
      case "playmp4":
        //if (!isPremier)return reply(mess.premier)
        //if (isBanned)return sticBanned(from)
        bo = args.join(" ");
        sticLoad(from);
        ini = await fetchJson(
          `https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${bo}&apikey=Alphabot`
        );
        p4 = await getBuffer(ini.results.result);
        Kaido.sendMessage(from, p4, video);
        break;

      case "ply3":
      case "playmp3":
        //if (!isPremier)return reply(mess.premier)
        //if (isBanned)return sticBanned(from)
        bo = args.join(" ");
        sticLoad(from);
        ini = await fetchJson(
          `https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${bo}&apikey=Alphabot`
        );
        p3 = await getBuffer(ini.results.result);
        Kaido.sendMessage(from, p3, audio);
        break;

      case "ig":
      case "igdownload":
      case "igdl":
      case "instagram":
        if (!c) return reply("Linknya?");
        var { igDownloader } = require("./lib/igdown");
        res = await igDownloader(`${c}`).catch((e) => {
          reply(mess.error.api);
        });
        console.log(res);
        sendMediaURL(from, `${res.result.link}`, `${res.result.desc}`);
        break;
      //══════════[ Truth or Dare]══════════//
      case "dare":
        sticWait(from);
        td = fs.readFileSync("./media/tod.jpg");
        bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/dare`);
        dr1 = `*${bt.dare}*`;
        dr2 = `Klik Di Next Untuk Melanjutkan`;
        but = [
          {
            buttonId: `${prefix}truth`,
            buttonText: { displayText: "️Truth" },
            type: 1,
          },
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: "️Dare" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr2, td, but);
        break;

      case "truth":
        sticWait(from);
        td = fs.readFileSync("./media/tod.jpg");
        bt = await fetchJson(`https://api-yogipw.herokuapp.com/api/fun/truth`);
        dr1 = `*${bt.truth}*`;
        dr2 = `Klik Di Next Untuk Melanjutkan`;
        but = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: "️Truth" },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: { displayText: "️Dare" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr2, td, but);
        break;

      case "asahotak":
        sticWait(from);
        td = fs.readFileSync("./media/logo.jpg");
        const asahotak = await axios.get(
          "https://api.wibusoft.com/api/permainan/asah-otak"
        );
        dr1 = `*${asahotak.data.result.soal}*`;
        dr2 = `*${asahotak.data.result.jawaban}*`;
        dr3 = `\n\nKelik Pertanyaan Selanjutnya Untuk Ganti Pertanyaan`;
        Kaido.sendMessage(
          "6282122365620@s.whatsapp.net",
          dr2,
          MessageType.text
        );
        but = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: "️Pertanyaan Selanjutnya" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr3, td, but);
        break;

      case "tt":
        sticWait(from);
        td = fs.readFileSync("./media/logo.jpg");
        const tt = await axios.get(
          "https://api.wibusoft.com/api/permainan/teka-teki"
        );
        dr1 = `*${tt.data.result.soal}*`;
        dr2 = `*${tt.data.result.jawaban}*`;
        dr3 = `\n\nKelik Pertanyaan Selanjutnya Untuk Ganti Pertanyaan`;
        Kaido.sendMessage(
          "6282122365620@s.whatsapp.net",
          dr2,
          MessageType.text
        );
        but = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: "️Pertanyaan Selanjutnya" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr3, td, but);
        break;

      //══════════[ Menu Informasi ]══════════//
      case "infogempa":
      case "gempa":
        sticWait(from);
        td = fs.readFileSync("./media/bmkg.jpg");
        bt = await fetchJson(
          `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`
        );
        dr1 = `*「 I N F O G E M P A 」*\n\nTanggal : ${bt.Infogempa.gempa.Tanggal}\nJam : ${bt.Infogempa.gempa.Jam}\nGetaran : ${bt.Infogempa.gempa.Magnitude}\nWilayah : ${bt.Infogempa.gempa.Wilayah}\nPotensi : ${bt.Infogempa.gempa.Potensi}`;
        dr2 = `Klik Di Next Untuk Melanjutkan`;
        but = [
          {
            buttonId: `.ggs gempa`,
            buttonText: { displayText: "️Info Lebih Lanjut" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr2, td, but);
        break;
        
        case "infocovid":
        case "covid":
      case "corona":
        sticWait(from);
        td = fs.readFileSync("./media/covid.jpg");
        bt = await fetchJson(
        `https://apicovid19indonesia-v2.vercel.app/api/indonesia`
        );
//====== DATA ========    
d1= `*${bt.positif}*`;
d2 = `*${bt.sembuh}*`;
d3= `${bt.meninggal}`;
d4 = `${bt.dirawat}`;
d5 = `${bt.lastUpdate}`;
//====== Positif ========    
var	reverse = d1.toString().split('').reverse().join(''), 	positif 	= reverse.match(/\d{1,3}/g); 	positif	= positif.join('.').split('').reverse().join(''); 
//====== Sembuh ========    
var	reverse = d2.toString().split('').reverse().join(''), 	sembuh 	= reverse.match(/\d{1,3}/g); 	sembuh	= sembuh.join('.').split('').reverse().join(''); 
//====== Meninggal ========    
var	reverse = d3.toString().split('').reverse().join(''), 	meninggal 	= reverse.match(/\d{1,3}/g); 	meninggal	= meninggal.join('.').split('').reverse().join(''); 
//====== Sembuh ========    
var	reverse = d4.toString().split('').reverse().join(''), 	dirawat 	= reverse.match(/\d{1,3}/g); 	dirawat	= dirawat.join('.').split('').reverse().join(''); 
var tgl = d5.substring(0, 10);
var t= d5.substring(12, 19);
        
        dr1 = `*「 I N F O C O V I D - 1 9 」*\n\nTerkonfirmasi: ${positif}\nSembuh : ${sembuh}\nMeninggal : ${meninggal}\nKasus Aktif : ${dirawat}\n\nUpdate Terkini : \n${tgl}\nPada Jam : \n${t}`;
        dr2 = `Klik Di Next Untuk Melanjutkan`;
        but = [
          {
            buttonId: `.ggs covid`,
            buttonText: { displayText: "️Info Lebih Lanjut" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr2, td, but);
        break;

      case "kompas":
        sticWait(from);
        td = fs.readFileSync("./media/kompas.png");
        bt = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`);
        dr1 = `*「 K O M P A S . C O M」*\n\n*Berita Hari Ini*:\n${bt.result.title}\n\n`;
        dr2 = `*Klik Link Di Bawah Ini Untuk Berita Lebih Lengkap*\n${bt.result.url}`;
        but = [
          {
            buttonId: `.kompas ${dr2}`,
            buttonText: { displayText: "️Berita Selanjut" },
            type: 1,
          },
        ];
        sendButImage(from, dr1, dr2, td, but);
        break;

      case "google":
      case "googlesearch":
      case "ggs":
        if (args.length < 1) return reply("Yang mau di cari apaan?");
        teks = args.join(" ");
        reply(mess.wait);
        res = await ggs({
          query: `${teks}`,
        });
        kant = ``;
        for (let i of res) {
          kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`;
        }
        var akhir = kant.trim();
        reply(akhir);
        break;

      case "trans":
        kntl = `${args.join(" ")}`;
        tex1 = kntl.split("|")[0];
        tex2 = kntl.split("|")[1];
        tex3 = kntl.split("|")[2];
        var a = await fetchJson(
          `https://tools.helixs.id//API/translate.php?text=${tex3}&from=${tex1}&to=${tex2}`,
          {
            method: "get",
          }
        );
        var b = `${a.result}`;
        reply(b);
        break;

      case "igstalk":
      case "stalkig":
        if (!c) return reply("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.following}\n*Following* : ${
            Y.followers
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;

      case "wiki":
      case "wikipedia":
        if (args.length < 1) return reply(" Yang Mau Di Cari Apa? ");
        teks = args.join(" ");
        res = await wikiSearch(teks).catch((e) => {
          return reply("_[ ! ] Error Hasil Tidak Ditemukan_");
        });
        result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`;
        sendFileFromUrl(res[0].thumb, image, {
          quoted: troli,
          caption: result,
        }).catch((e) => {
          reply(result);
        });
        break;

      case "lirik":
        if (args.length < 1) return reply("Judulnya?");
        reply(mess.wait);
        teks = body.slice(7);
        lirikLagu(teks).then((res) => {
          let lirik = `${res[0].result}`;
          reply(lirik);
        });
        break;

      case "spekhp":
        if (args.length < 1) return reply("Teksnya?");
        reply(mess.wait);
        anu = await fetchJson(
          `https://api.zeks.me/api/gsmArena?apikey=${ZeksApi}&q=${body.slice(
            8
          )}`,
          {
            method: "get",
          }
        );
        teks = `*TITLE:* \n${anu.data.title}\n\n*DESCRIPTION:* \n${anu.data.few_desc}\n*SPECIFICATION:* \n${anu.data.full_desc.string}\n\n_-JavaScript|AyogiAk_ `;
        buff = await getBuffer(anu.data.thumb);
        Kaido.sendMessage(from, buff, image, {
          quoted: troli,
          caption: teks,
        });
        break;
      //══════════[ Fitur Owner ]══════════//

      case "owner":
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard2 =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${Miminnya}\n` +
          `ORG: Creator ${Miminnya} ;\n` +
          `TEL;type=CELL;type=VOICE;waid=${oNumber}:${oNumber}\n` +
          "END:VCARD".trim();
        Kaido.sendMessage(
          from,
          { displayName: `Ownernya ${BotName}`, vcard: vcard2 },
          contact,
          { quoted: troli }
        );
        fakeyt(`_Tuh Kak Ownerku_`);
        break;

      case "bc":
      case "broadcast":
        if (!(mek.key.fromMe && isOwner)) return reply(mess.only.owner);
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix + command}* text`);
        var bcnya = await Kaido.chats.all();
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          var bcnya2 = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          var bcnya3 = await Kaido.downloadMediaMessage(bcnya2);
          for (let _ of bcnya) {
            Kaido.sendMessage(_.jid, bcnya3, image, {
              caption: `*----「  IKLAN PROMOSI 」----*\n\n${q}`,
            });
          }
          reply("Sukses broadcast");
        } else {
          for (let _ of bcnya) {
            sendButImage(
              _.jid,
              "「 PESAN SIARAN 」\n\n" + q,
              "© " + BotName + `\n*${tanggal}*`,
              tamnel,
              [
                {
                  buttonId: ".menu",
                  buttonText: { displayText: "Menu" },
                  type: 1,
                },
                {
                  buttonId: ".jasher",
                  buttonText: { displayText: "JaSher" },
                  type: 1,
                },
              ],
              { quoted: mek }
            );
            //sendButLocation(_.jid, '「 PESAN SIARAN 」\n\n' + q, '© ' + BotName, tamnel, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
          }
          reply("Sukses broadcast");
        }
        break;

      case "bc1":
        Kaido.updatePresence(from, Presence.composing);
        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB);
        if (args.length < 1) return reply("Teksnya?");
        anu = await Kaido.chats.all();
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          for (let _ of anu) {
            Kaido.sendMessage(_.jid, buff, image, {
              viewOnce: true,
              caption: `${body.slice(4)}`,
            });
          }
          reply(`Sukses mengirim Broadcast ${body.slice(4)}`);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          for (let _ of anu) {
            Kaido.sendMessage(_.jid, buff, video, {
              viewOnce: true,
              caption: `${body.slice(4)}`,
            });
          }
          reply(`Sukses mengirim Broadcast ${body.slice(4)}`);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          for (let _ of anu) {
            Kaido.sendMessage(_.jid, buff, video, {
              mimetype: Mimetype.gif,
              quoted: finv,
              contextInfo: {
                forwardingScore: 508,
                isForwarded: true,
              },
              caption: `${body.slice(4)}`,
            });
          }
          reply(`Sukses mengirim Broadcast ${body.slice(4)}`);
        } else {
          for (let _ of anu) {
            sendMess(_.jid, `${body.slice(4)}`);
          }
          reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`);
        }
        break;

      case "tobc":
        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB);
        Kaido.updatePresence(from, Presence.composing);
        anu = await Kaido.chats.all();
        if ((isMedia && !mek.message.videoMessage) || isQuotedAudio) {
          const encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          for (let _ of anu) {
            Kaido.sendMessage(_.jid, buff, audio, {
              quoted: troli,
            });
          }
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedSticker) {
          const encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          for (let _ of anu) {
            Kaido.sendMessage(_.jid, buff, sticker, {
              quoted: troli,
              contextInfo: {
                forwardingScore: 508,
                isForwarded: true,
              },
            });
          }
        } else {
          reply("reply sticker/audio");
        }
        break;

      case "upswteks":
        if (!isOwner) return reply("LU BUKAN OWNER GBLOK");
        if (args.length < 1) return reply("Teksnya?");
        teks = body.slice(10);
        Kaido.sendMessage("status@broadcast", teks, MessageType.text);
        reply(`Sukses upload status:\n${teks}`);
        break;

      case "upswsticker":
        if (!isOwner) return reply("LU BUKAN OWNER GBLOK");
        if (!isQuotedSticker) return reply("Reply stikernya!");
        if ((isMedia && !mek.message.videoMessage) || isQuotedSticker) {
          const encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          Kaido.sendMessage("status@broadcast", buff, sticker);
        }
        reply(`Sukses upload sticker`);
        break;

      case "upswaudio":
        if (!isOwner) return reply("LU BUKAN OWNER GBLOK");
        if (!isQuotedAudio) return reply("Reply audionya!");
        if ((isMedia && !mek.message.videoMessage) || isQuotedAudio) {
          const encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          buff = await Kaido.downloadMediaMessage(encmedia);
          Kaido.sendMessage("status@broadcast", buff, audio, {
            mimetype: "audio/mp4",
            duration: 359996400,
          });
        }
        reply(`Sukses upload audio`);
        break;

      case "upswvideo":
        if (!isOwner) return reply("LU BUKAN OWNER GBLOK");
        var konti = body.slice(11);
        reply(mess.wait);
        var enmediap = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        var mediap = await Kaido.downloadAndSaveMediaMessage(enmediap);
        const buffer3 = fs.readFileSync(mediap);
        Kaido.sendMessage("status@broadcast", buffer3, MessageType.video, {
          duration: 359996400,
          caption: `${konti}`,
        });
        reply(`Sukses upload video:\n${konti}`);
        break;

      case "upswimage":
        if (!isOwner) return reply("LU BUKAN OWNER GBLOK");
        var teksyy = body.slice(11);
        reply(mess.wait);
        enmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await Kaido.downloadAndSaveMediaMessage(enmedia);
        buffer = fs.readFileSync(media);
        Kaido.sendMessage("status@broadcast", buffer, MessageType.image, {
          quoted: mek,
          caption: `${teksyy}`,
        });
        reply(`Sukses upload image:\n${teksyy}`);
        break;

      case "colongsw": //by:Kaido
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await Kaido.downloadAndSaveMediaMessage(ger);
          Kaido.sendMessage(
            "6285162603180@s.whatsapp.net",
            fs.readFileSync(owgi),
            "imageMessage",
            {
              caption: c,
            }
          );
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await Kaido.downloadAndSaveMediaMessage(ger);
          Kaido.sendMessage(
            "6285162603180@s.whatsapp.net",
            fs.readFileSync(owgi),
            "videoMessage",
            {
              caption: c,
            }
          );
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;

      //══════════[ Fitur Grup ]══════════//

      case "welcome":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (args.length < 1)
          return fakeyt(
            `Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`
          );
        if (args[0] === "on") {
          if (isWelkom) return fakeyt("*welcome sudah aktif !!*");
          _welkom.push(from);
          fs.writeFileSync("./database/welcome.json", JSON.stringify(_welkom));
          fakeyt(
            `\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`
          );
        } else if (args[0] === "off") {
          if (!isWelkom) return fakeyt("*welcome sudah off sebelumnya !!*");
          _welkom.splice(from, 1);
          fs.writeFileSync("./database/welcome.json", JSON.stringify(_welkom));
          fakeyt(
            `\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`
          );
        } else {
          fakeyt("*on untuk mengaktifkan, off untuk menonaktifkan*");
        }
        break;
      case "antilink":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (!q) return fakeyt(`Pilih on atau off`);
        if (args[0].toLowerCase() === "on") {
          if (isAntiLink) return fakeyt(`Udah aktif`);
          _antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(_antilink)
          );
          fakeyt(
            `\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`
          );
        } else if (args[0].toLowerCase() === "off") {
          let anu = _antilink.indexOf(from);
          _antilink.splice(anu, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(_antilink)
          );
          fakeyt(
            `\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`
          );
        } else {
          fakeyt(`_Pilih on atau off_`);
        }
        break;
      case "antivirtex":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (!q) return fakeyt(`Pilih on atau off`);
        if (args[0].toLowerCase() === "on") {
          if (isAntiVirtex) return fakeyt(`Udah aktif`);
          _antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(_antivirtex)
          );
          fakeyt(
            `\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`
          );
        } else if (args[0].toLowerCase() === "off") {
          let anu = _antivirtex.indexOf(from);
          _antivirtex.splice(anu, 1);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(_antivirtex)
          );
          fakeyt(
            `\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`
          );
        } else {
          fakeyt(`_Pilih on atau off_`);
        }
        break;
      case "group":
      case "grup":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (args[0] === "buka") {
          fakeyt(`*Berhasil Membuka Grup ${groupMetadata.subject}*`);
          Kaido.groupSettingChange(from, GroupSettingChange.messageSend, false);
        } else if (args[0] === "tutup") {
          fakeyt(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`);
          Kaido.groupSettingChange(from, GroupSettingChange.messageSend, true);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        linkgc = await Kaido.groupInviteCode(from);
        yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`;
        Kaido.sendMessage(from, yeh, text, { quoted: troli });
        break;
      case "promote":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return fakeyt("Tag target yang ingin di jadi admin!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          teks = "Perintah di terima, anda menjdi admin :\n";
          for (let _ of mentioned) {
            teks += `@${_.split("@")[0]}\n`;
          }
          mentions(teks, mentioned, true);
          Kaido.groupMakeAdmin(from, mentioned);
        } else {
          mentions(
            `Perintah di terima, @${
              mentioned[0].split("@")[0]
            } Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`,
            mentioned,
            true
          );
          Kaido.groupMakeAdmin(from, mentioned);
        }
        break;
      case "demote":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return fakeyt("Tag target yang ingin di tidak jadi admin!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          teks = "Perintah di terima, anda tidak menjadi admin :\n";
          for (let _ of mentioned) {
            teks += `@${_.split("@")[0]}\n`;
          }
          mentions(teks, mentioned, true);
          Kaido.groupDemoteAdmin(from, mentioned);
        } else {
          mentions(
            `Perintah di terima, Menurunkan : @${
              mentioned[0].split("@")[0]
            } Menjadi Member`,
            mentioned,
            true
          );
          Kaido.groupDemoteAdmin(from, mentioned);
        }
        break;
      case "add":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (args.length < 1) return fakeyt("Yang mau di add siapa??");
        if (args[0].startsWith("08")) return fakeyt("Gunakan kode negara Gan");
        try {
          num = `${args[0].replace(/ /g, "")}@s.whatsapp.net`;
          Kaido.groupAdd(from, [num]);
        } catch (e) {
          console.log("Error :", e);
          fakeyt("Gagal menambahkan target, mungkin karena di private");
        }
        break;
      case "kick":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return fakeyt("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          Kaido.groupRemove(from, mentioned);
          fakeyt(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          Kaido.groupRemove(from, [anu]);
          fakeyt(mess.success);
        } else {
          Kaido.groupRemove(from, mentioned);
          fakeyt(mess.success);
        }
        break;
      case "tagall":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins) return fakeyt(mess.only.admin);
        members_id = [];
        teks = args.length > 1 ? args.join(" ").trim() : "";
        teks += "\n\n";
        for (let mem of groupMembers) {
          teks += `• @${mem.jid.split("@")[0]}\n`;
          members_id.push(mem.jid);
        }
        mentions(teks, members_id, true);
        break;
      case "setname":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        Kaido.groupUpdateSubject(from, `${body.slice(9)}`);
        Kaido.sendMessage(
          from,
          `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(
            9
          )}*`,
          text,
          { quoted: troli }
        );
        break;
      case "setdesc":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        Kaido.groupUpdateDescription(from, `${body.slice(9)}`);
        Kaido.sendMessage(
          from,
          `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${
            groupMetadata.subject
          }* Menjadi: *${body.slice(9)}*`,
          text,
          { quoted: troli }
        );
        break;
      case "setppgrup":
      case "setpp":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        if (isQuotedImage) {
          let encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          let media = await Kaido.downloadMediaMessage(encmedia);
          Kaido.updateProfilePicture(from, media);
          //.then((res) => fakeyt(jsonformat(res)))
          //.catch((err) => fakeyt(jsonformat(err)))
        } else {
          fakeyt(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`);
        }
        break;
      case "hidetag":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !isOwner && !mek.key.fromMe)
          return fakeyt(mess.only.admin);
        try {
          quotedText =
            mek.message.extendedTextMessage.contextInfo.quotedMessage
              .conversation;
          hideTag(from, `${quotedText}`);
        } catch {
          hideTag(from, `${q}`);
        }
        break;
      case "infogc":
      case "infogrup":
      case "infogrouup":
      case "grupinfo":
      case "groupinfo":
        if (!isGroup) return fakeyt(mess.only.group);
        try {
          var pic = await Kaido.getProfilePicture(from);
        } catch {
          var pic = "https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png";
        }
        let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(
          `${groupMetadata.creation}` * 1000
        )
          .tz("Asia/Jakarta")
          .format("DD/MM/YYYY HH:mm:ss")}\n*Owner Grup :* @${
          groupMetadata.owner.split("@")[0]
        }\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${
          groupMembers.length
        }\n*Welcome :* ${isWelkom ? "Aktif" : "Mati"}\n*AntiLink :* ${
          isAntiLink ? "Aktif" : "Mati"
        }\n*Desc :* \n\n${groupMetadata.desc}`;
        Kaido.sendMessage(from, await getBuffer(pic), image, {
          quoted: mek,
          caption: ingfo,
          contextInfo: {
            mentionedJid: [
              groupMetadata.owner.replace("@c.us", "@s.whatsapp.net"),
            ],
          },
        });
        break;
      case "resetlinkgc":
      case "resetlinkgroup":
      case "resetlinkgrup":
      case "revoke":
      case "resetlink":
        if (!isGroup) return fakeyt(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return fakeyt(mess.only.admin);
        if (!isBotGroupAdmins) return fakeyt(mess.only.Badmin);
        json = ["action", "inviteReset", from];
        Kaido.query({ json, expect200: true });
        fakeyt("Sukses Mereset Link Group");
        break;
      case "online":
      case "listonline":
      case "here":
        if (!isGroup) return fakeyt(mess.only.group);
        try {
          let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from;
          let online = [
            ...Object.keys(Kaido.chats.get(ido).presences),
            Kaido.user.jid,
          ];
          Kaido.sendMessage(
            from,
            "List Online:\n" +
              online.map((v) => "- @" + v.replace(/@.+/, "")).join`\n`,
            text,
            { quoted: fkon, contextInfo: { mentionedJid: online } }
          );
        } catch (e) {
          fakeyt(`${e}`);
        }
        break;

      //━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//

      default:
        if (isOwner) {
          if (budy.startsWith("$")) {
            if (!mek.key.fromMe && !isOwner) return;
            qur = budy.slice(2);
            exec(qur, (err, stdout) => {
              if (err) return reply(`${err}`);
              if (stdout) {
                reply(stdout);
              }
            });
          }
          if (isOwner) {
            if (budy.startsWith(">")) {
              console.log(
                color("[ EVAL ]"),
                color(
                  moment(mek.messageTimestamp * 1000).format(
                    "DD/MM/YY HH:mm:ss"
                  ),
                  "yellow"
                ),
                color(`eval return`)
              );
              try {
                let evaled = await eval(budy.slice(2));
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
                reply(`${evaled}`);
              } catch (err) {
                reply(`${err}`);
              }
            }
          }
        }
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("this.isZero") && !e.includes("jid")) {
      console.log("Error : %s", color(e, "red"));
    }
    // console.log(e)
  }
};
