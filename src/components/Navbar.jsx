import { Link } from "react-router-dom";
import BGHEADER from "../assets/backgroundHeader.mp4";
import icon from "../assets/icon.png";
export default function Navbar() {
  return (
    <div className="text-sky-100 text-center bg-green-800  border-b-2 border-green-800">
      <video
        src={BGHEADER}
        autoPlay
        muted
        loop
        className="w-full h-[25rem] object-cover object-center"
      ></video>
      <div className="flex-1 flex justify-center items-center pt-4">
        <div className="flex items-center">
          <img src={icon} alt="Icone" className="w-16 h-16" />
          <a href="/" className="btn btn-ghost text-4xl max-[776px]:text-4xl">
            Code Nature
          </a>
        </div>
      </div>
      <div className="navbar-center pt-6 lg:flex lg:justify-evenly pb-10 ">
        <ul className="menu menu-horizontal px-1 gap-48 max-[776px]:gap-6">
          <li>
            <Link
              to="/CardList"
              className="bg-green-950 hover:bg-green-600 hover:bg-opacity-40 hover:scale-125 border-green-600 border-2 hover:border-green-950"
            >
              Parcs
            </Link>
          </li>
          <li>
            <Link
              to="/flowers"
              className="bg-green-950 hover:bg-green-600 hover:bg-opacity-40 hover:scale-125 border-green-600 border-2 hover:border-green-950"
            >
              Fleurs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="bg-green-950 hover:bg-green-600 hover:bg-opacity-40 hover:scale-125 border-green-600 border-2 hover:border-green-950"
            >
              A propos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
