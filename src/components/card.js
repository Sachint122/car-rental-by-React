import React from 'react';
import ButtonAnimation from '../components/aniameted_button';
export default function MainCard(props) {
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

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
        }}>
            {props.cardData.map((card, index) => (
                <div key={index} style={cardStyle}>
                    <img src={card.photo} alt={card.description} style={cardImageStyle} />
                    <div style={cardContentStyle}>
                        <div style={priceDistanceStyle}>
                            <span style={priceStyle}>${card.price}</span>
                            <ButtonAnimation />
                            <span style={distanceStyle}>{card.distance} km</span>
                        </div>
                        <p style={descriptionStyle}>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}