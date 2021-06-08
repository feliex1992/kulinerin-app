let map;
let infoWindow;
let marker;

function initMap() {
  const defPos = { lat: -6.930817, lng: 107.506558 };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: defPos,
  });

  marker = new google.maps.Marker({
    map,
    animation: google.maps.Animation.DROP,
  });

  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement('button');

  locationButton.classList.add('custom-map-control-button');

  const iconLocation = document.createElement('i');

  iconLocation.classList.add('fas');
  iconLocation.classList.add('fa-crosshairs');

  locationButton.appendChild(iconLocation);
  locationButton.title = 'Get Your Current Location.';

  map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(locationButton);

  locationButton.addEventListener('click', () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          marker.setPosition(pos);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });

  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function handleLocationError(browserHasGeoLocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeoLocation
      ? 'Error: Get data lokasi gagal.'
      : 'Error: Browser anda tidak mendukung geolocation.',
  );
  infoWindow.open(map);
}

window.initMap = initMap;
