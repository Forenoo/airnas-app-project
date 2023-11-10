import CardData from "./CardData";
import "../../index.css"

const AppClicked = ({ weatherData }) => {
  const { tp, pr, hu, ws } = weatherData.current.weather || {};
  const { aqius } = weatherData.current.pollution || {};
  
  return (
    <section className="container flex">
      <div className="pt-[18px]">
        <img
          src="/hero.jpeg"
          alt="hero"
          className="absolute left-1/2 top-1/2 h-[480px] w-[915px] -translate-x-1/2 -translate-y-1/2 rounded-[50px]"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 cardShadow">
          <CardData icon="/WindSpeedIcon.svg" title="Wind Speed" data={`${ws}m/s `} />
        </div>
      </div>
    </section>
  );
};

export default AppClicked;
