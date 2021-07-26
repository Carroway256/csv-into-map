import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./MapContainer.css";
export class MapContainer extends Component {
  cordinates = this.props.cordinates;

  renderMarkers = (cordinates) => {
    const mapColors = [
      "https://maps.google.com/mapfiles/ms/icons/pink-dot.png",
      "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
      "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
      "https://maps.google.com/mapfiles/ms/icons/purple-dot.png",
      "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
    ];
    var colorsCounter = 0;
    var lastCategory = "xd";

    var iconColour = "https://maps.google.com/mapfiles/ms/icons/pink-dot.png";
    return this.cordinates.map((cordinates, index) => {
      if (cordinates[2] === lastCategory) {
      } else {
        iconColour = mapColors[colorsCounter];
        lastCategory = cordinates[2];
        colorsCounter = colorsCounter + 1;
      }
      return (
        <Marker
          icon={iconColour}
          id={index}
          name="Current location"
          position={{ lat: cordinates[0], lng: cordinates[1] }}
        />
      );
    });
  };
  render() {
    setTimeout(function () {}, 1000);
    const mapstyle = {
      width: "85vw",
      height: "70%",
      marginLeft: "6vw",
      marginTop: "3vw",
    };
    if (this.cordinates) {
      return (
        <div>
          <Map
            style={mapstyle}
            google={this.props.google}
            zoom={3}
            initialCenter={{
              lat: 20,
              lng: 20,
            }}
          >
            {this.renderMarkers(this.cordinates)}
          </Map>
        </div>
      );
    } else return <div></div>;
  }
}

MapContainer = GoogleApiWrapper({
  apiKey: ApiKey,
})(MapContainer);
