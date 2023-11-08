import Weather from "../components/Weather";

const WeatherApp = ({ fetchData }) => {
  return (
    <main>
      <div className="absolute left-[-191px] top-[300px] h-[250px] w-[250px] rounded-full bg-primary-500 blur-[175px] "></div>
      <div className="absolute right-[-199px] top-[150px] h-[250px] w-[250px] rounded-full bg-primary-500 blur-[175px] "></div>
      <Weather data={fetchData} />
    </main>
  );
};

export default WeatherApp;
