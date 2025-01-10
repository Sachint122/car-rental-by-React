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
    const [boxShadow, setBoxShadow] = useState("none");
    const [imgHeight, setImgHeight] = useState("40px");
    const [tempColor, setTempColor] = useState(null);
    var temp;

    const handleAnimation = () => {
        setImgHeight("40px");
        setTimeout(() => {
            setImgHeight("50px");
            const getRandomColor = () => {
                let randomColor;
                do {
                    temp = Math.floor(Math.random() * colors.length);
                    randomColor = colors[temp];
                } while (randomColor === tempColor);
                return randomColor;
            };
            const newColor = getRandomColor();
            setBoxShadow(`0px 0px 20px ${newColor}`);
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
            style={{
                background: "linear-gradient(45deg, #36D1DC, #5B86E5)",
                boxShadow: boxShadow
            }}
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
