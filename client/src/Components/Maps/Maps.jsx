import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "63%",
  height: "64%",
  margin: '10px'
};
const { REACT_APP_GOOGLE_API } = process.env;

const Maps = (props) => {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker, e) => {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  const onClose = (props) => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  return (
    <div>
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -34.508754829751126,
          lng: -58.52727261548651,
        }}
      >
        <Marker
          onClick={onMarkerClick}
          name={"Code Bakery Sucursal Unicenter"}
          position={{ lat: -34.508754829751126, lng: -58.52727261548651 }}
        />
        <Marker
          onClick={onMarkerClick}
          name={"Code Bakery Sucursal Norcenter"}
          position={{ lat: -34.5144336270837, lng: -58.52265434383605 }}
        />
        <Marker
          onClick={onMarkerClick}
          name={"Code Bakery Sucursal Hipolito Yrigoyen"}
          position={{ lat: -34.50485009641575, lng: -58.5338863866175 }}
        />
        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{state?.selectedPlace?.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: `${REACT_APP_GOOGLE_API}`,
})(Maps);
