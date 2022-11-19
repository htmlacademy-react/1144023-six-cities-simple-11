import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { CityType } from '../../types/city';
import { OfferType } from '../../types/offer';
import cn from 'classnames';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  activeOfferId: number | null;
  mapHeight?: number;
  mapClassName: string;
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

function Map({
  city,
  offers,
  activeOfferId,
  mapHeight,
  mapClassName,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    map &&
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        markers.push(marker);

        marker
          .setIcon(
            activeOfferId !== null && offer.id === activeOfferId
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

    return () => {
      map &&
        markers.forEach((value) => {
          value.removeFrom(map);
        });
    };
  }, [map, offers, activeOfferId]);

  return (
    <section
      className={cn('map', mapClassName)}
      style={mapHeight ? { height: `${mapHeight}px` } : undefined}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
