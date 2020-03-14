import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import india from './topojsons/india.json';

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
    return (
      <>
        <ComposableMap  data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 220 }}>
          <ZoomableGroup zoom={1} center={[80,22]}>
            <Geographies geography={india}>
              {({ geographies }) =>
                geographies.map(geo => (
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
                    onClick = {() => {
                      const { ST_NM } = geo.properties;
                      setStateName(`${ST_NM}`);
                      setShowDistrict(true);
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "forestgreen",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#2E8B57",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
    );
};

export default MapChart;