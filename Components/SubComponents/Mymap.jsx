import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mymap = () => {
  return (
    <MapContainer
    //   center={[35.6892, 51.389]}
          center={[35.6895, 139.6917]}
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      {/* <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>, &copy; <a href="https://carto.com/">CARTO</a>'
      /> */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>, &copy; <a href="https://carto.com/">CARTO</a>'
      />

      <Marker position={[35.6892, 51.389]}>
        <Popup>Tehran</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mymap;
