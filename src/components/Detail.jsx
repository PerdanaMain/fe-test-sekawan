import React from "react";

const Detail = ({ restaurant }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary w-full bg-blue-700 hover:bg-blue-800"
        style={{ backgroundColor: "#002b56" }}
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Learn More
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">{restaurant.name}</h3>
          <img
            src={
              "https://restaurant-api.dicoding.dev/images/medium/" +
              restaurant.pictureId
            }
            alt="Shoes"
            className="w-full h-48 object-cover"
          />
          <div className="modal-action">
            <form method="dialog">
              {/* Restaurant details */}
              <p className="text-gray-700 mb-4">{restaurant.description}</p>

              {/* Rating stars */}
              <div className="flex items-center mb-4">
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
                <p className="ml-2 text-gray-700">{restaurant.rating}</p>
              </div>

              {/* Close button */}
              <button
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Detail;
