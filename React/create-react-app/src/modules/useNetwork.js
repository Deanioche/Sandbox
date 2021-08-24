import { useEffect, useState } from "react";

export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    // navigator.onLine은 현재 웹사이트가 온라인인지 아닌지를 판별해 true/ false 반환
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);

    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])

    return status;
};