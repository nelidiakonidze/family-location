import React from "react";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import data from "../data.json";
import { useParams } from "react-router-dom";

// interface MapProps {
//   latLong: string;
// }

const Map = (props: any) => {
  //  const position = { lat: 41.72678, lng: 1.82067 };

  const { id } = useParams();
  return (
    <div>{id}</div>
    // <LeafletMap center={position} zoom={13}>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   <Marker position={position}>
    //     <Popup>
    //       A pretty CSS3 popup.
    //       <br />
    //       Easily customizable.
    //     </Popup>
    //   </Marker>
    // </LeafletMap>
  );
};
export default Map;
