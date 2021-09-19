var fs = require("fs");

class Logger {
    constructor(env) {
        this.env = env;
        this.LogLevelWarning = "warning";
        this.LogLevelInfo = "info"
        this.LogLevelError = "error"

        if (this.checkIfLogFileExists()) {
            fs.rename('logs/botlogs.log', 'logs/old_botlog.txt', () => { return; });
        }
    }

    // These functions return true/false if the env is prod/test/dev
    checkIfLogFileExists() {
        return fs.existsSync('logs/botlogs.log');
    }
    devEnv() {
        return this.env === "DEV";
    }

    prodEnv() {
        return this.env === "PROD";
    }

    testEnv() {
        return this.env === "TEST";
    }

    // Returns the current time in [DD/MM/YYYY HH/MM/SS] format
    currentTime() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = ((date.getMilliseconds() % 60000) / 1000).toFixed(0);

        const result = "[" + day + ":" + month + ":" + year + " " + hour + ":" + minute + ":" + seconds + "]";
        return result;
    }

    writeToLogFile(filename, error, type) {
        const time = this.currentTime()
        // Check if the error is a function (ie a exception)
        if (typeof error == "object") {
            // Append to last to file
            fs.appendFile(
                "logs/" + filename,
                time + " " + type + " " + error.stack + "\n" + error.name + "\n" + error.message,
                function (err) {
                    if (err) throw err;
                }
            );
        } else {
            fs.appendFile("logs/" + filename, time + " " + type + " " + error + "\n", function (err) {
                if (err) throw err;
            });
        }
    }

    log(level, msg) {
        level = level.toLowerCase();

        if (level === this.LogLevelWarning) {
            if (this.devEnv() || this.prod_env()) {
                console.log(msg);
            }
            this.writeToLogFile("botlogs.log", msg, '[WARNING]');
        } else if (level === this.LogLevelInfo) {
            if (this.devEnv()) {
                console.log(msg);
            }
            this.writeToLogFile("botlogs.log", msg, '[INFO]')
        } else if (level == this.LogLevelError) {
            this.writeToLogFile("botlogs.log", msg, "[ERROR]");
            if (this.devEnv() || this.prod_env()) {
                console.log(msg);
            }
        }

    }
}

module.exports = Logger;
