import { useEffect, useState } from "react";
import { WeatherData } from "../interfaces/WeatherData";
import { DegreeSection } from "./DegreeSection";
import { DetailsTable } from "./DetailsTable";
import { Location } from "./Location";

export const WeatherContainer = ({
  fetchedData,
  error,
}: {
  fetchedData: any;
  error: string;
}) => {
  const [weather, setWeather] = useState<WeatherData>({
    city: "",
    country: "",
    temperature: 0,
    description: "",
    icon: "",
    humidity: "",
    feels: "",
    visibility: "",
    pressure: "",
    longitude: "",
    latitude: "",
    windSpeed: "",
  });

  useEffect(() => {
    if (fetchedData)
      setWeather({
        city: fetchedData.name,
        country: fetchedData.sys.country,
        temperature: Math.floor(fetchedData.main.temp - 273),
        description: fetchedData.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`,
        humidity: fetchedData.main.humidity + "%",
        feels: Math.floor(fetchedData.main.feels_like - 273) + "°C",
        visibility: fetchedData.visibility + "m",
        pressure: fetchedData.main.pressure + "hPa",
        longitude: fetchedData.coord.lon,
        latitude: fetchedData.coord.lat,
        windSpeed: fetchedData.wind.speed + "m/s",
      });
  }, [fetchedData]);

  return (
    <main className="w-96 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg">
      {error === "" ? ( <div className="flex w-full items-center flex-col p-8">
        <Location data={weather} />
        <DegreeSection data={weather} />
        <DetailsTable data={weather} />
      </div>) : (
        <div className="flex justify-center items-center h-56 text-white font-bold text-2xl p-4 text-center">
            {error}
        </div>
      )}
     
    </main>
  );
};
