import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/common/button"
import { Input } from "../components/common/input"
import { GoPasskeyFill } from "react-icons/go"
import { FaApple, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6"
import { signIn, saveAuthToken } from "../lib/api"

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await signIn({ email, password })
      if (response?.token) {
        saveAuthToken(response.token)
      }
      navigate("/user")
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black/90 min-h-screen text-white py-5">
      <div className="p-6">
        <img src="/coinbase_logo.png" alt="logo" className="h-10" />
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-md flex flex-col gap-6">
          <h1 className="text-2xl text-center font-medium">Sign in to Coinbase</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col flex-1">
              <label className="text-sm mb-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                size="medium"
                rounded="large"
                className="text-white"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm mb-1">Password</label>
              <div>
                <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Your password"
                size="medium"
                rounded="large"
                className="text-white"
                />
                <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 inset-e-0 flex items-center p-2.5 text-gray-500 hover:text-blue-600"
                >
                {showPassword ? (
                  <FaEyeSlash className="size-5" />
                ) : (
                  <FaEye className="size-5" />
                )}
              </button>
              </div>
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
                  <GoPasskeyFill /> Sign in with Passkey
                </span>
              }
            />

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
            Don't have an account? <Link to="/signup" className="text-blue-400">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn