import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="font-happyMonkey flex flex-col h-screen justify-center items-center text-white">
      <h1 className="text-4xl mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-lg text-gray-400 hover:underline"
      >
        Back to Home
      </Link>
    </div>
  )
}
export default NotFound
