import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import useTitle from "../../public/PageTitle/title";

const DetailsPage = () => {
  useTitle("Details");
  const placeInfo = useLoaderData();
  const {
    adventure_title,
    image,
    category_name,
    short_description,
    adventure_cost,
    booking_availability,
    location,
    duration,
    adventure_level,
    included_items,
    eco_friendly_features,
    max_group_size,
    special_instructions,
  } = placeInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={image}
          alt={adventure_title}
          className="w-full h-[500px] object-cover"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {adventure_title}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Category: {category_name}
          </p>
          <p className="text-gray-700 mb-4">{short_description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Details</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <strong>Cost:</strong> ${adventure_cost}
                </li>
                <li>
                  <strong>Availability:</strong> {booking_availability}
                </li>
                <li>
                  <strong>Location:</strong> {location}
                </li>
                <li>
                  <strong>Duration:</strong> {duration}
                </li>
                <li>
                  <strong>Level:</strong> {adventure_level}
                </li>
                <li>
                  <strong>Max Group Size:</strong> {max_group_size} people
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Eco-Friendly Features
              </h3>
              <ul className="mt-2 space-y-2">
                {eco_friendly_features.map((feature, idx) => (
                  <li key={idx} className="list-disc list-inside text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800">
              Included Items
            </h3>
            <ul className="mt-2 space-y-2">
              {included_items.map((item, idx) => (
                <li key={idx} className="list-disc list-inside text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Special Instructions
            </h3>
            <ul className="mt-2 space-y-2">
              {special_instructions.map((instruction, idx) => (
                <li key={idx} className="list-disc list-inside text-gray-700">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleTalkWithExpert}
            className="btn text-2xl mb-6 bg-gradient-to-r from-purple-500 to-green-500 text-white"
          >
            Talk with Expert
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Consultation Time
            </h3>
            <p className="text-gray-600">
              Our experts are available from <strong>10:00 AM</strong> to{" "}
              <strong>8:00 PM</strong>. Please try again during these hours.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
