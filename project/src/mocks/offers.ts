import { OfferType } from '../types/offer';

export const offers:OfferType[] = [
  {
    id: 135,
    title: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating:0.8,
    images:['img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/room.jpg'],
    description:'Located in Amsterdam Center, SWEETS - Hortusbrug is set in a bridge house with a balcony. It is one of the 28 accommodations that housed bridge keepers between 1673 and 2017. In SWEETS - Hortusbrug guests can enjoy a view on the canal. The bridge house has noise level medium',
    location:{
      city:'Amsterdam',
      latitude:52.3909553943508,
      longitude:4.85309666406198,
      address:'Nieuwezijds Voorburgwal 119-121, Amsterdam City Center, 1012 RH Amsterdam, Netherlands '
    },
    isPremium:true,
    maxAdults:4,
    host:{
      name:'Angelina',
      isPro:true,
      avatar:'img/avatar-angelina.jpg'
    },
    amenities:['Heating', 'Toilet', 'Wifi']
  },
  {
    id: 202,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating:0.45,
    images:['img/apartment-03.jpg','img/apartment-02.jpg','img/apartment-01.jpg','img/room.jpg'],
    description:'Offering a year-round outdoor pool with city views, Ohla Eixample is a stylish boutique hotel located 10 minutes’ walk from two of Gaudi’s major works, La Pedrera and Casa Batlló. There is free high-speed WiFi available throughout and a Clef d’Or Concierge service.',
    location:{
      city:'Amsterdam',
      latitude:52.3609553943508,
      longitude:4.85309666406198,
      address:'Thorbecke plein 3, Amsterdam City Center, 1012 LE Amsterdam, Netherlands '
    },
    isPremium:true,
    maxAdults:3,
    host:{
      name:'Havier',
      isPro:false,
      avatar:'img/avatar-max.jpg'
    },
    amenities:['Terrace', 'Swimming pool', 'Wifi','City view','Balcony','Bathtub']
  },
  {
    id: 329,
    title: 'Canal View Prinsengracht',
    type: 'House',
    price: 135,
    rating:0.67,
    images:['img/apartment-02.jpg','img/room.jpg','img/apartment-01.jpg','img/apartment-03.jpg'],
    description:'Located in Amsterdam and with Karlsplatz (Stachus) reachable within a 9-minute walk, Boutique Hotel Germania provides a bar, allergy-free rooms, free WiFi throughout the property and a casino. Popular points of interest nearby include Asamkirche, Marienplatz and Konigsplatz. The property has a 24-hour front desk, an ATM and luggage storage for guests.',
    location:{
      city:'Amsterdam',
      latitude:52.3909553943508,
      longitude:4.929309666406198,
      address:'Thorbecke plein 3, Amsterdam City Center, 1012 LE Amsterdam, Netherlands'
    },
    isPremium:false,
    maxAdults:3,
    host:{
      name:'Klaus',
      isPro:true,
      avatar:'img/avatar-max.jpg'
    },
    amenities:['Parking', ' Pet friendly', 'Tea/Coffee Maker','Non-smoking rooms',' Bar']
  },
  {
    id: 183,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 100,
    rating:0.67,
    images:['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg', 'img/apartment-03.jpg'],
    description:'Located in a beautiful and very quiet "bourgeois street" in the 15th arrondissement of Amsterdam, in the heart of the Convention district and very close to the Porte de Versailles Exhibition Center, the Hotel Moderniste opens its doors after a complete renovation.',
    location:{
      city:'Amsterdam',
      latitude:52.3809553943508,
      longitude:4.939309666406198,
      address:'Bronckhorststraat 14, Oud Zuid, 1071 WR Amsterdam, Netherlands'
    },
    isPremium:false,
    maxAdults:2,
    host:{
      name:'Louis',
      isPro:true,
      avatar:'img/avatar-max.jpg'
    },
    amenities:['Airport shuttle', ' Pet friendly', 'WiFi','Non-smoking rooms','Facilities for disabled guests']
  }
];
