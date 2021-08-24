import { useEffect, useRef } from "react";

export const throttle = (func, delay) => {
    let prev = Date.now() - delay;

    return (...args) => {
        let current = Date.now();
        if (current - prev >= delay) {
            prev = current;
            func.apply(null, args);
        }
    }
};

export const useClick = (fun) => {
    const element = useRef();
    useEffect(() => {
        if (typeof fun !== "function") {
            return;
        }
        // 변수를 useEffect 안에서 선언해두지 않으면, useRef()가 unmount되는 시점에 null이 되어버리므로
        const innerElement = element.current;

        // component 가 mount 되었을 때,
        if (innerElement) {
            innerElement.addEventListener('click', fun);
            innerElement.style.cursor = "pointer";
        }

        // componentWillUnmount때 작동할 함수
        return () => {
            // 
            if (innerElement) {
                innerElement.removeEventListener("click", fun);
            }
        }
    }, [fun]); // dependency는 없음 = componentUpdate에는 반응하지 않음
    return element;
}
