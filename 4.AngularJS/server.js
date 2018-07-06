const { spawn } = require("child_process");
const kill = require("tree-kill");
let child, errLog = true;

module.exports = {
    start() {
        child = spawn(/^win/.test(process.platform) ? "npm.cmd" : "npm", [
            "start"
        ]);

        child.stdout.setEncoding("utf8");
        child.stdout.on("data", chunk => {
            // data from standard output is here as buffers
        });

        child.on("close", code => {
            if(errLog)
                console.log(`child process exited with code ${code}`);
        });
    },
    stop() {
        errLog = false;
        child.stdin.pause();
        kill(child.pid, "SIGKILL");
    }
};
