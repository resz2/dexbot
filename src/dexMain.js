require('dotenv').config();

const {Client, Message} = require('discord.js');
const client = new Client();
const PREFIX = ".";

client.on('ready', ()=> {
    console.log(`${client.user.username} logged in`);
});

client.on('message', (message)=>    {
    msgParser(message);
});
client.login(process.env.DEXBOT_TOKEN);

function msgParser(msg) {
    const full = String(msg.content);
    if(full.startsWith(PREFIX))  {
        const [command, ...args] = full
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        
            if(command=='dex')  {
                if(args.length==0)  {
                    msg.reply('Please specify a pokemon');
                    return;
                }
                console.log("poke info");
            }
            else    {
                console.log("no cmd");
            }
    }
}