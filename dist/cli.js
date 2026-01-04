import { Command } from 'commander';
import { run } from './run.js';
const program = new Command();
program
    .name('ts-exec')
    .argument('<entry>')
    .parse();
const entry = program.args[0];
if (!entry) {
    console.error('No entry file specified');
    process.exit(1);
}
run(entry);
