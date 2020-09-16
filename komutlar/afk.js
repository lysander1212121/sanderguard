const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfiJda-Nrv0WuiPVBf_rFQzjfsAH-bEZDNqw&usqp=CAU"
                  },
                description: "**:white_check_mark: Artık Afksın :white_check_mark:**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: '?????',
  usage: 'afk'
};