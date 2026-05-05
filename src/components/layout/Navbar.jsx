import { Link } from "react-router-dom";
import { Button } from "../common/button";
import { FaGlobe, FaSearch } from "react-icons/fa";

const navItems = [
  { name: "Cryptocurrencies", path: "/" },
  { name: "Individuals", path: "/individuals" },
  { name: "Businesses", path: "/businesses" },
  { name: "Institutions", path: "/institutions" },
  { name: "Developers", path: "/developers" },
  { name: "Companies", path: "/companies" },
];


function Navbar() {
  return (
    <>
    <nav className="w-full border-b border-[#E9E9E9] flex h-18 justify-between px-10 fixed  bg-white mb-30">
        <div className="flex items-center gap-2 my-0">
          <img src="/coinbase_logo.png" alt="logo" className="h-10 w-10"/>
        </div>
      <ul className=" flex items-center gap-15 font-semibold text-[18px]">
        {navItems.map((item, index) => (
          <li key={index} className="hover:bg-gray-100 w-full p-3 rounded-4xl">
            <a
              href={item.path}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 font-semibold">
        <div className="h-10 w-10 bg-gray-100  hover:bg-gray-200 rounded-4xl flex justify-center items-center"><FaSearch/></div>
        <div className="h-10 w-10 bg-gray-100 hover:bg-gray-200 rounded-4xl flex justify-center items-center"><FaGlobe/></div>
        <Link to="/signup"><Button variant="gray" label="Sign up"  rounded="large" size="medium"></Button></Link>
        <Link to="/signin"><Button variant="blue" label="Sign in" rounded="large" size="medium"></Button></Link>
      </div>
    </nav>

    </>
  )
}

export default Navbar