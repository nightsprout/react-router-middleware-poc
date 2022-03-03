import {Middleware} from "./Middleware";

export const ErrorMessage = (next: any) => {
    // console.log('ERROR!');
    return (
        <p>Error!</p>
    )
}
