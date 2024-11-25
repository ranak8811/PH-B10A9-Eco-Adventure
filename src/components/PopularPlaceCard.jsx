/* eslint-disable react/prop-types */

const PopularPlaceCard = ({ place }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-white animate__animated animate__fadeInUp animate__delay-1s">
      <div
        className="relative min-h-screen rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${place.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-6 text-white">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-lg">🇨🇭</span>
              <h3 className="text-lg font-bold">{place.country}</h3>
            </div>
            <div className="text-sm font-light">{place.id} / 04</div>
          </div>

          {/* Footer */}
          <div>
            <h2 className="text-2xl font-bold mb-3">{place.title}</h2>
            <p className="text-sm mb-4">{place.description}</p>
            <div className="flex items-center mb-2 space-x-2">
              <span className="text-yellow-400 text-lg font-bold">
                ★ {place.rating} / 5.00
              </span>
              <span className="text-gray-300 text-sm">
                {place.reviews} Airbnb&apos;s reviewers
              </span>
            </div>
            <div className="flex space-x-2">
              {place.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white text-gray-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPlaceCard;
