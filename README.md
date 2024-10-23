## Instructions

1. `git clone https://github.com/mikhailvs/tgstrack`
2. `cd tgstrack`
3. `npm i`
4. `node track.js`
   * You'll be prompted for your phone number, which must be in the *+NXXXXXXXXXX* format.

### Sample Command Line Output
```aiignore
[2024-10-23T00:06:34.922] [INFO] - [Running gramJS version 2.26.1]
[2024-10-23T00:06:34.925] [INFO] - [Connecting to 149.154.167.50:443/TCPFull...]
[2024-10-23T00:06:36.767] [INFO] - [Connection to 149.154.167.50:443/TCPFull complete!]
[2024-10-23T00:06:36.767] [INFO] - [Using LAYER 184 for initial connect]
Please enter your phone number (+1xxxxxxx): +15551234567
[2024-10-23T00:06:41.575] [INFO] - [Phone migrated to 1]
[2024-10-23T00:06:41.768] [INFO] - [Reconnecting to new data center 1]
[2024-10-23T00:06:41.966] [WARN] - [Disconnecting...]
[2024-10-23T00:06:41.966] [INFO] - [Disconnecting from 149.154.167.50:443/TCPFull...]
[2024-10-23T00:06:41.967] [INFO] - [Connecting to 149.154.175.55:443/TCPFull...]
[2024-10-23T00:06:41.967] [INFO] - [connection closed]
[2024-10-23T00:06:43.601] [INFO] - [Connection to 149.154.175.55:443/TCPFull complete!]
[2024-10-23T00:06:43.601] [INFO] - [Using LAYER 184 for initial connect]
Please enter the code you received: 12345
[2024-10-23T00:06:48.752] [INFO] - [Signed in successfully as Jimbobulous]
```

This will run until you kill it with a `Ctrl-C` or some other way, it will append lines to a file called `log.csv` which
is a tap separated file with the following format:
    |datetime in ms|contact phone|username|new status|
