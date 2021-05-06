import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import GET_ALL_STORES from "../../Apollo/queries/getAllStores";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const { REACT_APP_GOOGLE_API } = process.env;

const Maps = (props) => {
  const { data } = useQuery(GET_ALL_STORES);

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
    <StyledMapContainer>
      <Map
        className="map"
        google={props.google}
        zoom={14}
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
    </StyledMapContainer>
  );
};

const StyledMapContainer = styled.div`
  margin: 10px;
  .map {
    position: relative !important;
    width: 75vw !important;
    height: 80vh !important;
  }

  @media (max-width: 1200px) {
    .map {
      width: 70vw !important;
    }
  }

  @media (max-width: 1024px) {
    .map {
      width: 65vw !important;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    margin: 0 auto;

    .map {
      margin: 1em auto;
      width: 95vw !important;
      height: 55vh !important;
    }
  }

  /* @media (max-width: 503px) {
    margin:0;
    .map {
      margin: 1em auto;
      width: 100vw !important;
      height: 65vh !important;
    }
  } */
`;

export default GoogleApiWrapper({
  apiKey: `${REACT_APP_GOOGLE_API}`,
})(Maps);
