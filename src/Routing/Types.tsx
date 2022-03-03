export type Callback = () => Promise<React.ReactNode>;

export type Middleware = (next: Callback) => Promise<React.ReactNode>
