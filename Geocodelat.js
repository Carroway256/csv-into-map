import Geocode from "react-geocode";
import React from "react";
import { MapContainer } from "./MapContainer";
import "./MapContainer.css";

export default function Geocodelat(props) {
  var cordinates = [];
  if (props.cattegoryRow !== "") {
    var addresses = props.addresses;
    var cattegoryRow = props.cattegoryRow;
    Geocode.setApiKey("AIzaSyBTwetdd-MoUInecSbNumYdDWFR0Wm3W1Q");
    addresses.forEach((element) => {
      var cattegory = element[cattegoryRow];
      element.splice(cattegoryRow, 1);
      Geocode.fromAddress(element).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          cordinates.push([lat, lng, cattegory]);
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return (
      <div>
        <MapContainer cordinates={cordinates} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
