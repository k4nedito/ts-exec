import { spawn } from 'child_process';
import { buildFile } from './build.js';
export async function run(entry, nodeArgs) {
    try {
        const file = await buildFile(entry);
        const child = spawn('node', [...nodeArgs, file], {
            stdio: 'inherit',
        });
        child.on('exit', code => {
            process.exit(code ?? 0);
        });
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}
