import { useState } from "react";
import AppClicked from "./Application/AppClicked";
import AppUnclicked from "./Application/AppUnclicked";
import NavbarApp from "./Application/NavbarApp";
import Loading from "./Application/Loading";

const Weather = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (isClicked) {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      {isClicked ? (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <NavbarApp
                dataNavbar={data}
                isButton={true}
                onClick={() => setIsClicked(false)}
              />
              <AppClicked weatherData={data} />
            </>
          )}
        </>
      ) : (
        <>
          <NavbarApp
            dataNavbar={data}
            isButton={false}
            onClick={() => setIsClicked(true)}
          />
          <AppUnclicked onClick={() => setIsClicked(true)} />
        </>
      )}
    </>
  );
};

export default Weather;
