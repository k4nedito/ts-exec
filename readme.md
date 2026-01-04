# ts-exec TS runner tool

This project started after investigating issues with tsx watch mode. Inspired by tsx’s simple execution model, it implements a TypeScript runner that transpiles TS to JS using esbuild and executes it with Node.js, without type checking or runtime compiler hooks.
 
## Build & Run

`pnpm build`
`pnpm link --global`

## TODO

- [ ] Node flag passthrough (`--inspect`, `--trace-warnings`, etc.)
- [ ] Proper signal forwarding (SIGINT, SIGTERM, SIGHUP)
- [ ] Distinguish build errors vs runtime errors (clear formatting)
- [ ] Hash-based cache for compiled output
  - [ ] Cache key includes entry path + mtime
  - [ ] Separate outputs per hash
  - [ ] Safe overwrite / cleanup strategy
- [ ] Explicit `tsconfig.json` resolution
  - [ ] Print which tsconfig is used
  - [ ] Support `--tsconfig <path>`
  - [ ] Validate unsupported options and fail fast
- [ ] `.mts` support (ESM)
- [ ] `.cts` handling (explicit error or opt-in support)
- [ ] Correct sourcemaps for stack traces and `--inspect`
- [ ] Stable exit code propagation
- [ ] Optional JSON error output (`--json-errors`)
- [ ] Optional deterministic mode (`--deterministic`)
  - [ ] Same input → same output bytes
- [ ] Cache inspection commands
  - [ ] `ts-exec cache ls`
  - [ ] `ts-exec cache clear`
- [ ] Cache invalidation on:
  - [ ] tsconfig change
  - [ ] Node version change
  - [ ] esbuild version change
- [ ] Execution profiling (`--profile`)
  - [ ] Build time
  - [ ] Run time
- [ ] Quiet mode / no ANSI unless requested
- [ ] Watch mode (rebuild → kill → restart)
  - [ ] Debounced FS events
  - [ ] No incremental runtime state
- [ ] Optional Node ESM loader mode (no temp files)
- [ ] Parallel prebuild of dependency graph
- [ ] Integration tests (spawn Node, real FS)
- [ ] Regression tests for ESM resolution
- [ ] CI matrix across Node versions
- [ ] Documented limitations and guarantees
