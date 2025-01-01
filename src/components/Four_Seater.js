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
export default function Four_Seater() {
    const cardStyle = {
        width: '300px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    };
    const cardImageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    };

    const cardContentStyle = {
        padding: '15px',
    };

    const priceDistanceStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    };

    const priceStyle = {
        fontWeight: 'bold',
        color: '#08d6ff',
    };

    const distanceStyle = {
        color: '#666',
    };

    const descriptionStyle = {
        fontSize: '14px',
        color: '#333',
    }
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
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
        }}>
            {cardData.map((card, index) => (
                <div  key={index} style={cardStyle}>
                    <img src={card.photo} alt={card.description} style={cardImageStyle} />
                    <div style={cardContentStyle}>
                        <div style={priceDistanceStyle}>
                            <span style={priceStyle}>${card.price}</span>
                            <span style={distanceStyle}>{card.distance} km</span>
                        </div>
                        <p style={descriptionStyle}>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}