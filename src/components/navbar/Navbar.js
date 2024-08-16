import { Link } from "react-router-dom";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import searchImage from "../../assets/search.svg";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link
          to="/"
          className="text-blue-600 flex items-center justify-center gap-2"
        >
          <p className="md:text-[35px] text-[30px] text-green-600">
            <SiGoogledisplayandvideo360 />
          </p>
          <p className="leading-4 pl-2 border-l border-gray-300 font-bold" >
            Mini <br></br>
            Player
          </p>
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <img
            className="inline h-4 cursor-pointer"
            src={searchImage}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}
