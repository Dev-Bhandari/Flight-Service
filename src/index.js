const { ServerConfig, Logger } = require("./config");
const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(ServerConfig.PORT, () => {
    console.log("Successfully started server on PORT ", ServerConfig.PORT);
    Logger.info("Successfully started server", {});
});
