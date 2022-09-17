import { WeatherData } from "../interfaces/WeatherData";

export const DegreeSection = ({
  data: { temperature, description, icon },
}: {
  data: WeatherData;
}) => {
  return (
    <>
      <section className="text-5xl font-bold text-white">
        <span className="text-yellow-500" id="temperature">
          {temperature}
        </span>
        °C
      </section>
      <section>
        <img id="iconImg" src={icon} />
      </section>
      <section
        className="font-bold uppercase text-xl text-white mb-6"
        id="description"
      >
        {description}
      </section>
    </>
  );
};
