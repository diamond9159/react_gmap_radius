/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.

interface City {
  center: google.maps.LatLngLiteral;
  population: number;
}

const citymap: Record<string, City> = {
  Tokyo: {
    //  田町日工ビル, Tamachi Nikko Building,
    //  Japan, 〒108-0014 Tokyo, Minato  City,
    //  Shiba, 5-chōme−29−14
    //  35.6488620, 139.7422115
    center: { lat: 35.648862, lng: 139.7422115 },
    population: 214856,
  },
};

function initMap(): void {
  // Create the map.
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 12,
      center: { lat: 35.648862, lng: 139.7422115 },
      mapTypeId: 'terrain',
    }
  );

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      //fillColor: '#FF0000',
      fillOpacity: 0.3,
      map,
      center: citymap[city].center,
      radius: 6000,
    });
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
