/* eslint-disable react/prop-types */
import { useContext } from "react";
import useTitle from "../../public/PageTitle/title";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  useTitle("User Profile");
  const { user } = useContext(AuthContext);

  const { email, displayName, photoURL } = user;

  return (
    <div className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
          Welcome, {displayName || "User"}!
        </h1>
        <p className="text-white text-2xl mt-4">
          Here is your profile information.
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="flex justify-center mb-4">
          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        <div className="text-center space-y-4">
          <div>
            <p className="text-lg font-semibold text-gray-700">Name:</p>
            <p className="text-gray-600">{displayName || "Not Available"}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">Email:</p>
            <p className="text-gray-600">{email || "Not Available"}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to={"/updateProfile"}>
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
