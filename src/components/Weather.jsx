import { useState, useEffect } from "react";
import AppClicked from "./Application/AppClicked";
import AppUnclicked from "./Application/AppUnclicked";
import NavbarApp from "./NavbarApp";
import Loading from "./Loading";

const Weather = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
              <AppClicked onClick={() => setIsClicked(false)} />
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
