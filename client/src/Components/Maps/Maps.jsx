import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
};
const { REACT_APP_GOOGLE_API} = process.env

const Maps = (props) => {
  const [state, setState] = useState({
    showingInfoWindow: false, // muestra InfoWindow
    activeMarker: {},
    selectedPlace: {},
  });
  const onMarkerClick = (props, marker, e) =>
  setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
   const onClose = (props) => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  return (
    <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -34.508754829751126,
            lng: -58.52727261548651
          }
        }
      >
        <Marker
          onClick={onMarkerClick}
          name={'Code Bakery Sucursal 1'}
        />
        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>

  );
};

export default GoogleApiWrapper({
  apiKey: `${REACT_APP_GOOGLE_API}`,
})(Maps);
