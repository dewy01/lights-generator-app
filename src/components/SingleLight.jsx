import { useState } from "react";
import LightTurnedOff from "/images/light-turned-off.svg"
import LightBlue from "/images/light-blue.svg"
import LightGreen from "/images/light-green.svg"
import LightOrange from "/images/light-orange.svg"
import LightPink from "/images/light-pink.svg"
import LightRed from "/images/light-red.svg"
import LightYellow from "/images/light-yellow.svg"

const lights = [LightBlue,LightGreen,LightOrange,LightPink,LightRed,LightYellow];

const getRandomIndex = () => {
    return Math.floor(Math.random()*lights.length);
};

export const SingleLight = () => {
    const [isOn, setOn] = useState(true);

    const randomIndex = getRandomIndex();

    const imageSrc = isOn ? lights[randomIndex] : LightTurnedOff;

    const handleToggle = () => {
        setOn(!isOn)
    }

    return (
        <>
            <img onClick={handleToggle} src={imageSrc} alt="Single light" />
        </>
    );
};