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
// const tsExecArgs = 
//   separatorIndex === -1
//   ? rawArgs
//   : rawArgs.slice(0, separatorIndex)
// const nodeArgs = 
//   separatorIndex === -1
//   ? []
//   : rawArgs.slice(separatorIndex + 1)
// const program = new Command();
// program
//   .name('ts-exec')
//   .argument('<entry>')
//   .option('-w', '--watch', 'Watch mode')
//   .allowUnknownOption(true)
//   .allowExcessArguments(false)
//   .action((entry, options) => {
//     run(entry, nodeArgs)
//   })
// program.parse(['node', 'ts-exec', ...tsExecArgs])
