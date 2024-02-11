import React from "react";

const Filter = () => {
  return (
    <div className="navbar rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <p className="text-lg font-bold"> Filter :</p>
      </div>
      <div className="flex justify-left flex-1 px-2 px-10">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              Open Now
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <p>Item 1</p>
              </li>
              <li>
                <p>Item 2</p>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              Price
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <p>Item 1</p>
              </li>
              <li>
                <p>Item 2</p>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              Categories
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <p>Item 1</p>
              </li>
              <li>
                <p>Item 2</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end flex-1 px-2 me-5">
        <div className="flex items-stretch">
          <div className="btn btn-ghost rounded-btn">Clear All</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
