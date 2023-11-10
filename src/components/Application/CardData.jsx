import React from "react";

const CardData = ({ icon, title, data }) => {
  return (
    <div className="w-[193px] rounded-[15px] bg-white">
      <div className="py-[19px] flex gap-[25px] pl-[22px]">
        <img src={icon} alt="icon" />
        <div className="flex flex-col gap-[5px]">
          <p className="text-xs font-semibold text-[#733429]">{title}</p>
          <h6 className="text-2xl font-semibold text-primary-700">{data}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardData;
