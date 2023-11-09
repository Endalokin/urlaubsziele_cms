import { MapContainer, TileLayer, SVGOverlay, Polygon, useMap, Marker, Popup } from "react-leaflet";
import getCountry from "./getCountry";
import { useEffect, useState } from "react";

export default function MyMaps({ location, countryCode, color }) {
  const position = [location.lat, location.lon];

  const [thisCountry, setThisCountry] = useState([
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ])
  console.log(countryCode)
  const purpleOptions = { color: `rgb(${color})` }
  useEffect(() => {
    setThisCountry(getCountry(countryCode))
  }, [])
  
  return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={true} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon pathOptions={purpleOptions} positions={thisCountry.geometry} />
    </MapContainer>
  );
}