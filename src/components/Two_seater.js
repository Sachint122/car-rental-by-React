import React from 'react';
import c1 from '../components/ImageCar/TwoSeater/car1.jpg';
import c2 from '../components/ImageCar/TwoSeater/car2.jpg';
import c3 from '../components/ImageCar/TwoSeater/car3.jpg';
import c4 from '../components/ImageCar/TwoSeater/car4.jpg';
import c5 from '../components/ImageCar/TwoSeater/car5.jpg';
import c6 from '../components/ImageCar/TwoSeater/car6.jpg';
import c7 from '../components/ImageCar/TwoSeater/car7.jpg';
import c8 from '../components/ImageCar/TwoSeater/car8.jpg';
import c9 from '../components/ImageCar/TwoSeater/car9.jpg';
import c10 from '../components/ImageCar/TwoSeater/car10.jpg';
import MainCard from './card';
export default function Two_seater() {
    const cardData = [
        {
            photo: c1,
            price: 50,
            distance: 100,
            description: 'Sporty two-seater convertible'
        },
        {
            photo: c2,
            price: 45,
            distance: 80,
            description: 'Compact two-seater coupe'
        },
        {
            photo: c3,
            price: 55,
            distance: 120,
            description: 'Luxury two-seater roadster'
        },
        {
            photo: c4,
            price: 40,
            distance: 90,
            description: 'Electric two-seater city car'
        },
        {
            photo: c5,
            price: 120,
            distance: 80,
            description: 'High Tech Two-seater'
        },
        {
            photo: c6,
            price: 100,
            distance: 100,
            description: 'sports bike for two seater'
        },
        {
            photo: c7,
            price: 50,
            distance: 120,
            description: 'A high speed with amazing look'
        },
        {
            photo: c8,
            price: 60,
            distance: 130,
            description: 'Modify bike for two seater with great features😈'
        },
        {
            photo: c9,
            price: 30,
            distance: 150,
            description: 'A afortable bike with high range of km😉'
        },
        {
            photo: c10,
            price: 70,
            distance: 90,
            description: 'A amazing bike for two seater black lover❤️'
        }
    ];
    return (
       <MainCard cardData={cardData}/>
    )
}