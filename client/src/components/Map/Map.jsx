import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from './Map.module.css';
import Spinner from '../Spinner/Spinner';

export default function Map(props) {
     const { center = { lat: 44, lng: -80 } } = props;
     const { isLoaded } = useLoadScript({ googleMapsApiKey: '' });

     if (!isLoaded) return <Spinner />;

     return (
          <div>
               <GoogleMap zoom={4} center={center} mapContainerClassName={styles.map_container}>
                    <Marker position={center} />{' '}
               </GoogleMap>
          </div>
     );
}
