import React from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

import india from "./topojsons/india.json";
import markers from "./topojsons/markers.json";

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
  const colorScale = scaleLinear().domain([0, 100]).range(["#FFF", "#06F"]);
  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={150}
        height={150}
        projectionConfig={{ scale: 220 }}
      >
        <ZoomableGroup zoom={1} center={[80, 22]}>
          <Geographies geography={india}>
            {({ geographies }) => {
              return geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { ST_NM } = geo.properties;
                    setTooltipContent(`${ST_NM}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    const { ST_NM } = geo.properties;
                    setStateName(`${ST_NM}`);
                    setShowDistrict(true);
                  }}
                  style={{
                    default: {
                      fill: geo.properties.color || "#D6D6DA",
                      outline: "none",
                      stroke: "black",
                      strokeWidth: "0.05px",
                    },
                    hover: {
                      fill: "forestgreen",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#2E8B57",
                      outline: "none",
                    },
                  }}
                />
              ));
            }}
          </Geographies>
          {Object.keys(markers).map((key) => {
            return (
              <Marker coordinates={markers[key]}>
                <text className="stcode">{key}</text>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
