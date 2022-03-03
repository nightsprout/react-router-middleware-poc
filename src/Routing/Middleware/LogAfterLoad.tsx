import {Callback, Middleware} from "../Types";

export const LogAfterLoad: Middleware = async (next: Callback) => {
    let response = await next()

    console.log('CHECKPOINT 2')

    return response
}
