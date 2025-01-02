import React, { useState } from "react";
import bookeme from './ImageCar/book_me.jpg';
// import "./ButtonAnimation.css";

const ButtonAnimation = () => {
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33A1",
        "#33FFF1", "#FF9A33", "#9AFF33", "#33A1FF", "#F033FF",
        "#FF333A", "#33FF9A", "#337AFF", "#A1FF33", "#FF7AFF",
        "#33FFA1", "#FF33F0", "#33F0FF", "#FF5733", "#7A33FF",
    ];

    const [bgColor, setBgColor] = useState("rgb(240, 238, 238)");
    const [boxShadow, setBoxShadow] = useState("none");
    const [imgHeight, setImgHeight] = useState("50px");
    const [tempColor, setTempColor] = useState(null);

    const handleAnimation = () => {
        setImgHeight("50px");
        setTimeout(() => {
            setImgHeight("40px");
            const getRandomColor = () => {
                let randomColor;
                do {
                    randomColor = colors[Math.floor(Math.random() * colors.length)];
                } while (randomColor === tempColor);
                return randomColor;
            };
            const newColor = getRandomColor();
            setBgColor(newColor);
            setBoxShadow(`0px 0px 30px ${newColor}`);
            setTempColor(newColor);
        }, 200);
    };
    const remove = {
        mixBlendMode: 'difference', // This removes the black background visually
        width: '150px',
        hight: 'auto',
        // backgroundColor: 'red',
        marginTop: '-45px',

    };
    return (
        <div
            className="animated-div"
            onClick={handleAnimation}
            style={{ backgroundColor: bgColor, boxShadow: boxShadow }}
        >
            <img
                src={bookeme}
                alt="Window Logo"
                style={{ height: imgHeight, transition: "0.3s", remove }}
            />
        </div>
    );
};

export default ButtonAnimation;
