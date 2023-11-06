import React from "react";

const NavbarApp = ({ dataNavbar }) => {
  return (
    <nav className="container flex h-[100px] items-center justify-between">
      {/* Navbar Logo */}
      <div className="flex items-center gap-[10px]">
        <img src="/airnaslogo.png" alt="Airnas" className="h-[50px] w-[50px]" />
        <h1 className="text-[24px] font-bold">Airnas</h1>
      </div>

      {/* Navbar Location */}
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
            {dataNavbar?.country || "Loading"}, {dataNavbar?.city || "Loading"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
