import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { HiEyeOff } from "react-icons/hi";
import useTitle from "../../public/PageTitle/title";

const Register = () => {
  useTitle("Register");
  const { registerNewUser, setUser, updateUserProfile, loginUsingGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const validatePassword = (password) => {
    const errors = {};
    if (password.length < 6) {
      errors.length = "Password must be at least 6 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      errors.uppercase = "Password must include at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      errors.lowercase = "Password must include at least one lowercase letter";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const photo = formData.get("photo");

    const passwordErrors = validatePassword(password);

    if (name.length < 6) {
      setError({ name: "Name must be at least 6 characters long" });
      return;
    }

    if (Object.keys(passwordErrors).length > 0) {
      setError(passwordErrors);
      return;
    }

    registerNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("resetEmail", result.user.email);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success(
              `Registration successful! for ${result.user.displayName}`
            );
            navigate("/");
          })
          .catch((err) => {
            toast.error(
              "Error updating profile. Please try again.",
              err.message
            );
          });
      })
      .catch((err) => {
        toast.error(`Registration failed: ${err.message}`);
      });
  };

  const handleGoogleSignIn = () => {
    loginUsingGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`${result.user.displayName} is logged in with Google`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(`Google Sign-In failed: ${err.message}`);
      });
  };

  return (
    <div className="min-h-[calc(100vh-70px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-red-500 text-xs">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2/3 transform -translate-y-1/2 right-3 cursor-pointer text-gray-600"
            >
              {showPassword ? <HiEyeOff size={20} /> : <FaEye size={20} />}
            </span>
          </div>
          {error.length && (
            <label className="label text-red-500 text-xs">{error.length}</label>
          )}
          {error.uppercase && (
            <label className="label text-red-500 text-xs">
              {error.uppercase}
            </label>
          )}
          {error.lowercase && (
            <label className="label text-red-500 text-xs">
              {error.lowercase}
            </label>
          )}

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent w-full py-3 mt-4 font-semibold rounded-lg transition duration-300 flex items-center justify-center border"
          >
            <span className="text-3xl mr-3">
              <FcGoogle />
            </span>
            Sign In with Google
          </button>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link to={"/auth/login"} className="text-red-500">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
