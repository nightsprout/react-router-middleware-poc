import {Callback, Middleware} from './Types'
import React from "react";


export const withMiddleware = (element: React.ReactNode, loadingElement: React.ReactNode, middleware: Middleware[] = []) => {
    class HOC extends React.Component<{}, {element: React.ReactNode}> {
        constructor(props: {}) {
            super(props);

            this.state = {
                element: loadingElement
            }
        }

        componentDidMount() {
            let callbacks: Callback[] = [
                async () => {
                    return element;
                }
            ]

            middleware.reverse().forEach((m, i) => {
                callbacks[i + 1] = async () => m(callbacks[i]);
            })

            callbacks[callbacks.length - 1]().then((element) => {
                this.setState({
                    element
                })
            })
        }

        render() {
            return this.state.element;
        }
    }

    return <HOC/>
}
