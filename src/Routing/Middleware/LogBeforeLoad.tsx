import {Middleware} from "./Middleware";

export const LogBeforeLoad = (next: any) => {
    return (
        <div className={'wrapper'}>
            {next()}
        </div>
    )
}
