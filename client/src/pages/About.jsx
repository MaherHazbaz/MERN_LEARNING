import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import CustomDropdown from "../components/CustomDropdown";
import CustomButton from "../components/CustomButton";

const About = () => {
  const arr = [{ name: "Maher" }, { name: "Hazbaz" }];
  return (
    <>
      <div></div>
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

      <div>
        <div>
          <div class="grid grid-rows-3 grid-flow-col gap-4 px-4 py-3">
            <div class="row-span-3 ...">
              <CustomInput type={"text"} label={"About"} />
            </div>
            <div class="col-span-2 ...">
              <CustomDropdown data={arr} />
            </div>
            <div class="row-span-2 col-span-2 ...">
              <CustomButton titile={"submit"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
