import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Detail from "./components/Detail";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [visibleRestaurants, setVisibleRestaurants] = useState(6);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await axios.get("https://restaurant-api.dicoding.dev/list");
      setRestaurants(res.data.restaurants);
    };

    fetchRestaurants();
  }, []);

  console.log(restaurants);

  const showMore = () => {
    setVisibleRestaurants((prevVisible) => prevVisible + 10);
  };

  return (
    <div className="p-6 rounded-lg">
      <h1 className="text-4xl mb-4 text-gray-800">Restaurants</h1>
      <p className="text-lg text-gray-700 max-w-screen-md">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, tempore
        facilis eaque blanditiis ipsa veritatis delectus sunt cum explicabo
        maxime.
      </p>

      <hr className="my-4 border-t" />
      <Filter />
      <hr className="my-4 border-t border-gray-300" />

      <h1 className="text-4xl mb-4 text-gray-800 my-10 mb-10">
        All Restaurants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.slice(0, visibleRestaurants).map((rest, index) => (
          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-5"
            key={index}
          >
            <div className="card w-96 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
              <figure>
                <img
                  src={
                    "https://restaurant-api.dicoding.dev/images/medium/" +
                    rest.pictureId
                  }
                  alt="Shoes"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                  {rest.name}
                </h2>
                <p className="text-gray-700 mb-4">
                  {rest.description.slice(0, 100)}...
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-gray-700 text-sm mt-2 mb-2">{rest.rating}</p>
                {/* Full-width "Details" button with specified color */}
                <Detail restaurant={rest} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      {visibleRestaurants < restaurants.length && (
        <div className="d-block justify-center text-center">
          <button
            className="btn btn-outline-dark my-10 border border-gray-300 py-2 px-20 text-base"
            onClick={showMore}
            style={{ backgroundColor: "#ffffff" }}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
