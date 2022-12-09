import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { CityType } from '../../types/city';
import { OfferType } from '../../types/offer';
import cn from 'classnames';
import { MARKER_ANCHOR, MARKER_SIZE, MARKER_URL_ACTIVE, MARKER_URL_DEFAULT } from '../../const';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  activeOfferId: number | null;
  mapHeight?: number;
  mapClassName: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: MARKER_URL_DEFAULT,
  iconSize: [MARKER_SIZE[0], MARKER_SIZE[1]],
  iconAnchor: [MARKER_ANCHOR[0], MARKER_ANCHOR[1]],
});

const activeCustomIcon = new Icon({
  iconUrl: MARKER_URL_ACTIVE,
  iconSize: [MARKER_SIZE[0], MARKER_SIZE[1]],
  iconAnchor: [MARKER_ANCHOR[0], MARKER_ANCHOR[1]],
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

    if (map) {
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

      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }

    return () => {
      map &&
        markers.forEach((value) => {
          value.removeFrom(map);
        });
    };
  }, [map, city, offers, activeOfferId]);

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
