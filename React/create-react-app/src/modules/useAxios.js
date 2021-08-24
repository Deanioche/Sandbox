import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    // 별도로 설정한 axiosInstance 인수가 없으면 defaultAxios를 대신 담는다.

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(new Date()); // trigger가 어떤 수로든 변경되면 useEffect에서 감지하고 재실행된다.
    }
    useEffect(() => {
        if (!opts.url) return;
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({ ...state, loading: false, error })
        })
    }, [trigger])
    return { ...state, refetch };
}

export default useAxios;