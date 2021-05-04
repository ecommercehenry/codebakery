import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import GET_ALL_STORES from "../../Apollo/queries/getAllStores";
import { useQuery } from "@apollo/client";

const mapStyles = {
  width: "63%",
  height: "64%",
  margin: "10px",
};
const { REACT_APP_GOOGLE_API } = process.env;

const Maps = (props) => {
  const { data, loading } = useQuery(GET_ALL_STORES);

  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker) => {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  const onClose = () => {
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
        {data?.getAllStores?.map((elem) => (
          <Marker
            onClick={onMarkerClick}
            name={elem.name}
            position={{ lat: elem.lat, lng: elem.long }}
          />
        ))}
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
