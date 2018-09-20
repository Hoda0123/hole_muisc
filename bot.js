const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true})
const Music = require('discord.js-musicbot-addon');
client.login(`jnmN9cY3lq1CZ68FPLaTn6ZU2xqWh4zD`)
client.on('ready', ()=> {
    console.log('Ready!')
})
 Music.start(client, {
    prefix: "H", // 
    youtubeKey: 'AIzaSyDIv8O9OwZdoTaghK3_SQmyGcQFzkXMW6E', //هنا ال yt v3 api key
    global: true , // يكون للسيرفرات ؟ خليه false, يكون queue مشترك خليه true            
    maxQueueSize: 50, // اقصى حجم لل queue        
    playCmd: 'play', // امر التشغيل
    volumeCmd: 'vol',     // امر الصوت
    thumbnailType: 'high',
    leaveCmd: 'stop',    // امر المغادرة
    anyoneCanSkip: true, // تبي الكل يقدر يسوي skip? true > yep, false > nope
    disableLoop: false, // تبي يكون فيه اعادة؟ , true > yep, false > nope
    searchCmd: 'search', //امر البحث 
    requesterName: true, 
    inlineEmbeds: false,     
    queueCmd: 'queue', // امر القائمة
    pauseCmd: 'pause', // امر الايقاف المؤقت
    resumeCmd: 'resume', // امر الاستمرار
    skipCmd: 'skip', // امر السكب
    loopCmd: 'loop', // امر الاعادة
    enableQueueStat: true,
  });
