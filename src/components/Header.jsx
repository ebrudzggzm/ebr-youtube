import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;
    if (text.trim === "") {
      return;
    }
navigate(`/results?search_query=${text}`);

  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link to={'/'} className="flex gap-2 p-3">
        <img src="/youtube.png" alt="logo" className="w-8 h-6" />
        <h1 className="text-2xl max-sm:hidden font-mono">YouTube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          placeholder="Ara.."
          className="group-hover:border-blue-500 group-hover:border border border-transparent bg-black text-white px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500"
          type="text"
        />

        <button className="border-l px-4 text-2xl bg-zinc-800">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 px-3 text-xl cursor-pointer">
        <FaBell />
        <IoMdVideocam />
        <IoPerson />
      </div>
    </header>
  );
};

export default Header;
