import React, { useState } from "react"
import { Marker } from 'google-maps-react';


export const MarkerLabel = (props) => {
    const [name, setName] = useState('');

    return (
        <Marker onClick={props.onClick} name={props.name}/>
    );
}