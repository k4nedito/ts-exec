import { BuildError } from "./buildError";

export class ErrorReporter {
    static fatal(err: unknown): never {
        if (err instanceof BuildError) {
            this.reportBuildError(err)
            process.exit(1)
        }

        console.error("internal error:")
        console.error(err)
        process.exit(2)
    }

    private static reportBuildError(err: BuildError) {
        console.error("build error:")
        console.error(err.message)

        if (err.cause instanceof Error) {
            console.error(err.cause.message)
        }
    }
}