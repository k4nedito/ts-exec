import { run } from './run.js';
const rawArgs = process.argv.slice(2);
const entryIndex = rawArgs.findIndex(arg => !arg.startsWith('-'));
if (entryIndex === -1) {
    console.error("error: missing required arguments <entry>");
    process.exit(1);
}
const entry = rawArgs[entryIndex];
const nodeArgs = rawArgs.slice(0, entryIndex);
const scriptArgs = rawArgs.slice(entryIndex + 1);
run(entry, nodeArgs, scriptArgs);
