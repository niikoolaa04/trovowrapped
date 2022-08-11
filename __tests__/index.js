const { TrovoClient } = require("../dist/index");

let trovoClient = new TrovoClient('test');

console.log(trovoClient.isReady);