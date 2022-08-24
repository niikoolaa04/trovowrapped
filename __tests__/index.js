const { TrovoClient } = require("../dist/index");

let trovoClient = new TrovoClient("***REMOVED***", {
  checkLive: false,
  checkInterval: 10,
  liveChannels: ["mudja"],
});

trovoClient.channels.getChannelByName().then((res) => console.log(res))