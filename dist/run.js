import { spawn } from "child_process";
import { buildFile } from "./build.js";
// export async function run(entry: string, nodeArgs: string[]) {
//   try {
//     const file = await buildFile(entry);
//     const child = spawn('node', [...nodeArgs, file], {
//       stdio: 'inherit',
//     });
//     child.on('exit', code => {
//       process.exit(code ?? 0);
//     });
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// }
export async function run(entry, nodeArgs) {
    try {
        const outputPath = await buildFile(entry);
        const child = spawn("node", [...nodeArgs, outputPath], {
            stdio: "inherit",
        });
        const signals = ["SIGINT", "SIGTERM", "SIGHUP"];
        signals.forEach((signal) => {
            process.on(signal, () => {
                if (!child.killed) {
                    child.kill(signal);
                }
            });
        });
        child.on("exit", (code, signal) => {
            if (signal) {
                process.kill(process.pid, signal);
            }
            else {
                process.exit(code ?? 1);
            }
        });
    }
    catch (err) {
        console.error("build error: ", err);
        process.exit(1);
    }
}
