import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/common/button"
import { Input } from "../components/common/input"
import { FaApple, FaGoogle } from "react-icons/fa6"
import { signUp, saveAuthToken } from "../lib/api"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await signUp({ name, email, password })
      if (response?.token) {
        saveAuthToken(response.token)
      }
      navigate("/user")
    } catch (err) {
      setError(err.message || "Unable to create your account. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black/90 min-h-screen text-white py-5">
      <div className="p-6">
        <img src="/coinbase_logo.png" alt="logo" className="h-10" />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md flex flex-col gap-6">
          <h1 className="text-2xl text-center font-medium">Create your account</h1>
          <p className="text-md text-center font-medium">Access all that Coinbase has to offer with a single account.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col flex-1">
              <label className="text-sm mb-1">Name</label>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                size="medium"
                rounded="large"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm mb-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                size="medium"
                rounded="large"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm mb-1">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Your password"
                size="medium"
                rounded="large"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <Button
              type="submit"
              size="large"
              rounded="large"
              loading={loading}
              label={<span className="mx-40"><p className="font-semibold">Continue</p></span>}
              variant="blue"
            />
          </form>

          <div className="flex items-center">
            <div className="grow h-px bg-gray-700"></div>
            <span className="mx-3 text-sm text-gray-400">OR</span>
            <div className="grow h-px bg-gray-700"></div>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              size="large"
              rounded="large"
              variant="gray"
              label={
                <span className="flex items-center gap-30 justify-center font-semibold">
                  <FaGoogle /> Sign in with Google
                </span>
              }
            />

            <Button
              size="large"
              rounded="large"
              variant="gray"
              label={
                <span className="flex items-center gap-30 justify-center font-semibold">
                  <FaApple /> Sign in with Apple
                </span>
              }
            />
          </div>

          <p className="text-center text-sm">
            Already have an account? <Link to="/signin" className="text-blue-400">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp