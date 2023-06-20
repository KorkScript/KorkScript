export enum CompilerState {
    BUILD_STARTED,
    PARSING_FILES,
    COMPILING_FILES,
    BUILD_DONE
}

export class Compiler {
    public state: ?CompilerState;
    public readonly projectPath: string;
    public readonly startTimestamp: number;
    public readonly stopTimestamp: number;

    constructor(path: string) {
        this.projectPath = path;
        
        this.startTimestamp = -1;
        this.stopTimestamp = -1;
    }

    start() {
        this.state = CompilerState.BUILD_STARTED;
        this.startTimestamp = new Date().getTime()
    }

    stop() {
        this.state = CompilerState.BUILD_DONE;
        this.stopTimestamp = new Date().getTime();
    }
}

export type CompilerResponse = {
    sucess: boolean,
    startTimestamp: number,
    endTimestamp: number
}