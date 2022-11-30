import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from './Map.module.css';

export default function Map(props) {
     const { center = { lat: 44, lng: -80 } } = props;
     const { isLoaded } = useLoadScript({ googleMapsApiKey: '' });

     if (!isLoaded) return <div>Loading</div>;

     return (
          <div>
               <GoogleMap zoom={4} center={center} mapContainerClassName={styles.map_container}>
                    <Marker position={center} />{' '}
               </GoogleMap>
          </div>
     );
}
