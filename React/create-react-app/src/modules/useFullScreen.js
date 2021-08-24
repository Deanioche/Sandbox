import { useRef } from "react";

export const useFullScreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {

        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen(); // chrome
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();// firefox
            } else if (element.current.webkitRequestFullScreen) {
                element.current.webkitRequestFullScreen();// opera
            } else if (element.current.msRequestFullScreen) {
                element.current.msRequestFullScreen(); // MicroSoft
            }
            runCb(true);
        }
    }
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen(); // chrome
        } else if (document.mozExitFullScreen) {
            document.mozExitFullScreen(); // firefox
        } else if (document.webkitExitFullScreen) {
            document.webkitExitFullScreen(); // opera
        } else if (document.msExitFullScreen) {
            document.msExitFullScreen(); // MicroSoft
        }
        // Fullscreen의 요청은 element에서 하지만
        // Fullscreen에서 빠져나오는건 document에서 한다.
        runCb(false);
    }
    return { element, triggerFull, exitFull };
}