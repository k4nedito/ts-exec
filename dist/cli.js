import { run } from './run.js';
const rawArgs = process.argv.slice(2);
const separatorIndex = rawArgs.indexOf("--");
const entryIndex = rawArgs.findIndex(arg => !arg.startsWith('-'));
if (entryIndex === -1) {
    console.error("error: missing required arguments <entry>");
    process.exit(1);
}
const entry = rawArgs[entryIndex];
const nodeArgs = [
    ...rawArgs.slice(0, entryIndex),
    ...(separatorIndex === -1 ? [] : rawArgs.slice(separatorIndex + 1))
];
run(entry, nodeArgs);
