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

    writeToLogFile(filename, error) {
        if (typeof error == "object") {
            fs.appendFile(
                "logs/" + filename,
                error.stack + "\n" + error.name + "\n" + error.message,
                function (err) {
                    if (err) throw err;
                    console.log("Updated!");
                }
            );
        } else {
            fs.appendFile("logs/" + filename, error, function (err) {
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
        } else if (level === "info") {
            if (this.dev_env()) {
                console.log(msg);
            }
        }

        this.writeToLogFile("botlogs.log", msg);
        console.log("wrote to file");
    }

    catchlog(exception) {
        this.writeToLogFile("botlogs.log", exception);
        if (this.dev_env()) {
            console.log(exception);
        }
    }
}

module.exports = Logger;
