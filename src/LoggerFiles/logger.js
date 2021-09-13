var fs = require("fs");

class Logger {
    constructor(env, level, msg) {
        this.env = env;
        this.level = level;
        this.msg = msg;
    }


    catchlog(exception) {
        if (fs.existsSync("logs/botlogs.log")) {
            fs.appendFile(
                "botlogs.log",
                exception.stack +
                    "\n" +
                    exception.name +
                    "\n" +
                    exception.message,
                function (err) {
                    if (err) throw err;
                    console.log("Updated!");
                }
            );

            if (this.env === "DEV") {
                console.log(expection);
            }
        }
    }
}
