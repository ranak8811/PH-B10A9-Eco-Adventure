import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { HiEyeOff } from "react-icons/hi";
import toast from "react-hot-toast";
import useTitle from "../../public/PageTitle/title";

const Login = () => {
  useTitle("Login");
  const { loginUsingGoogle, setUser, loginRegisteredUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem("resetEmail", email);

    loginRegisteredUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success(
          `${result.user.displayName} is logged in with email and password`
        );
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    loginUsingGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`${result.user.displayName} logged in with Google`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(error);
      });
  };

  return (
    <div className="min-h-[calc(100vh-70px)] bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Welcome Back <br /> Login Here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Write your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2/3 transform -translate-y-1/2 right-3 cursor-pointer text-gray-600"
            >
              {showPassword ? <HiEyeOff size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>

          <div className="text-right">
            <Link
              to="/auth/forgotPassword"
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Sign In
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent w-full py-3 mt-4 font-semibold rounded-lg transition duration-300 flex items-center justify-center border"
          >
            <span className="text-3xl mr-3">
              <FcGoogle></FcGoogle>
            </span>
            <span>Sign In with Google</span>
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">
          <p>
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-purple-600 font-medium hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
