import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};
// export default class Counter extends React.Component<Props, State> {
export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 9.0765,
         lng: 7.3986
         
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD5GU__WN-hsIaRl2gzdVFpRHK6R9wfYmM'
})(MapContainer);

// export default GoogleApiWrapper(
//   (props) => ({
//     apiKey: props.apiKey
//   }
// ))(MapContainer)


