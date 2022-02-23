import { Middleware } from './Middleware/Middleware'
import React from "react";

export const withMiddleware = (element: React.ReactNode, middleware?: any[]) => {
    class HOC extends React.Component {
        render() {
            let callbacks = [
                () => {
                    return element;
                }
            ]

            middleware?.reverse().forEach((m, i) => {
                callbacks[i + 1] = () => {
                    return m(callbacks[i])
                };
            })

            return callbacks[callbacks.length - 1]()
        }
    }

    return <HOC/>
}
