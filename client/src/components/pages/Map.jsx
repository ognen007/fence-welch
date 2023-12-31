import React, { useState, useRef, useEffect } from "react";import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import osm from "../../osm-providers.js";
import useGeoLocation from "../../hooks/useGeoLocation.jsx";
import MapIcon from "../../img/home.png";
import HouseIcon from "../../img/home-house-silhouette-icon-building--public-domain-pictures--20.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawingParcel } from "../../app/drawingParcelSlice.js";
import { setScreenshotData } from "../../app/screenshotSlice.js";
import CloseLogo from "../../img/close.png";
import html2canvas from "html2canvas";

const markerIcon = new L.Icon({
  iconUrl: MapIcon,
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const houseIcon = new L.Icon({
  iconUrl: HouseIcon,
  iconSize: [40, 40],
});

const Map = () => {
  const [center, setCenter] = useState({ lat: 54.825802, lng: 38.81522 });
  const ZOOM_LEVEL = 18;
  const mapRef = useRef();
  const [polylines, setPolylines] = useState([]);
  const [houseIcon, setHouseIcon] = useState(null);
  const [tileLayerUrlIndex, setTileLayerUrlIndex] = useState(0);
  const [buttonText, setButtonText] = useState("Remove Trees");
  const [polylineText, setPolylineText] = useState("");
  const [capturedData, setCapturedData] = useState("");

  useEffect(() => {
    setHouseIcon(
      new L.Icon({
        iconUrl: HouseIcon,
        iconSize: [40, 40],
      })
    );
  }, []);

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
  
      // Format the polyline information with "Length" and the numerical value
      const formattedInfo = `Length: ${length.toFixed(2)}`;
  
      // Append the formatted information to the state
      setPolylineText((prevText) => prevText + formattedInfo + "\n");
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

  const navigate = useNavigate();

  const extractEventData = (event) => {
    const textAreaValue = event.target.value;

    return textAreaValue;
  };

  const dispatch = useDispatch();


  const handleSubmitData = async (event) => {
    event.preventDefault();
  
    if (!polylineText) {
      alert('Please draw a polyline');
      return;
    }

    try {
      // Capture screenshot data
      const capturedData = await captureScreenshot();
      console.log("Type of SS capturedData:", typeof capturedData); // Log the type
  
      dispatch(setScreenshotData(capturedData)); // Dispatch the action
  
      dispatch(setDrawingParcel(polylineText));
      
      navigate("/submit");
    } catch (e) {
      console.error(e);
    }
  };
  
  const captureScreenshot = async () => {
    const mapElement = document.getElementById("map-container-main");
  
    if (!mapElement) {
      console.error("Map element not found");
      return null;
    }
  
    console.log("Before html2canvas");
  
    try {
      const screenshot = await html2canvas(mapElement, {
        useCORS: true,
      });
  
      console.log("After html2canvas");
      console.log(screenshot);

      const screenshotData = screenshot.toDataURL("image/jpeg"|":?");
      console.log("Captured screenshot size:", screenshotData.length);
      console.log(screenshotData);
  
      return screenshotData;
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      return null;
    }
  };  

  console.log("Redux State:", useSelector((state) => state));
  
  
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const pushUser = () => {
    navigate("/");
  }
  

  return (
    <div id="map-container-main"  style={{background: "fff"}} className="map-div row">
      <img onClick={() => pushUser()} src={CloseLogo} alt="Close Logo" style={{position: 'absolute', top: 15, left: 15, width:"35px", cursor: "pointer"}}/>
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
                  marker: houseIcon,
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
            Blank Canvas
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
                <p
                style={{color: "#302b63"}}><b>* Edit to correct lenght if needed</b></p>
                <textarea
                  rows="5"
                  cols="50"
                  className="next-submit"
                  value={polylineText}
                  onChange={(e) => setPolylineText(e.target.value)} 
                  required
                />
                <br />
                <br />
                <div className="btn-pos">
                  <button
                    className="next-submit"
                    type="submit"
                  >
                    Submit
                  </button>
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

export default Map;