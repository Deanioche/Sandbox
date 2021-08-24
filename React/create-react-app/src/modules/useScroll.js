import { useEffect, useState } from "react";
import { randomColor } from "./exports";

export const useScroll = () => {
    const [pos, setPos] = useState({ x: 0, y: 0, c: 'black' })
    const onScroll = (event) => {

        let c = randomColor();

        setPos({ y: window.scrollY, x: window.scrollX, c: `#${c[0]}${c[1]}${c[2]}` });
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return pos;
}