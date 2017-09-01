const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require ("./settings.json")

var prefix = "~"

var hentai = [
  "http://i.imgur.com/6XVhS5Y.jpg",
  "http://i.imgur.com/PGilvLo.png",
  "http://i.imgur.com/IhbO3m8.png",
  "http://i.imgur.com/neWrwgK.jpg",
  "http://i.imgur.com/0vx0wwL.jpg",
  "http://i.imgur.com/efd4s0z.png",
  "http://i.imgur.com/sAWenmS.jpg",
  "http://i.imgur.com/9HpnB76.png",
  "http://i.imgur.com/gPWBrfP.jpg",
  "http://i.imgur.com/tGLnMPv.png",
  "http://i.imgur.com/l7TrwYb.jpg",
  "http://i.imgur.com/dH7tLgo.jpg",
  "http://i.imgur.com/7el1j9Z.jpg",
  "http://i.imgur.com/a0YmHZ5.jpg",
  "http://i.imgur.com/HA8yma9.jpg",
  "http://i.imgur.com/IRUEFpf.jpg",
  "http://i.imgur.com/XcPXWjN.jpg",
  "http://i.imgur.com/jSJ1kta.jpg",
  "http://i.imgur.com/WbkuSxX.jpg",
  "http://i.imgur.com/Yu1Sqyl.jpg",
  "http://i.imgur.com/N3s3KiT.jpg",
  "http://i.imgur.com/9Kl3nEb.jpg",
  "http://i.imgur.com/JpjdBcD.jpg",
  "http://i.imgur.com/mFIFRso.jpg",
  "http://i.imgur.com/scPcoT7.jpg",
  "http://i.imgur.com/OFMKxJK.jpg",
  "http://i.imgur.com/pEUanAw.jpg",
  "http://i.imgur.com/nooHQrc.jpg",
  "http://i.imgur.com/TpIl6mO.jpg",
  "http://i.imgur.com/oZo7DRF.jpg",
  "http://i.imgur.com/mrbAgur.jpg",
  "http://i.imgur.com/DyWQh9W.jpg",
  "http://i.imgur.com/bHbhlI2.jpg",
  "http://i.imgur.com/0CgYLDn.jpg",
  "http://hentaihaven.org/pinkerton-episode-3/",
  "http://hentaihaven.org/ero-zemi-ecchi-ni-yaru-ki-ni-abc-episode-1/",
  "http://hentaihaven.org/swamp-stamp-episode-1/",
  "http://hentaihaven.org/zutto-suki-datta-episode-2/",
  "http://hentaihaven.org/inyouchuu-shoku-harami-ochiru-shoujo-tachi-episode-1/",
  "http://hentaihaven.org/monster-girl-quest-episode-1/",
  "http://hentaihaven.org/zettai-junshu%E2%98%86kyousei-kozukuri-kyokashou-episode-2/",
  "http://hentaihaven.org/inyouchuu-etsu-kairaku-henka-taimaroku-episode-2/",
  "http://hentaihaven.org/bust-to-bust-chichi-wa-chichi-ni-episode-1/",
  "http://hentaihaven.org/fuzzy-lips-episode-2-uncensored/",
  "http://hentaihaven.org/jitaku-keibiin-episode-3/",
  "http://hentaihaven.org/nuki-doki-tenshi-to-akuma-no-sakusei-battle-revolution-episode-3/",
];

var fortunes = [
    "Yes",
    "No",
    "Maybe",
];

var coinflip = [
  "Heads!",
  "Tails!",
];

client.on("ready", () => {
	console.log("Ready");
});

client.on("guildMemberAdd", member =>{
  member.guild.defaultChannel.send("Welcome to the server, " + member + "!");
})

client.on("message", message => {
  let args = message.content.split(" ").slice(1);

  if(message.author === client.user) return;

	if(message.content.toLowerCase() === "hello") {
		message.channel.send("Hi, there!")
	}else

	if(message.content.toLowerCase() === "nigger") {
		message.channel.send("With a rocket launcher?")
	}else

    if(message.content.toLowerCase() === "omae wa mou shindeiru") {
		message.channel.send("Nani?!")
	}else

	if(message.content.toLowerCase() === "i love you bard") {
		message.channel.send("I love you too honey.")
	}else

	if(message.content.toLowerCase() === "how are you bard?") {
		message.channel.send ("Good, how about you?")
	}else

	if(message.content.toLowerCase() === "bard wanna fuck?") {
		message.channel.send("I love you only as a friend.")
	}else

  if(message.content.toLowerCase() === "ayy") {
    message.channel.send("lmao :alien:")
  }else

  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send({embed:{
      color: 3447003,
      description:":alarm_clock: " + client.ping
    }});
  }else

  if(message.content.startsWith(prefix + "avatar")) {
    message.reply(message.author.avatarURL);
  } else

  if(message.content.startsWith(prefix + "info")) {
    message.channel.send("I am secretly a pedofile.");
  } else

  if(message.content.startsWith(prefix + "8ball" + " ")) {
    message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)])
  } else

  if(message.content ===(prefix + "8ball")) {
    message.channel.send("I can't read that.")
  }else

  if(message.content ===(prefix + "dm")) {
    message.author.send("https://youtu.be/dQw4w9WgXcQ")
  }else

  if(message.content.startsWith(prefix + "spanish")) {
    message.channel.send("Taco mama sita senorita.")
  }else

  if(message.content.startsWith(prefix + "french")) {
    message.channel.send("Sorry, I don't speak croissant.")
  }else

  if(message.content.startsWith(prefix + "italian")) {
    message.channel.send("Vaffanculo.")
  }else

  if(message.content.startsWith(prefix + "hentai")) {
    message.author.send("Here's your hentai: " + hentai[Math.floor(Math.random() * hentai.length)])
  }else

  if(message.content.startsWith(prefix + "setgame")) {
  client.user.setPresence({ game: { name: (args.join(" ")), type: 0 } });
  }else

  if(message.content.startsWith(prefix + "setstatus" + " ")) {
    client.user.setStatus(args.join(" "))
  }else

  if(message.content === (prefix + "setstatus")) {
    message.channel.send("Choose between: Online, Idle, Dnd, Invisible.")
  }else

  if(message.content.startsWith(prefix + "urban" + " ")) {
    message.channel.send("http://" + (args.join("-")) + ".urbanup.com/")
  }else

  if(message.content.startsWith(prefix + "fakerlossstreak")) {
    message.channel.send("http://i.imgur.com/zpj3So9.png");
  }else

  if(message.content.startsWith(prefix + "coinflip")) {
    message.channel.send({embed:{
      color: 3447003,
      description: (coinflip[Math.floor(Math.random() * coinflip.length)])
    }});
  }else

  if(message.content.startsWith(prefix + "add")) {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c)=> p+c);
    message.channel.send(total);
  }else

  if(message.content.startsWith(prefix + "subtract")) {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c)=> p-c);
    message.channel.send(total);
  }
});
client.login(settings.token);
