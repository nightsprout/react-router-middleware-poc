import {Middleware} from "./Middleware";

export const Check2 = (next: any) => {
    let response = next()
    console.log('CHECKPOINT 2')
    return next()
}
