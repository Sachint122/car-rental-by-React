import React from 'react';
import c1 from '../components/ImageCar/SevenSeater/car1.jpg';
import c2 from '../components/ImageCar/SevenSeater/car2.jpg';
import c3 from '../components/ImageCar/SevenSeater/car3.jpg';
import c4 from '../components/ImageCar/SevenSeater/car4.jpg';
import c5 from '../components/ImageCar/SevenSeater/car5.jpg';
import c6 from '../components/ImageCar/SevenSeater/car6.jpg';
import c7 from '../components/ImageCar/SevenSeater/car7.jpg';
import c8 from '../components/ImageCar/SevenSeater/car8.jpg';
import c9 from '../components/ImageCar/SevenSeater/car9.jpg';
import c10 from '../components/ImageCar/SevenSeater/car10.jpg';
import MainCard from './card';
export default function Seven_Seater() {
    const cardData = [
        {
            photo: c1,
            price:  200,
            distance: 100,
            description: 'Sporty two-seater convertible'
        },
        {
            photo: c2,
            price:  200,
            distance: 80,
            description: 'Compact Seven_Seater coupe'
        },
        {
            photo: c3,
            price:  220,
            distance: 120,
            description: 'Luxury Seven_Seater roadster'
        },
        {
            photo: c4,
            price:  170,
            distance: 90,
            description: 'Electric Seven_Seater city car'
        },
        {
            photo: c5,
            price:  180,
            distance: 80,
            description: 'High Tech Seven_Seater'
        },
        {
            photo: c6,
            price:  170,
            distance: 100,
            description: 'A family pack for Seven seater'
        },
        {
            photo: c7,
            price:  180,
            distance: 120,
            description: 'A high speed with amazing look '
        },
        {
            photo: c8,
            price:  180,
            distance: 130,
            description: 'A van for seven seater for afforatable price😈'
        },
        {
            photo: c9,
            price:  230,
            distance: 150,
            description: ' a mazing look with high range of km😉'
        },
        {
            photo: c10,
            price:  220,
            distance: 90,
            description: 'A oldest model for old is gold lover people❤️'
        }
    ];
    return (
      <MainCard cardData={cardData}/>
    )
}