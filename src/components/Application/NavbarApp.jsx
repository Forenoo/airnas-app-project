import React from "react";
import { Link } from "react-router-dom";

const NavbarApp = ({ dataNavbar, isButton, onClick }) => {
  const { country, city } = dataNavbar || {};
  return (
    <nav className="container relative flex h-[100px] items-center justify-between">
      {/* Navbar Logo */}
      <Link to="/weather">
        <div className="flex items-center gap-[10px]">
          <img
            src="/airnaslogo.png"
            alt="Airnas"
            className="h-[50px] w-[50px]"
          />
          <h1 className="text-[24px] font-bold">Airnas</h1>
        </div>
      </Link>

      {isButton ? (
        <button
          onClick={onClick}
          className="cursor-pointer rounded-[5px] bg-primary-500 px-[40px] py-[10px] text-[18px] font-bold text-white hover:bg-primary-600 btn-shadow"
        >
          Kembali
        </button>
      ) : (
        <div className="flex items-center justify-center gap-[12px] ">
          <div className="rounded-full bg-primary-100 p-4">
            <img
              src="/location.svg"
              alt="location"
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-medium text-primary-950">
              Lokasi
            </span>
            <span className="text-[16px] font-bold text-primary-600">
              {country || "Loading"}, {city || "Loading"}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarApp;
