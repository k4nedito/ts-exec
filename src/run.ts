import { spawn } from 'child_process';
import { buildFile } from './build';

export async function buildAndRun(entry: string) {
  const file = await buildFile(entry);

  const child = spawn('node', [file], {
    stdio: 'inherit',
  });

  child.on('exit', code => process.exit(code ?? 0));
}
