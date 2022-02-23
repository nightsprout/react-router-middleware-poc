import {Middleware} from "./Middleware";

export const Check3 = (next: any) => {
    console.log('ERROR!');
    return (
        <p>Error!</p>
    )
}
