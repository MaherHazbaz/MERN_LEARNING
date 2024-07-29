import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropdown";
import image from "../admin/images/tv.jpg";
import Home from "../pages/Home";
const Product = () => {
  const arr = [{ name: "1" }, { name: "2" }, { name: "3" }];

  return (
    <>
      <div className="p-3">Product</div>
      <div className=" p-3 px-0.5 ">
        <CustomDropdown data={arr} />
      </div>
      <div className=" py-10 px-5 text-center  font-semibold ">
        <CustomInput type="text" placeholder={"Enter Your Search"} /> <br />
        <CustomInput type="text" value={"Samsung D Series  TV"} />
        <div className="  border py-6   ">
          <img src={image} className=" w-96" />
        </div>
        <div className="bg-green-600 border-black bg-blend-color-burn px-9 py-5 text-2xl text-white text-center font-bold">
          <button>BUY</button>
        </div>
        <br />
        <div className="bg-orange-500 text-white text-center text-2xl font-bold py-5">
          <button> Add To Cart </button>
        </div>
        <br />
        <div className="font-bold text-2xl">
          <p>Price: 39999 $ </p>
        </div>
        <br />
        <div className="text-blue-400 text-left py-1 px-1">
          <button>Free Delivery</button>
          <br />
          <button>Warranty Policy</button>
          <br />
          <button>10 days Replacement</button>
          <br />
          <button>Secure transaction</button>
          <br />
          <button>Amazon Delivered</button>
        </div>
      </div>

      <div className=" justify-stretch py-11 px-14 ">
        <p className="px-20 py-7 font-bold text-2xl">
          Samsung 108 cm (43 inches) D Series Crystal 4K Vivid Pro Ultra HD
          Smart LED TV UA43DUE77AKLXL (Black)
        </p>
        <br />
        <div className="font-bold  py-3 text-2xl">
          <p>
            Discover interesting contents, apps, and brands <br />
          </p>
        </div>

        <div className="text-2xl text-gray-500">
          <marquee behavior="scroll" direction="right to left">
            Screen Size: 43 Inches . Brand: Samsung . Display Technology : UHD
            Resolution 4K . Refresh Rate: 50 Hz
          </marquee>
        </div>

        <div className=" font-serif font-semibold"></div>
        <div className="text-left space-x space-y-3">
          <li>
            Resolution: 4K Ultra HD (3840 x 2160) Resolution |Refresh Rate : 50
            Hertz
          </li>
          <li>
            Connectivity : 3 Hdmi Ports For Seamless Connectivity With External
            Devices | 1 X Usb-A Usb Ports To Connect Hard Drives Or Other Usb
            Devices |Wi-Fi | Bluetooth | Anynet+ (Hdmi-Cec)| Ethernet (Lan)
            Port| Rf In (Terrestrial / Cable Input / Satellite Input)
          </li>
          <li>Sound: 20W Output- 2CH | Powerful Speakers with Q-Symphony</li>
          <li>
            Display: Crystal Processor 4K | HDR | Support | Mega Contrast | UHD
            Dimming | Contrast Enhancer | Motion Xcelerator | 4K Upscaling |
            Filmmaker Mode
          </li>
          <li>
            Warranty Information :1 Year Standard Warranty + 1 Year additional
            warranty on Panel from the date of purchase
          </li>
        </div>
        <br />

        <div className="text-2xl">
          <marquee behavior="scroll" direction="right to left">
            Exclusive Deal - EMI Options Applicable - Special offers on Credit
            cards - OTT Subscriptions
          </marquee>
        </div>
        <div className="bg-gray-400 w-[20%]  px-4 py-2 text-left font-medium">
          <button> Shipping Address </button>
        </div>
        <br />
        <div className="text-right text-green-600 ">
          <li>89% positive ratings from 5K+ customers</li>
          <li>1K+ recent orders from this brand</li>
          <li>11+ years on Amazon</li>
        </div>
      </div>
    </>
  );
};

export default Product;
