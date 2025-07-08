import React, { useEffect, useState } from 'react';

// Importing Google Maps API script from a CDN (make sure you use your own API key)
const GoogleMap = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Dynamically load the Google Maps API script only once
        if (!loaded) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);

            window.initMap = () => {
                // This function will be called after the API script is loaded
                const map = new window.google.maps.Map(document.getElementById('google-map'), {
                    center: { lat: 33.985, lng: -118.470 },  // Coordinates of the location
                    zoom: 14,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#212121"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        }
                    ]
                });

                // Add a marker for the location
                const marker = new window.google.maps.Marker({
                    position: { lat: 33.985, lng: -118.470 },
                    map: map,
                    title: 'Los Angeles'
                });

                // Create an info window that displays the address and hours
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `
                        <div>
                            <strong>Los Angeles</strong><br>
                            6100 Wilshire Blvd 2nd Floor CA 9004 +1 310 499 7700<br>
                            <strong>Opening hours:</strong><br>
                            Monday-Saturday 11am–7pm ET<br>
                            Sunday 11am–6pm ET
                        </div>
                    `
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });

                // Set loaded to true after initializing the map
                setLoaded(true);
            };
        }
    }, [loaded]);

    return (
        <div
            id="google-map"
            style={{
                height: '500px',
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
        />
    );
};

export default GoogleMap;
