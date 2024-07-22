const moment = require("moment-timezone");
const manilaTime = moment.tz('Asia/Manila');
        const formattedDateTime = manilaTime.format('MMMM D, YYYY h:mm A');
const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "GoatBot V2"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "NTKhang", // original author Kshitiz 
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "Info 📜",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += ``; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n\n『  ${category.toUpperCase()}  』\n`;

          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 3).map((item) => ` ${item},`);
            msg += ` ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += ``;
        }
      });

      const totalCommands = commands.size;
      msg += ``;
      msg += `\n\n🗓 | ⏰ 𝗗𝗮𝘁𝗲 𝗔𝗻𝗱 𝗧𝗶𝗺𝗲:\n${formattedDateTime}\n\n✨ | 𝗧𝗔𝗡𝗝𝗜𝗥𝗢 𝗞𝗔𝗠𝗔𝗗𝗢\n𝗕𝗬 𝗦𝗬𝗠𝗘𝗥 𝗦𝗧𝗘𝗩𝗘 (𝗠𝗥𝗞𝗜𝗠𝗦𝗧𝗘𝗥𝗦)\n𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 » ${totalCommands}`; // its not decoy so change it if you want 

      await message.reply(msg);
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `「 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗛𝗘𝗟𝗣 」\n\n𝖭𝖺𝗆𝖾 » ${configCommand.name} \n𝖠𝗎𝗍𝗁𝗈𝗋 » ${author} \n𝖠𝗅𝗂𝖺𝗌𝖾𝗌 » ${configCommand.aliases ? configCommand.aliases.join():"Do Not Have"} \n𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 » ${longDescription} \n𝖴𝗌𝖺𝗀𝖾 » ${usage}`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
	  }
