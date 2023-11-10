import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
// 
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import osm from "../../osm-providers.js";
import useGeoLocation from "../../hooks/useGeoLocation.jsx";
import MapIcon from "../../img/home.png";
import HouseIcon from "../../img/home-house-silhouette-icon-building--public-domain-pictures--20.png";
import { create } from 'zustand';
import { useStore } from 'zustand';


const types = [
  { value: "chainlink", label: "Chain Link" },
  { value: "ornamental", label: "Ornamental" },
  { value: "vinyl", label: "Vinyl" },
  { value: "wood", label: "Wood" },
];

const styles = {
  chainlink: [
    { value: "black-vinyl", label: "Black Vinyl Chain-Link" },
    { value: "galvanized", label: "Galvanized Chain-link" },
  ],
  ornamental: [
    { value: "black-vinyl", label: "Black Vinyl Chain-Link" },
    { value: "galvanized", label: "Galvanized Chain-link" },
  ],
  vinyl: [
    { value: "privacy", label: "Privacy" },
    { value: "ranch-rail", label: "Ranch Rail" },
  ],
  wood: [
    { value: "solid-board", label: "Solid Board" },
    { value: "batten-board", label: "Batten Board" },
    { value: "alternate-board", label: "Alternate Board" },
  ],
};

const heights = {
  chainlink: [
    { value: "four-inches", label: "4'" },
    { value: "five-inches", label: "5'" },
    { value: "six-inches", label: "6'" },
  ],
  ornamental: [
    { value: "four-inches", label: "4'" },
    { value: "five-inches", label: "5'" },
    { value: "six-inches", label: "6'" },
  ],
  vinyl: [
    { value: "four-inches", label: "4'" },
    { value: "five-inches", label: "5'" },
    { value: "six-inches", label: "6'" },
  ],
  wood: [
    { value: "four-inches", label: "4'" },
    { value: "six-inches", label: "6'" },
  ],
};

const colors = {
  chainlink: [{ value: "chain-color", label: "N/A" }],
  ornamental: [{ value: "black", label: "black" }],
  vinyl: [
    { value: "white", label: "White" },
    { value: "almond", label: "Almond" },
  ],
  wood: [
    { value: "cedar", label: "Cedar" },
    { value: "brown-treated-pine", label: "Brown Treated Pine" },
    { value: "green-treated-pine", label: "Green Treated Pine" },
  ],
};

const Drawing = ({setResponse}) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectHeight, setSelectedHeight] = useState(null);
  const [selectColor, setSelectedColor] = useState(null);

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    setSelectedStyle(null);
  };

  const handleHeightChange = (selectedOption) => {
    setSelectedHeight(selectedOption);
  };

//   const navigate = useNavigate();

const formData = {
    selectedType: selectedType?.value || null,
    selectedStyle: selectedStyle?.value || null,
    selectHeight: selectHeight?.value || null,
    selectColor: selectColor?.value || null,
    email: document.getElementById("email").value || null,
    firstName: document.getElementById("first-name").value || null,
    streetAddress: document.getElementById("street-address").value || null,
  };

  console.log("Form Data:", formData);

  return (
    <div style={{ marginLeft: "40px", marginTop: "40px" }}>
      <form>
        <div className="sm:col-span-4">
          <label className="main-label block text-sm font-medium leading-6 text-gray-900">
            STEP 1 - PERSONAL DATA
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              autoComplete="email"
              className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <br />
        <br />
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Full Name"
            className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <br />
        <br />
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            placeholder="William Street 25 NY"
            autoComplete="street-address"
            className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <br />
        <br />
        <label htmlFor="type-dropdown">STEP 2 - CHOOSE YOUR FENCE</label>

        <Select
          className="input-group"
          id="type-dropdown"
          name="type-dropdown"
          options={types}
          value={selectedType}
          onChange={handleTypeChange}
          placeholder="Select"
          required
        />
        <br />
        <br />
        <Select
          className="input-group"
          id="style-dropdown"
          name="style-dropdown"
          options={styles[selectedType?.value] || []}
          value={selectedStyle}
          onChange={(selectedOption) => setSelectedStyle(selectedOption)}
          placeholder="Select"
          required
        />
        <br />
        <br />
        <Select
          className="input-group"
          id="style-dropdown"
          name="style-dropdown"
          options={heights[selectedType?.value] || []}
          value={selectHeight}
          onChange={(selectedOption) => handleHeightChange(selectedOption)}
          placeholder="Select"
          required
        />
        <br />
        <br />
        <Select
          className="input-group"
          id="style-dropdown"
          name="style-dropdown"
          options={colors[selectedType?.value] || []}
          value={selectColor}
          onChange={(selectedOption) => setSelectedColor(selectedOption)}
          placeholder="Select"
          required
        />
        <br />
        <br />
          <input
          onClick={submitData}
            className="next-submit"
            type="button"
            value="submit"
          />
      </form>
    </div>
  );
};

// 

const markerIcon = new L.Icon({
    iconUrl: MapIcon,
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  
  const initialHouseIcon  = new L.Icon({
    iconUrl: HouseIcon,
    iconSize: [40, 40],
  });
  
  const Map = () => {
    const [center, setCenter] = useState({ lat: 54.825802, lng: 38.81522 });
    const ZOOM_LEVEL = 18;
    const mapRef = useRef();
    const [polylines, setPolylines] = useState([]);
    // const [housIcon, setHousIcon] = useState(null);
    const [tileLayerUrlIndex, setTileLayerUrlIndex] = useState(0);
    const [buttonText, setButtonText] = useState("Remove Trees");
  
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
  
        // Format the polyline information and coordinates
        const formattedInfo = `Polyline Length: ${length.toFixed(
          2
        )} feet\nCoordinates: ${latlngs
          .map((coord) => `Lat: ${coord.lat}, Lng: ${coord.lng}`)
          .join("\n")}\n\n`;
  
          useStore.setState((state) => ({
            polylineText: state.polylineText + formattedInfo,
          }));        
      }
  
      return e.layer.toGeoJSON();
    };
  
    const calculateShapeLength = (latlngs) => {
      let totalDistance = 0;
      for (let i = 1; i < latlngs.length; i++) {
        totalDistance += latlngs[i - 1].distanceTo(latlngs[i]) * 3.28084;
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
  
    const toggleTileLayer = () => {
      // Toggle between different tile layer URLs and update the button text
      if (tileLayerUrlIndex === 0) {
        setTileLayerUrlIndex(1);
        setButtonText("Add Trees");
      } else {
        setTileLayerUrlIndex(0);
        setButtonText("Remove Trees");
      }
    };
  
    const toggleCanvas = () => {
      // Toggle between different tile layer URLs and update the button text
      if (tileLayerUrlIndex === 0 || tileLayerUrlIndex === 1) {
        setTileLayerUrlIndex(2);
      } else {
        setTileLayerUrlIndex(1);
      }
    };
  
    // const navigate = useNavigate();
  
    const extractEventData = (event) => {
      const textAreaValue = event.target.value;
  
      return textAreaValue;
    };
  
    const handleSubmitData = async (event) => {
      event.preventDefault();
  
      const eventData = await extractEventData(event);
    //   await navigate("/submit");
    };
  
    return (
      <div className="map-div row">
        <div className="col text-center">
          <div className="map-container col">
            <MapContainer
              className="map"
              center={center}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
            >
              <FeatureGroup>
                <EditControl
                  position="topright"
                  draw={{
                    rectangle: false,
                    circle: true,
                    circlemarker: true,
                    marker: initialHouseIcon,
                    polyline: true,
                    polygon: false,
                  }}
                  onCreated={_created}
                />
              </FeatureGroup>
              <TileLayer
                url={osm.maptiler.url[tileLayerUrlIndex]}
                attribution={osm.maptiler.attribution}
              />
            </MapContainer>
          </div>
        </div>{" "}
        <br />
        <div className="map-container2 row my-4">
          <div className="elements">
            <button className="locate-btn" onClick={showMyLocation}>
              Locate Me
            </button>
  
            <button className="locate-btn" onClick={toggleTileLayer}>
              {buttonText}
            </button>
  
            <button className="locate-btn" onClick={() => toggleCanvas()}>
              Toggle Canvas
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col text-center">
            <div>
              <div className="input-row">
              <form onSubmit={handleSubmitData}>
                  <textarea
                    rows="5"
                    cols="50"
                    className="next-submit"
                    value={polylineText}
                    onChange={(e) => useStore.setState({ polylineText: e.target.value })} 
                  />
                  <br />
                  <br />
                  <div className="btn-pos">
                    <input
                      onClick={handleSubmitData}
                      className="next-submit"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  };


// 

const SubmitForm = (props) => {
  const polylineText = useStore((state) => state.polylineText);
  
  useEffect(() => {
    console.log('Map:', polylineText);
  }, [polylineText]);

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>Map: {polylineText}</p>
    </div>
  );
};


export default Drawing;
