import { geolocated } from "react-geolocated";
import React from "react";

class Geolocation extends React.Component {

    render() {
        const findDistance = (name, lat1, lon1, lat2, lon2, data) => {
            let newData = {"name": '', "currentDist": 0};
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            
            data.currentDist === 0 || data.currentDist <= dist ? (newData.name = name, newData.currentDist = dist) : (newData.name = data.name, newData.currentDist = data.currentDist);

            return newData;
        }

        const mapArray = [
            {
                name: "L.A.",
                longitude: 34.1,
                latitude: -118.2,
            },
            {
                name: "MONTREAL",
                longitude: 45.5,
                latitude: -73.5,
            },
            {
                name: "NEW YORK",
                longitude: 40.7,
                latitude: -74.0,
            },
            {
                name: "MIAMI",
                longitude: 25.8,
                latitude: -80.2,
            },
            {
                name: "LONDON",
                longitude: 51.5,
                latitude: -0.1,
            },
            {
                name: "PARIS",
                longitude: 48.9,
                latitude: 2.4,
            },
            {
                name: "HELINSKI",
                longitude: 60.2,
                latitude: 24.9,
            },
            {
                name: "SINGAPORE",
                longitude: 1.4,
                latitude: 103.8,
            },
            {
                name: "SYDNEY",
                longitude: -33.9,
                latitude: 151.2,
            },
        ]

        let data = {"name": '', "currentDist": 0};
        return (
            !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Please enable your location</div>
            ) : this.props.coords ? (
                mapArray.forEach(element => {
                    data = findDistance(element.name, element.latitude, element.longitude, this.props.coords.latitude, this.props.coords.longitude, data);
                }),
                <>
                <div style={{padding: "0px"}} className="heading-container heading-container--center">
                    <p className="heading-primary__sub--light">Your best location is: <span className="u-color-primary">{data.name}</span></p>
                </div>
                </>
            ) : (
                null
            )
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocation);