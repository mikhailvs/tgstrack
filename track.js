const { TelegramClient } = require("telegram");
const { MemorySession } = require("telegram/sessions");
const readline = require("readline");
const fs = require('fs');

const apiId = 26174485;
const apiHash = "b037f9aef40b0e7544fd5a1be95263ce";
const storeSession = new MemorySession();

storeSession.setDC(2, "149.154.167.50", 443)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const client = new TelegramClient(storeSession, apiId, apiHash, {
    connectionRetries: 1,
    useWSS: true
  });

  await client.start({
    phoneNumber: async () =>
      new Promise((resolve) => rl.question("Please enter your phone number (+1xxxxxxx): ", resolve)),
    password: async () =>
      new Promise((resolve) => rl.question("Please enter your password: ", resolve)),
    phoneCode: async () =>
      new Promise((resolve) => rl.question("Please enter the code you received: ", resolve)),
    onError: (err) => console.log(err),
  });


  client.addEventHandler(async (event) => {
    if (event.className !== "UpdateUserStatus") {
      return
    }

    const who = await client.getEntity(event.userId);

    fs.appendFileSync(
      "log.csv",
      `${Date.now()}\t${who.phone}\t${who.username}\t${event.status.className === "UserStatusOffline" ? "OFFLINE" : "ONLINE"}\r\n`
    );
  });
})();