import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function MyMaps({ location }) {
  const position = [location.lat, location.lon];
  return (
    <MapContainer center={position} zoom={4} scrollWheelZoom={true} id="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}