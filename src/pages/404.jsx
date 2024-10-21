import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
        <h1 className="text-3xl font-bold">Opss!</h1>
        <p className="my-5 text-xl">Sorry, an unexpected error has occured</p>
        <p className="my-3">{error.statusText || error.massage}</p>
        <Link className="underline text-blue-500" to="/">Go to back!</Link>
    </div>
  )
}

export default ErrorPage