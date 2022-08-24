const { TrovoClient } = require("../dist/index");

let trovoClient = new TrovoClient("", {
  checkLive: true,
  checkInterval: 15,
  liveChannels: [],
});

trovoClient.events.subscribe("trovoLive", (channel) => {
  console.log(channel)
});