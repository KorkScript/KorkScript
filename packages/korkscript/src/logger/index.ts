export const PREFIX = "[KorkScript] "

export const RESET = "\x1b[0m"

export const YELLOW = "\x1b[33m"
export const RED = "\x1b[31m"

export function info(message: string) {
    console.log(PREFIX + message)
}

export function warn(message: string) {
    console.warn(YELLOW + PREFIX + message + RESET)
}

export function error(message: string) {
    console.error(RED + PREFIX + message + RESET)
}

