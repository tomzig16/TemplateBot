var fs = require("fs");

class Logger {
    constructor(env) {
        this.env = env;
    }

    dev_env() {
        return this.env === "DEV";
    }

    prod_env() {
        return this.env === "PROD";
    }

    test_env() {
        return this.env === "TEST";
    }

    writeToLogFile(filename, error, type) {
        if (typeof error == "object") {
            fs.appendFile(
                "logs/" + filename,
                type + " " + error.stack + "\n" + error.name + "\n" + error.message,
                function (err) {
                    if (err) throw err;
                    console.log("Updated!");
                }
            );
        } else {
            fs.appendFile("logs/" + filename, type + " " + error + "\n", function (err) {
                if (err) throw err;
                console.log("Updated!");
            });
        }
    }

    log(level, msg) {
        level = level.toLowerCase();

        if (level === "warning") {
            if (this.dev_env() || this.prod_env()) {
                console.log(msg);
            }
            this.writeToLogFile("botlogs.log", msg, '[WARNING]');
        } else if (level === "info") {
            if (this.dev_env()) {
                console.log(msg);
            }
            this.writeToLogFile("botlogs.log", msg, '[INFO]')
        }

    }

    catchlog(exception) {
        this.writeToLogFile("botlogs.log", exception, "[ERROR]");
        if (this.dev_env() || this.prod_env()) {
            console.log(exception);
        }
    }
}

module.exports = Logger;
