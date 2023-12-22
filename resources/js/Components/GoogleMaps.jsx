import React from "react";
import GoogleMapReact from 'google-map-react';


export default function GoogleMaps() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div className='w-full h-full'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
     
    </GoogleMapReact>
  </div>
  )
}