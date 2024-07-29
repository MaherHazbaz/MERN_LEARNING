import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [res, setres] = useState([]);
  const base_url = "https://dummyjson.com/products";
  const [search, setsearch] = useState("");

  

  return (
    <>
      <div></div>
      <div>
        <nav className="bg-gray-500  text-white  flex justify-between px-10 py-5 from-neutral-400">
          <div>
            <Link
              className="hover:bg-red-400 hover:p-2 hover:rounded-md font-bold fill-indigo-50"
              to={"/"}
            >
              <button>Home</button>
            </Link>
          </div>
          <div className=" flex space-x-15">
            <div>
              <Link
                className=" hover:bg-red-400 hover:p-2 hover:rounded-md flex justify-between px-6 "
                to={"/about"}
              >
                About
              </Link>
            </div>
            <div>
              <Link
                className=" hover:bg-red-400 hover:p-2 hover:rounded-md  "
                to={"/contact"}
              >
                Contact
              </Link>
              <Link
                className="hover:bg-red-400 hover:p-2 hover:rounded-md px-5"
                to={"/home"}
              >
                Gestures
              </Link>
            </div>
          </div>
        </nav>
        <br />
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      </div>
      
    </>
  );
};

export default Home;
