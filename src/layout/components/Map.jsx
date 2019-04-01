import * as React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

export const Map = withScriptjs(withGoogleMap(() =>
    <GoogleMap
        options={ options }
    >
        <Marker
            position={{ lat: 37.890737, lng: -4.805547 }}
            icon={{ scaledSize: {width: 60, height: 60}, url: '/assets/img/ceremony-mark.svg' }}
            animation={ 2 }
            onClick={ () => window.open('https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+de+la+Asunci%C3%B3n+(Parque+Figueroa)/@37.8904177,-4.808643,17z/data=!3m1!4b1!4m5!3m4!1s0xd6cdf51f1cb0a67:0x7835b05801aa7c17!8m2!3d37.8904135!4d-4.806449') }
        />
        <Marker
            position={{ lat: 37.914776, lng: -4.802771 }}
            icon={{ scaledSize: {width: 60, height: 60}, url: '/assets/img/celebration-mark.svg' }}
            animation={ 2 }
            onClick={ () => window.open('https://www.google.com/maps/place/Ayre+Hotel+C%C3%B3rdoba/@37.9152524,-4.806028,17z/data=!3m1!4b1!4m5!3m4!1s0xd6cdf2ef6833071:0x44615e4e77f065d0!8m2!3d37.9152482!4d-4.803834') }
        />
    </GoogleMap>
));

const options = {
    center: {
        lat: 37.902766,
        lng: -4.804158
    },
    zoom: 14,
    disableDefaultUI: true,
    fullscreenControl: true,
    styles: [
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#bbdefb'
                }
            ]
        },
        {
            featureType: 'landscape',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#fafafa'
                }
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#757575'
                }
            ]
        },
        {
            featureType: 'transit',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#ffffff'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#e0e0e0'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#eeeeee'
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [
                {
                    color: '#b4d2c8'
                }
            ]
        }
    ]
};
