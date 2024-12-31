import './style/display.css';
import React, { useState, useEffect } from "react";
const styles = {
    fontsize: "20px",
    color: '#08d6ff',
}
export default function Contact() {
    const [height, setHeight] = useState("10px");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHeight("250px");
        }, 10); // Small delay to trigger transition
        return () => clearTimeout(timeout); // Clean up timeout when unmounting
    }, []); // Run effect only on mount
    const DivStyles = {
        height: height,
        transition: "height 2s ease-in-out",
        overflow: "hidden"
    }
    return (
        <>
            <div className="contact-info">
                <h2>Contact Me</h2>
                <p style={styles}>If you'd like to connect, here's how you can reach me:</p>
                <div className="phone">
                    <span className='phone-child' style={{ width: '50px' }}>
                        <div style={{ color: '#08d6ff' }}>Phone:</div>
                    </span>
                    <span className='phone-child' style={{ marginLeft: '-205px', marginTop: '0px' }} >
                        <a href="tel:+918081731062">8081731062</a>
                    </span>
                    <span className='phone-child' style={{ width: '50px' }}>
                        <div style={{ color: '#08d6ff' }}>Email:</div>
                    </span>
                    <span className='phone-child' style={{ marginLeft: '-210px', marginTop: '0px' }}>
                        <a href="mailto:sachintiwari.751858@gmail.com">sachintiwari.751858@gmail.com</a>
                    </span>

                </div>
                <div className='unique-heading'>
                    Freedom on Four Wheels=>
                </div>
                <p className="unique-message">
                    Rent the perfect car for any occasion with flexible plans. Enjoy seamless booking and unmatched convenience.
                </p>
            </div>
            <div className="form" style={DivStyles}>
                <div id="book_input_detailsid ">
                    <form id="addbook_inlibr" className="MAIN">
                        <label htmlFor="label1" className="field-label2-position">Enter Your Name:</label>
                        <input type="text" id="bookCode" name="bookCode" placeholder="Enter Your Name Here" />
                        <label htmlFor="label2" className="field-label3-position">Enter Your Contact:</label>
                        <input type="text" id="authorName" name="authorName" placeholder="Enter Your Contact Here" />
                        <textarea id="Massage" rows="4" placeholder="Type here..."></textarea>
                        <button type="submit" className="submit-button">Submit</button>
                        <button type="reset" className="reset">Reset</button>
                    </form>
                </div>
            </div>
        </>
    )
}
