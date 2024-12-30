import React, { useEffect, useState } from 'react';
import s1 from '../components/ImageCar/banner1.jpg';
import s2 from '../components/ImageCar/banner2.jpg';
import s3 from '../components/ImageCar/banner3.jpg';
import w1 from '../components/ImageCar/car-rental-promotion.jpg';
import w2 from '../components/ImageCar/car-rental-promotion2.jpg';
import w3 from '../components/ImageCar/car-rental-promotion3.jpg';

export default function Main() {
    const commonwhy = {
        width: '370px',
        height: '370px',
        objectFit: 'cover',/* Ensures the image maintains its aspect ratio within the defined size */
        marginBottom: '20px',
    }
    const images = [s1, s2, s3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);
    return (
        <>
            <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: currentIndex === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                        }}
                    >
                        <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: '100%' }} />
                    </div>
                ))}
            </div>
            <section className="why-choose-us py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose Us?</h2>
                    <div className="row g-4">
                        {/* Feature 1 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow">
                                <div className="card-body text-center">
                                    <img style={commonwhy}
                                        src={w1}
                                        alt="Affordable Rates"
                                        className="mb-3"
                                    />
                                    <h5 className="card-title">Affordable Rates</h5>
                                    <p className="card-text">
                                        Enjoy competitive pricing with no hidden charges. Drive the car you
                                        love at a price you can afford.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow">
                                <div className="card-body text-center">
                                    <img style={commonwhy}
                                        src={w2}
                                        alt="Wide Selection"
                                        className="mb-3"
                                    />
                                    <h5 className="card-title">Wide Selection</h5>
                                    <p className="card-text">
                                        Choose from a variety of vehicles, from compact cars to luxury SUVs,
                                        all well-maintained and ready to go.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow">
                                <div className="card-body text-center">
                                    <img style={commonwhy}
                                        src={w3}
                                        alt="24/7 Support"
                                        className="mb-3"
                                    />
                                    <h5 className="card-title">24/7 Customer Support</h5>
                                    <p className="card-text">
                                        Our dedicated support team is available around the clock to assist
                                        you whenever you need help.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
