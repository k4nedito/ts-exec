import { Command } from 'commander';
import { run } from './run.js';

const rawArgs = process.argv.slice(2)
const separatorIndex = rawArgs.indexOf("--")

const tsExecArgs = 
  separatorIndex === -1
  ? rawArgs
  : rawArgs.slice(0, separatorIndex)

const nodeArgs = 
  separatorIndex === -1
  ? []
  : rawArgs.slice(separatorIndex + 1)

const program = new Command();

program
  .name('ts-exec')
  .argument('<entry>')
  .allowUnknownOption(true)
  .parse(['node', 'ts-exec', ...tsExecArgs]);

const entry = program.args[0];

if (!entry) {
  console.error('No entry file specified');
  process.exit(1);
}

run(entry, nodeArgs);
