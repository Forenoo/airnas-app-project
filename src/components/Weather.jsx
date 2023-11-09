import { useState } from "react";
import AppClicked from "./Application/AppClicked";
import AppUnclicked from "./Application/AppUnclicked";
import NavbarApp from "./NavbarApp";
import Loading from "./Loading";

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
