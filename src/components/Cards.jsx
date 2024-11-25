/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ place }) => {
  const { adventure_title, image, eco_friendly_features, id } = place;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={adventure_title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {adventure_title}
        </h3>

        <ul className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Eco-Friendly Features:</span>
          {eco_friendly_features.map((feature, idx) => (
            <li key={idx} className="list-disc list-inside">
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={`/details/${id}`}
          className="bg-green-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-600"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Cards;
