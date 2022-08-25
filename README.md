# Trovo-JS
[![npm package](https://nodei.co/npm/trovo-js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/trovo-js/)

Trovo-JS is NodeJS API Wrapper for trovo.live Streaming Platform offering Notification when Channel goes Live, Information about Channels, Information about Categories and so on.
## Features
### Channels
* Get Channel by Name/Username
* Get Channel by ID
* Get Channel ID from Name/Username
* Get Multiple Channels from Name/Username
* Get Username from ID
* Get Profile Image
* Get Subscribers Count
* Get whether Channel is Live
* Get Followers Count
* Get notification when Channel go Live (Listen for event)
### Categories
* Get List of Categories
* Search Categories

## Installation
```
npm install trovo-js
```

## Easy Usage
```
const { TrovoClient } = require("trovo-js");

// Initialize Client
const trovoClient = new TrovoClient("apiKey");

// Initialize Client with Channel Live Notifications which checks every 60 seconds
// const trovoClient = new TrovoClient("apiKey", { checkLive: true, checkInterval: 60, liveChannels: ["channelName"] });

// Get information about Channel
trovoClient.channels.getChannelByName("channelName").then((response) =>  {
  console.log(response);
});
```

## Usage
For beginning, you need to initialize Trovo Client as so:
```
const { TrovoClient } = require("trovo-js");

// Initialize Trovo Client with apiKey, you can pass options after `apiKey` to specify whether to
// listen for Live Notifications, Interval for Checking & List of Channels for which to check.
const trovoClient = new TrovoClient("apiKey", { checkLive: true, checkInterval: 60, liveChannels: ["channelName"] });
```
and after that you can use functions on `trovoClient`.
### **Channel**
Most of the Channel functions requires you to pass `username` parameter, but some of them requires `id` which represents Channel ID.
To obtain Channel ID you can use `getChannelId` function.
___
Get Channel Information from Name/Username
```
trovoClient.channels.getChannelByName(username).then((result) => {
  console.log(result);
});
```
Get Channel Information from Channel ID
```
trovoClient.channels.getChannelById(id).then((result) => {
  console.log(result);
});
```
Get Channel ID from Name/Username
```
trovoClient.channels.getChannelId(username).then((result) => {
  console.log(result);
});
```
Get Multiple Channels from list of Names/Usernames
```
trovoClient.channels.getChannels([usernames]).then((result) => {
  console.log(result);
});
```
Get Channel Username from Channel ID
```
trovoClient.channels.getUsername(id).then((result) => {
  console.log(result);
});
```
Get Channel Profile Image from Name/Username
```
trovoClient.channels.getProfileImage(username).then((result) => {
  console.log(result);
});
```
Check whether Channel is Live
```
trovoClient.channels.isLive(username).then((result) => {
  console.log(result);
});
```
Get Number of Followers from Name/Username
```
trovoClient.channels.getFollowerCount(username).then((result) => {
  console.log(result);
});
```
Get Number of Subscribers from Name/Username
```
trovoClient.channels.getSubscriberCount(username).then((result) => {
  console.log(result);
});
```
### **Categories**
Get list of Trovo Game Categories
```
trovoClient.categories.getAllCategories().then((result) => {
  console.log(result);
});
```
Search Trovo Game Categories by Query
```
trovoClient.categories.searchCategories(query, limit?).then((result) => {
  console.log(result);
});
```
### **Events**
These are all events you can listen for, currently there is just one and it is 'trovoLive'.
___
Listen for Channel Live
```
trovoClient.events.subscribe("trovoLive" (channel) => {
  console.log(`Channel ${channel.name} is now Live!`);
})
```

## Get Trovo API Client ID
1. Go to https://developer.trovo.live/
2. Login with your Trovo
3. Click 'New Application' & fill in all required fields, for Redirect URLs put `https://trovo.live`
4. Agree on `Trovo Api Access Terms` & `Trovo Data Sharing Agreement`
5. Click 'Create' & wait for Trovo to approve your Application, this may take even a week
6. When it get's accepted visit https://developer.trovo.live/, click 'Applications' and copy Client ID
## Credits
* Trovo.live API: https://developer.trovo.live/

## Upcoming
* ...