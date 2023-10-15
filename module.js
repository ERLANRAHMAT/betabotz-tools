/**
Tools Betabotz
**/

///====================[ Ai ]============\\
const { remini } = require('./tools/ai/remini.js')
const { removebg } = require('./tools/ai/removebg.js')
const { toanime } = require('./tools/ai/toanime.js')
const { tozombie } = require('./tools/ai/tozombie.js')

module.exports.remini = remini
module.exports.removebg = removebg
module.exports.toanime = toanime
module.exports.tozombie = tozombie

//=================[ Other Feature]=========\\
const { openai } = require('./tools/ai/openai.js')
const { aio } = require('./tools/download/aio.js')
const { capcut } = require('./tools/download/capcut.js')
const { douyin } = require('./tools/download/douyin.js')
const { facebook } = require('./tools/download/facebook.js')
const { instagram } = require('./tools/download/instagram.js')
const { pinterest } = require('./tools/download/pinterest.js')
const { threads } = require('./tools/download/threads.js')
const { tiktok } = require('./tools/download/tiktok.js')
const { twitter } = require('./tools/download/twitter.js')

module.exports.openai = openai;
module.exports.aio = aio;
module.exports.capcut = capcut;
module.exports.douyin = douyin;
module.exports.facebook = facebook;
module.exports.instagram = instagram;
module.exports.pinterest = pinterest;
module.exports.threads = threads;
module.exports.tiktok = tiktok;
module.exports.twitter = twitter;