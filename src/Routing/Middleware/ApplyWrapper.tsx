import {Callback, Middleware} from "../Types";

export const ApplyWrapper: Middleware = async (next: Callback) => {
    return (
        <div className={'wrapper'}>
            {await next()}
        </div>
    );
}
