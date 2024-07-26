import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [res, setres] = useState([]);
  const base_url = "https://dummyjson.com/products";
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
      <nav className=" flex justify-between px-10 py-5">
        <div>
          <Link
            className="hover:bg-red-400 hover:p-2 hover:rounded-md"
            to={"/"}
          >
            LOGO
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
              to={"home"}
            >
              Home
            </Link>
          </div>
        </div>
      </nav>
      {res.map((data, index) => (
        <li key={index}>{data.title}</li>
      ))}
    </>
  );
};

export default Index;
