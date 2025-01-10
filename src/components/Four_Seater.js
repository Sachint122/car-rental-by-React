import React from 'react';
import c1 from '../components/ImageCar/FourSeater/car1.jpg';
import c2 from '../components/ImageCar/FourSeater/car2.jpg';
import c3 from '../components/ImageCar/FourSeater/car3.jpg';
import c4 from '../components/ImageCar/FourSeater/car4.jpg';
import c5 from '../components/ImageCar/FourSeater/car5.jpg';
import c6 from '../components/ImageCar/FourSeater/car6.jpg';
import c7 from '../components/ImageCar/FourSeater/car7.jpg';
import c8 from '../components/ImageCar/FourSeater/car8.jpg';
import c9 from '../components/ImageCar/FourSeater/car9.jpg';
import c10 from '../components/ImageCar/FourSeater/car10.jpg';
import MainCard from './card';
export default function Four_Seater() {
    const cardData = [
        {
            photo: c1,
            price: 144,
            distance: 100,
            description: 'Sporty two-seater convertible'
        },
        {
            photo: c2,
            price: 140,
            distance: 80,
            description: 'Compact Four-seater coupe'
        },
        {
            photo: c3,
            price: 160,
            distance: 120,
            description: 'Luxury Four-seater roadster'
        },
        {
            photo: c4,
            price: 130,
            distance: 90,
            description: 'Electric Four-seater city car'
        },
        {
            photo: c5,
            price: 120,
            distance: 80,
            description: 'High Tech Four-seater'
        },
        {
            photo: c6,
            price: 100,
            distance: 100,
            description: 'A family pack for blue lover Four seater'
        },
        {
            photo: c7,
            price: 120,
            distance: 120,
            description: 'A high speed with amazing look for yellow color lover'
        },
        {
            photo: c8,
            price: 120,
            distance: 130,
            description: 'A luxry car for four seater with great features😈'
        },
        {
            photo: c9,
            price: 170,
            distance: 150,
            description: ' a mazing look with high range of km😉'
        },
        {
            photo: c10,
            price: 160,
            distance: 90,
            description: 'A oldest model for old is gold lover people❤️'
        }
    ];
    return (
      <MainCard cardData={cardData}/>
    )
}