export enum CompilerState {
    NONE,
    BUILD_STARTED,
    PARSING_FILES,
    COMPILING_FILES,
    BUILD_DONE
}

export class Compiler {
    public state: CompilerState;
    public readonly projectPath: string;
    public startTimestamp: number;
    public stopTimestamp: number;

    constructor(path: string) {
        this.projectPath = path;
        
        this.startTimestamp = -1;
        this.stopTimestamp = -1;
        this.state = CompilerState.NONE
    }

    start() {
        this.state = CompilerState.BUILD_STARTED;
        this.startTimestamp = new Date().getTime()
    }

    stop(sucess: boolean): CompilerResponse {
        this.state = CompilerState.BUILD_DONE;
        this.stopTimestamp = new Date().getTime();
        const response: CompilerResponse = {
            sucess: sucess,
            startTimestamp: this.startTimestamp,
            endTimestamp: this.stopTimestamp
        }
    }
}

export type CompilerResponse = {
    sucess: boolean,
    startTimestamp: number,
    endTimestamp: number
}