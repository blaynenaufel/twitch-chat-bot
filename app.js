const tmi = require("tmi.js");
const dotenv = require('dotenv');

dotenv.config();

let options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "MrBot",
        password: "oauth:" + process.env.API_KEY
    },
    channels: ["lilsk80"]
};

let client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("connected", function (address, port) {
    client.action("lilsk80", "I am chat bot, and I am back for more!");
});

client.on("disconnected", function (reason) {
    client.action("lilsk80", "Chat bot sleepy. Nap mode engage!");
});

client.on("hosting", function (channel, target, viewers) {
    client.action("lilsk80", "Mr. " + channel + ", you are now hosting" + target + "!");
});

client.on("hosted", function (channel, username, viewers, autohost) {
    client.action("lilsk80", "Mr. " + channel + ", you are being hosted by" + username + "!");
});

client.on("join", function (channel, username, self) {
    client.action("lilsk80", "Welcome to the chat, " + username + "!");
});

client.on("part", function (channel, username, self) {
    client.action("lilsk80", username + " has departed.");
});

