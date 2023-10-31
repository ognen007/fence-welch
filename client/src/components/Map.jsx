import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, FeatureGroup, Marker } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import osm from "../osm-providers.js";
import useGeoLocation from "../hooks/useGeoLocation.jsx";
import MapIcon from "../img/home.png"

const markerIcon = new L.Icon({
  iconUrl: MapIcon,
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46]
});


const Map = () => {
  const [center, setCenter] = useState({ lat: 54.825802, lng: 38.81522 });
  const ZOOM_LEVEL = 18;
  const mapRef = useRef();
  const [polylines, setPolylines] = useState([]);

  const _created = (e) => {
    const shape = e.layer;
    const latlngs = shape.getLatLngs();
    const length = calculateShapeLength(latlngs);

    if (shape instanceof L.Polyline) {
      shape.on("editable:vertex:dragend", () => {
        const updatedPolylines = [...polylines];
        const index = updatedPolylines.findIndex(
          (p) => p.id === shape.options.id
        );
        const updatedLatlngs = shape.getLatLngs();
        const updatedLength = calculateShapeLength(updatedLatlngs);
        updatedPolylines[index] = {
          ...updatedPolylines[index],
          length: updatedLength,
          coordinates: updatedLatlngs,
        };
        setPolylines(updatedPolylines);
      });

      setPolylines((prevPolylines) => [
        ...prevPolylines,
        {
          id: Date.now(),
          length: length,
          coordinates: latlngs,
          layer: shape,
        },
      ]);
    }

    return e.layer.toGeoJSON();
  };

  const calculateShapeLength = (latlngs) => {
    let totalDistance = 0;
    for (let i = 1; i < latlngs.length; i++) {
      totalDistance += latlngs[i - 1].distanceTo(latlngs[i]);
    }
    return totalDistance;
  };

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <div className="row">
      <div className="col text-center">
        <div className="col">
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={_created}
                draw={{
                  rectangle: false,
                  circle: true,
                  circlemarker: true,
                  marker: true,
                  polyline: true,
                  polygon: false,
                }}
              />
            </FeatureGroup>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
            {location.loaded && !location.error && (
              <Marker
                icon={markerIcon}
                position={[location.coordinates.lat, location.coordinates.lng]}
              ></Marker>
            )}
          </MapContainer>
        </div>
      </div>

      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={showMyLocation}>
            Locate Me
          </button>
        </div>
      </div>

      {polylines.map((polyline, index) => (
        <div key={polyline.id}>
          <div className="row">
            <div className="col text-center">
              <p>
                Polyline {index + 1} Length: {polyline.length.toFixed(2)} meters
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p>Coordinates:</p>
              <ul>
                {polyline.coordinates.map((coord, coordIndex) => (
                  <li key={coordIndex}>
                    Lat: {coord.lat}, Lng: {coord.lng}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Map;
