import {
  User,
  Layers,
  Settings,
  Wallet
} from "lucide-react";
import { Button } from "../common/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Profile",
    path: "/me",
    icon: User,
  },
  {
    name: "Manage NFTs",
    path: "/manage-nfts",
    icon: Layers,
  },
  {
    name: "Account",
    path: "/account",
    icon: Settings,
    badge: 1, 
  },
  {
    name: "Wallets",
    path: "/wallets",
    icon: Wallet,
  },
];


function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white p-6 mt-15 py-10 flex flex-col gap-7">
      <div> 
        <Button label={<span className="font-semibold flex gap-3 justify-content items-center" > <span><FaArrowLeft/></span> <span>Back</span> </span>} rounded="large"/>
      </div>

      <ul className="space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link to={item.path}> <li
              key={index}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-700" />
                <span className="text-gray-800 font-medium">
                  {item.name}
                </span>
              </div>

              {/* Badge */}
              {item.badge && (
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  )
}

export default Sidebar