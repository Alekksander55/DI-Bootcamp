import { useRouteError } from "react-router-dom"

const ErrorPage = (props) => {
    const error = useRouteError()
    return (
        <div>
        <h1>Oups</h1>
        <p>Something went wrong...</p>
        <h2>404</h2>
        <p>{error.statusText}</p>
        </div>
    )
}

export default ErrorPage