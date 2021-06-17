const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');



const fs = require('fs');
const fileName = './number.json';
const file = require(fileName);



client.on('message',async message => {
  if(message.author.bot)return;
  if (message.channel.id === config.channel_id ) {
    if(message.author.bot){await message.delete()}
  if(message.content.startsWith("0")){
    await message.delete();
  }
else{



  if(message.content.startsWith("0")){

    await message.delete
  }
    else{
    if (message.attachments.size > 0) {
     await message.delete().catch((e) => {
        console.log("")
  })
    }
  var msg= message.content;
  var regExp = /[0-9]/g;
  var testString = msg;            
    if(regExp.test(testString)){
      var regExpo = /[a-zA-Z]/g;
      if(regExpo.test(testString)){
     message.delete();
      }else {
  var regExpoo =/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
  if(regExpoo.test(testString)){
  message.delete().catch((e) => {
    console.log("")
 })
  }
else{

if(message.content-file.key == "1"){
  file.key = message.content;
  
fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  console.log("")
})}
else{
message.delete().catch((e) => {
    console.log("")
})
}
}}}else{
   message.delete().catch((e) => {
    console.log("")
 })
 }}
 


}

  }
});
 









client.login(config.token)