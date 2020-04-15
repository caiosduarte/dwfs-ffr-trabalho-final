import React, { useState } from 'react';
import { Map } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

export const CurrentMap = (props) => {
    
    return (
        <Map
        google = {props.google}
        zoom = {17}
        style = {mapStyles}
        initialCenter = {{
        lat:  -19.8157, 
        lng: -43.9542  
        }}
        />
    );

};