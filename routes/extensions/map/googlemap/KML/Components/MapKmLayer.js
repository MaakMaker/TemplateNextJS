import React, {Component} from "react";
import {GoogleMap, KmlLayer, withGoogleMap} from "react-google-maps";

const KmlLayerExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{lat: 41.876, lng: -87.624}}
  >
    <KmlLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{preserveViewport: true}}
    />
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class MapKmLayer extends Component {

  render() {
    return (
      <KmlLayerExampleGoogleMap
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `550px`}}/>}
        mapElement={<div style={{height: `100%`}}/>}
      />
    );
  }
}
