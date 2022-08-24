const { TrovoClient } = require("../dist/index");

let trovoClient = new TrovoClient("", {
  checkLive: false,
  checkInterval: 10,
  liveChannels: [],
});

trovoClient.channels.getChannelByName().then((res) => console.log(res))