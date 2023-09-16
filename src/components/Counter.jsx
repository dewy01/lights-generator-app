import React, { useState } from 'react';
import { Text } from "./Text";
import { IconAdd } from './icons/IconAdd';
import { IconMinus } from './icons/IconMinus';

import styles from "./Counter.module.css"

export const Counter = (props) => {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        if(value <= 0) return;
        setValue(value - 1);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <Text>
                    {value} {props.text}
                </Text>
                <nav>
                <IconMinus onClick={handleDecrement}></IconMinus>
                <IconAdd onClick={handleIncrement}></IconAdd>
                </nav>
            </div>
        </>
    );
};