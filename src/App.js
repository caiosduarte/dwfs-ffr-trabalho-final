import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

import { CurrentMap } from './components/CurrentMap';
import { MarkerLabel } from './components/MarkerLabel';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  /*
  render() {
    return (      
      <CurrentMap google= {this.props.google}>
        <Marker OnClick= {this.onMarkerClick} />
      </CurrentMap>      
    );
  }
  */
  render() {
    return (
      <CurrentMap
      google={this.props.google}
      zoom={14}
      initialCenter={{ lat: -1.2884, lng: 36.8233 }}
      >
      <MarkerLabel
      onClick={this.onMarkerClick}
      name={'Kenyatta International Convention Centre'}
      />
      <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
      >
      <div>
      <h4>{this.state.selectedPlace.name}</h4>
      </div>
      </InfoWindow>
      </CurrentMap>
    );
  }


}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD21roOt3t92rTBywi3evpWw-gxLLlqoMg'
})(MapContainer);