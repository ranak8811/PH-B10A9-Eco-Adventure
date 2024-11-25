/* eslint-disable react/prop-types */

import toast from "react-hot-toast";

const RecomendedCards = ({ card }) => {
  const { title, image, description, buttonText, price } = card;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative group">
      <img
        src={image}
        alt="Image description"
        className="w-full h-48 object-cover animate__animated hover:animate__bounceOut"
      />
      <div className="p-6 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-200">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-white">{price}</p>

          <button
            onClick={() => {
              toast.success(`A trip has been booked for you in ${title}`);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecomendedCards;
