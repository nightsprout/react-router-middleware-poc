import {Callback, Middleware} from "../Types";

export const Delay: Middleware = async (next: Callback) => {
    const response = await next();

    return new Promise((resolve) => {
        setTimeout(
            () => resolve(response),
            2000
        )
    })
}
