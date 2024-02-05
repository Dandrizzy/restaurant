import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,

} from "react-leaflet";

// import styles from "./Map.module.css";
import { useState } from "react";

function Map() {

  const [mapPosition] = useState([40, 0]);




  return (
    <div className=" h-[30rem] overflow-hidden" >

      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
      // className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={mapPosition}
        >
          <Popup>
            <span>🥰</span> <span>name</span>
          </Popup>
        </Marker>



      </MapContainer>
    </div>
  );
}

export default Map;
