import { useEffect, useRef } from "react";

export const useHover = (fun) => {
    // 빈 ref 생성
    const element = useRef();

    useEffect(() => {
        const innerElement = element.current;
        if (innerElement) {
            innerElement.addEventListener("mouseenter", fun);
            innerElement.style.cursor = "pointer";
        }
        return () => {
            if (innerElement) {
                innerElement.removeEventListener("mouseenter", fun);
            }
        }
    }, [fun])

    return element;
}