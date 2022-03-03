import {Callback, Middleware} from "../Types";

export const ErrorMessage: Middleware = async (next: Callback) => {
    return (
        <p>Error!</p>
    )
}
