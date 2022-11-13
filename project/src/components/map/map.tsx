import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { CityType } from '../../types/city';
import { OfferType } from '../../types/offer';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  activeOffer: OfferType | undefined;
  heightMap:number;
};

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({ city, offers, activeOffer, heightMap }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className='cities__map map'
      style={{ height: `${heightMap}px` }}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
