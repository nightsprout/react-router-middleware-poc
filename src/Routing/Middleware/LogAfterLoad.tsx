import {Middleware} from "./Middleware";

export const LogAfterLoad = (next: any) => {
    let response = next()
    console.log('CHECKPOINT 2')
    return next()
}