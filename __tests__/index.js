const { TrovoClient } = require("../dist/index");

let trovoClient = new TrovoClient();

trovoClient.channels.getChannels(["mudja"]).then((res) => console.log(res))