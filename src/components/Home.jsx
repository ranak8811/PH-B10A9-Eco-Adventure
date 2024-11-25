import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import Heading from "./Heading";
import useTitle from "../../public/PageTitle/title";
import { useEffect, useState } from "react";

import PopularPlaceCard from "./PopularPlaceCard";
import RecomendedCards from "./RecomendedCards";

const Home = () => {
  useTitle("Home");
  const allPlaces = useLoaderData();
  const [cards, setCards] = useState([]);
  const [popularPlaces, setPopularPlaces] = useState([]);

  useEffect(() => {
    fetch("recomendPlace.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  useEffect(() => {
    fetch("/popularPlace.json")
      .then((response) => response.json())
      .then((data) => setPopularPlaces(data));
  }, []);

  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <section className="my-12">
        <div>
          <Heading
            title={"Embark on Your Next Eco-Adventure"}
            subtitle={
              "Discover a world of sustainable adventure. Our eco-friendly experiences are designed to minimize your impact on the environment while maximizing your adventure. From thrilling mountain treks to serene ocean dives, we offer a range of options to suit every traveler's taste. Join us on a journey that combines excitement, sustainability, and unforgettable memories."
            }
          ></Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {allPlaces.map((place, idx) => (
            <Cards key={idx} place={place}></Cards>
          ))}
        </div>
      </section>

      <section className="my-12">
        <div>
          <Heading
            title={"Recomended For You"}
            subtitle={"I hope you find these recommendations enjoyable!!!"}
          ></Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <RecomendedCards card={card}></RecomendedCards>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div>
          <Heading
            title={"Popular Places to Visit"}
            subtitle={"You must visit these places before anywhere else!!!"}
          ></Heading>
        </div>

        <div className="min-h-screen space-y-4 bg-gray-100 py-12">
          {popularPlaces.map((place) => (
            <PopularPlaceCard key={place.id} place={place}></PopularPlaceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
