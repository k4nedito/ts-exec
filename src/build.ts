import { build } from 'esbuild';
import path from 'path';
import fs from 'fs/promises';

const outDir = '.ts-exec-cache';

export async function buildFile(entry: string): Promise<string> {
  await fs.mkdir(outDir, { recursive: true });

  const outfile = path.join(outDir, 'entry.js');

  await build({
    entryPoints: [entry],
    outfile,
    bundle: false,
    platform: 'node',
    format: 'esm',
    sourcemap: 'inline',
    target: 'node25',
  });

  return outfile;
}
