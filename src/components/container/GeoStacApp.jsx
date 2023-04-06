import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";
import MapContainer from "./MapContainer.jsx";
import QueryConsole from "../presentational/QueryConsole.jsx";
import DisplayGeoTiff from "../presentational/DisplayGeoTiff.jsx";
import Sidebar from "../presentational/Sidebar.jsx";

/**
 * GeoStacApp is the parent component for all of the other components of the main app.
 * It imports and creates all of the map and console components and contains the
 * target selector.
 *
 * @component
 */
export default function GeoStacApp(props) {
  const [targetPlanet, setTargetPlanet] = React.useState(props.mapList.systems[4].bodies[0]);

  const [queryString, setQueryString] = React.useState("?");
  const [collectionUrls, setCollectionUrls] = React.useState([]);

  /**
   * Handles target body selection
   * @param {*} value selection event
   */
  const handleTargetBodyChange = (value) => {
    setTargetPlanet(value);
  };

  return (
    <div className="flex col scroll-parent">
      <div className="flex row scroll-parent">
        <div className="flex col">
          <ConsoleAppBar
            target={targetPlanet}
            mapList={props.mapList}
            bodyChange={handleTargetBodyChange}
          />
          <div id="map-area">
            <MapContainer target={targetPlanet.name} astroWebMaps={props.astroWebMaps}/>
          </div>
          <QueryConsole
            queryString={queryString}
            setQueryString={setQueryString}
            collectionUrls={collectionUrls}/>
        </div>
        <Sidebar
          queryString={queryString}
          setQueryString={setQueryString}
          setCollectionUrls={setCollectionUrls}
          target={targetPlanet}
        />
      </div>
      <DisplayGeoTiff />
    </div>
  );
}