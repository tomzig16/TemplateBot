var fs = require("fs");

class Logger {
    constructor(env) {
        this.env = env;
        if (this.checkIfLogFileExists()) {
            console.log('something')
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

    test_env() {
        return this.env === "TEST";
    }

    current_time() {
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
        const time = this.current_time()
        // Check if the error is a function (ie a exception)
        if (typeof error == "object") {
            // Append to last to file
            fs.appendFile(
                "logs/" + filename,
                time + " " + type + " " + error.stack + "\n" + error.name + "\n" + error.message,
                function (err) {
                    if (err) throw err;
                    console.log("Updated!");
                }
            );
        } else {
            fs.appendFile("logs/" + filename, time + " " + type + " " + error + "\n", function (err) {
                if (err) throw err;
                console.log("Updated!");
            });
        }
    }

    log(level, msg) {
        level = level.toLowerCase();

        if (level === "warning") {
            if (this.devEnv() || this.prod_env()) {
                console.log(msg);
            }
            this.writeToLogFile("botlogs.log", msg, '[WARNING]');
        } else if (level === "info") {
            if (this.devEnv()) {
                console.log(msg);
            }
            this.writeToLogFile("botlogs.log", msg, '[INFO]')
        }

    }

    logerror(exception) {
        this.writeToLogFile("botlogs.log", exception, "[ERROR]");
        if (this.devEnv() || this.prod_env()) {
            console.log(exception);
        }
    }
}

module.exports = Logger;
