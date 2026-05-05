import { Link } from "react-router-dom";
import { Button } from "../common/button";
import { FaBell } from "react-icons/fa6";
import { useState } from "react";

const navItems = [
  { name: "Drops", path: "/drops" },
  { name: "Shop", path: "/shop" },
  { name: "Explore", path: "/explore" },
  { name: "Following", path: "/following" }
];


function NavbarAuth() {
  const [image, setImage] = useState(
    localStorage.getItem("profileImage")
  );
  return (
    <>
    <nav className="w-full border-b border-[#E9E9E9] flex h-13 justify-between px-10 fixed  bg-white mb-30">
        <div className="flex items-center gap-2 my-0 text-blue-500 text-xl font-bold">
          crypto-app <span className="text-sm text-black mt-2 font-semibold">NFT</span> 
        </div>
        <div className="flex justify-center items-center ">
            <input type="text" placeholder="Search..." className="rounded-2xl py-1 px-5 border border-gray-300"/>
        </div>
      <ul className=" flex items-center gap-5 font-semibold text-[16px]">
        {navItems.map((item, index) => (
          <li key={index} className="hover:bg-gray-100 w-full p-2 rounded-4xl">
            <a
              href={item.path}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 font-semibold">
        <div ><FaBell/></div>
        <div className="h-10 w-10"> 
          <img
            src={image}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <Link to="/create"><Button variant="blue" label="Create NFTs" rounded="large" size="medium"></Button></Link>
      </div>
    </nav>

    </>
  )
}

export default NavbarAuth