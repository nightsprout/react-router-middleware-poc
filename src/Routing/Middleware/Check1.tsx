import {Middleware} from "./Middleware";

export const Check1 = (next: any) => {
    console.log('CHECKPOINT 1')

    return next()
}
