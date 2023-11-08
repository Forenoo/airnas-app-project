import React from "react";

const AppUnclicked = ({ onClick }) => {
  return (
    <section className="container absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col leading-tight">
      <h1 className="text-center text-[48px] font-extrabold">
        CEK INFORMASI CUACA <br />
        DI <span className="text-primary-600">DAERAHMU</span>
      </h1>
      <p className="mx-auto mt-[10px] max-w-[650px] text-center text-[16px] text-black opacity-75">
        Cuaca Panas Ekstrem selalu terjadi belakangan hari ini. Temukan data
        mengenai{" "}
        <span className="font-semibold">
          suhu, tingkat polusi udara dan informasi cuaca
        </span>{" "}
        lainnya dengan mudah dan cepat. Tetap mendapatkan data dan informasi
        terbaru dengan kami, <span className="font-semibold">Airnas</span>.
      </p>
      <button
        className="btn-shadow mt-[30px] self-center rounded-[10px] bg-primary-500 px-[34px] py-[9px] text-[16px] font-semibold leading-[160%] text-white transition-all hover:bg-primary-600"
        onClick={onClick}
      >
        Cek Tempatku
      </button>
    </section>
  );
};

export default AppUnclicked;
