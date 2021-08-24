export { useInput } from "./useInput";
export { useTabs } from "./useTab";
export { useTitle } from "./useTitle";
export { useClick } from "./useClick";
export { useHover } from "./useHover";
export { useConfirm } from "./useConfirm";
export { usePreventLeave } from "./usePreventLeave";
export { useFadeIn } from "./useFadeIn";
export { useNetwork } from "./useNetwork";
export { useScroll } from "./useScroll";
export { useFullScreen } from "./useFullScreen";
export { useNotification } from "./useNotification";

// export { useBeforeLeave } from "./useBeforeLeave";

let working = [];

//useHover
export const mouseHover = (p) => {

    p.target.style.color = "#ff9933";
    setTimeout(() => {
        p.target.style.color = "#000";
    }, 1000)

};

//useClick
export const sayHello = (p) => {

    if (working.includes("sayHello")) {
        working = working.filter((e) => e !== "sayHello");
        p.target.style.color = "black";
        p.target.innerText = "Bye!"
    } else {
        working.push("sayHello");
        p.target.style.color = "red";
        p.target.innerText = "Hi!"
    }

};

export const throttle = (func, delay) => {
    let prev = Date.now() - delay;

    return (...args) => {
        let current = Date.now();
        if (current - prev >= delay) {
            console.log(args)
            prev = current;
            func.apply(null, args);
        }
    }
};

// randomColor

export const randomColor = () => {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    return [componentToHex(getRandomInt(30, 250))
        , componentToHex(getRandomInt(30, 250))
        , componentToHex(getRandomInt(30, 250))]

}