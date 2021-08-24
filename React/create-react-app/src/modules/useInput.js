import { useState } from "react";

export const useInput = (initVal, validator) => {
    const [value, setValue] = useState(initVal);
    const onChange = event => {
        const {
            target: { value }
        } = event; // ES6

        // 동일한 코드 => const value = event.target.value;+

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};