import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useTitle from "../../public/PageTitle/title";

const ForgotPassword = () => {
  useTitle("Forgot Password");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("resetEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent. Redirecting to Gmail...");
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((err) => {
        alert("Error sending password reset email: " + err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-70px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg p-6 space-y-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="you@example.com"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition duration-300"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
