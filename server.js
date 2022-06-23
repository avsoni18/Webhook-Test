"use strict";

const app = require("./app");
const http = require("http");

const server = http.createServer(app);

const TESTING_IH_PORT = 3000

server.listen(TESTING_IH_PORT, (err) => {
    if (err) {
        console.log("error", err);
    } else {
        console.log("info", `server running at  ${TESTING_IH_PORT}`);
    }
});
