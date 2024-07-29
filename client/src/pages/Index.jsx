import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Nav/Sidebar";


const Index = () => {
  const [res, setres] = useState([]);
  const base_url = "https://dummyjson.com/products";
  const [search, setsearch] = useState("");

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(base_url);

        setres(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  const filterSearch = res.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const data = async () => {
      try {
        const res = await axios.get(base_url);
        setres(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);

  return (
    <>
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
              className=" hover:bg-red-400 hover:p-2 hover:rounded-md px-6 "
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
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      {res.map((data, index) => (
        <li key={index}>{data.title}</li>
      ))}
      <div>
        {res.map((data) => (
          <>
            <li>{data.title}</li>
          </>
        ))}
      </div>
      <br />
      <br />
    </>
  );
};

export default Index;
