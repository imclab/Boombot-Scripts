/**/// Description: Make the bot fan you
/**///
/**/// Dependencies: None
/**///
/**/// Author: https://github.com/TerrordactylDesigns
/**///
/**/// Notes: user must fan the bot first
exports.trigger = '/fanme';
exports.listed = true;
exports.script = function(boombot, text, uname, uid, private) {
  boombot.bot.getFans(function (data) {
    if (data.fans.contains(uid)) {
      boombot.bot.becomeFan(uid, function(res) {
        if (res.success) {
          boombot.respond(uid, 'Here\'s your free fan point!');
        } else {
          boombot.respond(uid, 'I already fanned you!. Greedy....');
        }
      });
    } else {
      boombot.respond(uid, 'Not until you fan me first!');
    }
  });
}