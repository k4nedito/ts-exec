import { spawn } from "child_process";
import { buildFile } from "./build.js";

export async function run(
  entry: string,
  nodeArgs: string[],
  scriptArgs: string[]
) {
  try {
    const outputPath = await buildFile(entry);

    const child = spawn("node", [...nodeArgs, outputPath, ...scriptArgs], {
      stdio: "inherit",
    });

    const signals: NodeJS.Signals[] = ["SIGINT", "SIGTERM", "SIGHUP"];

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
      } else {
        process.exit(code ?? 1);
      }
    });
  } catch (err) {
    console.error("build error: ", err);
    process.exit(1);
  }
}
