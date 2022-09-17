import { WeatherData } from "../interfaces/WeatherData";

export const DetailsTable = ({
  data: { humidity, feels, visibility, pressure, longitude, latitude, windSpeed},
}: {data: WeatherData}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Humedad:</th>
          <td id="humidity">{humidity}</td>
        </tr>
        <tr>
          <th>Grados:</th>
          <td id="feels">{feels}</td>
        </tr>
        <tr>
          <th>Visibilidad:</th>
          <td id="visibility">{visibility}</td>
        </tr>
        <tr>
          <th>Presión:</th>
          <td id="pressure">{pressure}</td>
        </tr>
        <tr>
          <th>Longitud:</th>
          <td id="longitude">{longitude}</td>
        </tr>
        <tr>
          <th>Latitud:</th>
          <td id="latitude">{latitude}</td>
        </tr>
        <tr>
          <th>Viento:</th>
          <td id="windSpeed">{windSpeed}</td>
        </tr>
      </tbody>
    </table>
  );
};
