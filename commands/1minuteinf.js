/* eslint-disable max-len */
"use strict";

module.exports = {
  number: 5,
  name: "1minuteinf",
  description: "explains the UI change at infinity in under a minute",
  execute(message) {
    message.channel.send(`When you infinity in under a minute, the UI changes on the screen. Instead of the Dimensions disappearing, they stay and the Big Crunch button appears on top of them. This is merely visual, and is there to prevent flickering.`);
  }
};